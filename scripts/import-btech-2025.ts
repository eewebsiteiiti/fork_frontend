import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';
import Database from 'better-sqlite3';
import { execSync } from 'child_process';

const EXCEL_FILE = '/home/ayush/Downloads/B.Tech 2025 Details.xlsx';
const IMAGES_DIR = '/home/ayush/fork_frontend/public/images/people/students/btech';
const DB_PATH = '/home/ayush/fork_frontend/database.sqlite';
const TEMP_DIR = '/tmp/btech2025-extract';

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Extract xlsx to access embedded images
if (fs.existsSync(TEMP_DIR)) {
  fs.rmSync(TEMP_DIR, { recursive: true });
}
fs.mkdirSync(TEMP_DIR, { recursive: true });
execSync(`unzip -q "${EXCEL_FILE}" -d "${TEMP_DIR}"`);

// Read the Excel file
const workbook = XLSX.readFile(EXCEL_FILE);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Get the data - skip first 2 rows (title and headers)
const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

// Find header row and data rows
const headerRowIndex = rawData.findIndex(row =>
  row && row[1] && String(row[1]).includes('ROLL')
);

console.log('Header row index:', headerRowIndex);
console.log('Header row:', rawData[headerRowIndex]);

// Data starts after header row
const dataRows = rawData.slice(headerRowIndex + 1).filter(row =>
  row && row[1] && !isNaN(Number(row[1]))
);

console.log(`Found ${dataRows.length} student rows`);

// Parse image-to-row mapping from drawings
const drawingDir = path.join(TEMP_DIR, 'xl', 'drawings');
const mediaDir = path.join(TEMP_DIR, 'xl', 'media');

let imageMapping: Map<number, string> = new Map();

if (fs.existsSync(drawingDir)) {
  const drawingFiles = fs.readdirSync(drawingDir).filter(f => f.endsWith('.xml'));

  for (const drawingFile of drawingFiles) {
    const drawingPath = path.join(drawingDir, drawingFile);
    const drawingXml = fs.readFileSync(drawingPath, 'utf-8');

    // Parse anchor positions and image references
    const anchorRegex = /<xdr:twoCellAnchor[^>]*>([\s\S]*?)<\/xdr:twoCellAnchor>/g;
    let match;

    while ((match = anchorRegex.exec(drawingXml)) !== null) {
      const anchor = match[1];

      // Get row number (from element)
      const fromRowMatch = anchor.match(/<xdr:from>[\s\S]*?<xdr:row>(\d+)<\/xdr:row>/);

      // Get embed reference
      const embedMatch = anchor.match(/r:embed="(rId\d+)"/);

      if (fromRowMatch && embedMatch) {
        const row = parseInt(fromRowMatch[1]);
        const rId = embedMatch[1];

        // Read rels file to get actual image filename
        const relsPath = path.join(drawingDir, '_rels', `${drawingFile}.rels`);
        if (fs.existsSync(relsPath)) {
          const relsXml = fs.readFileSync(relsPath, 'utf-8');
          const relRegex = new RegExp(`Id="${rId}"[^>]*Target="([^"]+)"`);
          const relMatch = relsXml.match(relRegex);

          if (relMatch) {
            const imagePath = relMatch[1].replace('../media/', '');
            imageMapping.set(row, imagePath);
          }
        }
      }
    }
  }
}

console.log(`Found ${imageMapping.size} image mappings`);

// Connect to database
const db = new Database(DB_PATH);

// Prepare insert statement
const insert = db.prepare(`
  INSERT OR REPLACE INTO btech (roll_no, name, year)
  VALUES (?, ?, ?)
`);

// Process each student
let imagesCopied = 0;
const insertMany = db.transaction((students: any[]) => {
  for (const student of students) {
    insert.run(student.roll_no, student.name, student.year);
  }
});

const students: any[] = [];

for (let i = 0; i < dataRows.length; i++) {
  const row = dataRows[i];
  const rollNo = String(row[1]);
  const name = String(row[2] || '').trim();

  if (!rollNo || !name) continue;

  students.push({
    roll_no: rollNo,
    name: name,
    year: 2025
  });

  // The row in Excel is headerRowIndex + 1 + i (0-indexed in drawing)
  const excelRow = headerRowIndex + 1 + i;
  const imageFile = imageMapping.get(excelRow);

  if (imageFile && fs.existsSync(path.join(mediaDir, imageFile))) {
    const destPath = path.join(IMAGES_DIR, `${rollNo}.jpg`);
    fs.copyFileSync(path.join(mediaDir, imageFile), destPath);
    imagesCopied++;
  }
}

// Insert all students
insertMany(students);

console.log(`\nImported ${students.length} students to database`);
console.log(`Copied ${imagesCopied} images to ${IMAGES_DIR}`);

// Show first few students
console.log('\nFirst 5 students:');
students.slice(0, 5).forEach(s => {
  console.log(`  ${s.roll_no}: ${s.name}`);
});

// Cleanup
fs.rmSync(TEMP_DIR, { recursive: true });

db.close();
