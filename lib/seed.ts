import db from './db';
import { initializeDatabase } from './schema';
import fs from 'fs';
import path from 'path';

interface SeedMapping {
  file: string;
  table: string;
  columns: string[];
}

const seedMappings: SeedMapping[] = [
  {
    file: 'people_faculty.json',
    table: 'faculty',
    columns: ['name', 'title', 'email', 'details', 'address', 'link', 'image', 'subtitle', 'place', 'phone'],
  },
  {
    file: 'people_staff.json',
    table: 'staff',
    columns: ['name', 'title', 'email', 'phone', 'image'],
  },
  {
    file: 'people_btech.json',
    table: 'btech',
    columns: ['name', 'roll_no', 'year', 'image'],
  },
  {
    file: 'people_mtech.json',
    table: 'mtech',
    columns: ['name', 'roll_no', 'year', 'image'],
  },
  {
    file: 'people_phd.json',
    table: 'phd',
    columns: ['name', 'roll_no', 'year', 'image'],
  },
  {
    file: 'people_alumni.json',
    table: 'alumni',
    columns: ['name', 'roll_no', 'year', 'program', 'date', 'image'],
  },
  {
    file: 'people_ms.json',
    table: 'ms',
    columns: ['name', 'roll_no', 'year', 'image'],
  },
  {
    file: 'research_research.json',
    table: 'research',
    columns: ['specialization', 'person', 'description', 'name', 'link'],
  },
  {
    file: 'research_projects.json',
    table: 'projects',
    columns: ['title', 'worker', 'funding', 'duration', 'project_type'],
  },
  {
    file: 'research_uglabs.json',
    table: 'ug_labs',
    columns: ['name', 'description', 'keywords', 'image', 'review', 'equipments', 'experiments', 'location', 'area', 'category'],
  },
  {
    file: 'research_pglabs.json',
    table: 'pg_labs',
    columns: ['name', 'description', 'keywords', 'image', 'review', 'equipments', 'location', 'area', 'category'],
  },
  {
    file: 'course_course.json',
    table: 'courses',
    columns: ['course_code', 'name', 'credit', 'ltp', 'program'],
  },
  {
    file: 'course_coursenew.json',
    table: 'courses_new',
    columns: ['code', 'name', 'credit', 'ltp', 'program', 'semester', 'elective'],
  },
  {
    file: 'course_elective.json',
    table: 'electives',
    columns: ['code', 'name', 'credit', 'ltp', 'program'],
  },
  {
    file: 'events_events.json',
    table: 'events',
    columns: ['title', 'description', 'date', 'month', 'day', 'time', 'image', 'link'],
  },
  {
    file: 'announcements_announcements.json',
    table: 'announcements',
    columns: ['title', 'description', 'link'],
  },
  {
    file: 'news_news.json',
    table: 'news',
    columns: ['title', 'description', 'date', 'month', 'day', 'time', 'link'],
  },
  {
    file: 'reads_reads.json',
    table: 'reads',
    columns: ['title', 'content', 'author'],
  },
  {
    file: 'achievements_books.json',
    table: 'books',
    columns: ['year', 'name', 'author', 'publication', 'image'],
  },
  {
    file: 'achievements_facultyawards.json',
    table: 'faculty_awards',
    columns: ['year', 'name', 'award', 'image'],
  },
  {
    file: 'achievements_studentawards.json',
    table: 'student_awards',
    columns: ['year', 'name', 'award', 'roll_no'],
  },
  {
    file: 'achievements_patent.json',
    table: 'patents',
    columns: ['year', 'name', 'pi', 'uuid', 'status'],
  },
];

export async function seedDatabase() {
  // Initialize tables first
  initializeDatabase();

  const seedDir = path.join(process.cwd(), 'data', 'seed');

  for (const mapping of seedMappings) {
    const filePath = path.join(seedDir, mapping.file);

    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${mapping.file} - file not found`);
      continue;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    if (!Array.isArray(data) || data.length === 0) {
      console.log(`Skipping ${mapping.file} - no data`);
      continue;
    }

    // Check if table already has data
    const existingCount = db.prepare(`SELECT COUNT(*) as count FROM ${mapping.table}`).get() as { count: number };

    if (existingCount.count > 0) {
      console.log(`Skipping ${mapping.table} - already has ${existingCount.count} records`);
      continue;
    }

    // Prepare insert statement
    const columns = mapping.columns.join(', ');
    const placeholders = mapping.columns.map(() => '?').join(', ');
    const stmt = db.prepare(`INSERT INTO ${mapping.table} (${columns}) VALUES (${placeholders})`);

    // Insert data
    const insertMany = db.transaction((items: Record<string, unknown>[]) => {
      for (const item of items) {
        const values = mapping.columns.map((col) => {
          const value = item[col];
          if (value === null || value === undefined) return null;
          return value;
        });
        stmt.run(...values);
      }
    });

    insertMany(data);
    console.log(`Seeded ${data.length} records into ${mapping.table}`);
  }

  console.log('Database seeding completed!');
}

// Run if called directly
if (require.main === module) {
  seedDatabase();
}
