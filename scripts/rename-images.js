const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images');

// Track renames for code updates
const renames = [];

function standardizeName(filename) {
  const ext = path.extname(filename).toLowerCase();
  let name = path.basename(filename, path.extname(filename));

  // Convert to lowercase and replace underscores with hyphens
  name = name
    .toLowerCase()
    .replace(/_/g, '-')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');

  return name + ext;
}

function renameFilesInDir(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      renameFilesInDir(fullPath);
    } else if (stat.isFile()) {
      const newName = standardizeName(item);

      if (newName !== item) {
        const newPath = path.join(dir, newName);

        // Handle potential conflicts
        if (fs.existsSync(newPath) && newPath !== fullPath) {
          console.log(`SKIP (conflict): ${item} -> ${newName}`);
          continue;
        }

        fs.renameSync(fullPath, newPath);

        const relOld = path.relative(baseDir, fullPath);
        const relNew = path.relative(baseDir, newPath);
        renames.push({ old: relOld, new: relNew });

        console.log(`Renamed: ${item} -> ${newName}`);
      }
    }
  }
}

console.log('=== Renaming images ===\n');
renameFilesInDir(baseDir);

console.log(`\n=== Done: ${renames.length} files renamed ===\n`);

// Save renames to JSON for code updates
fs.writeFileSync(
  path.join(__dirname, 'renames.json'),
  JSON.stringify(renames, null, 2)
);
console.log('Saved rename mapping to scripts/renames.json');
