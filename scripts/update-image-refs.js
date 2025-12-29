const fs = require('fs');
const path = require('path');

const renames = require('./renames.json');
const appDir = path.join(__dirname, '..', 'app');
const componentsDir = path.join(__dirname, '..', 'components');
const libDir = path.join(__dirname, '..', 'lib');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  for (const { old: oldPath, new: newPath } of renames) {
    const oldRef = `/images/${oldPath}`;
    const newRef = `/images/${newPath}`;

    if (content.includes(oldRef)) {
      content = content.split(oldRef).join(newRef);
      modified = true;
      console.log(`  ${path.basename(filePath)}: ${oldRef} -> ${newRef}`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }

  return modified;
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  let count = 0;

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      count += processDir(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (updateFile(fullPath)) count++;
    }
  }

  return count;
}

console.log('=== Updating code references ===\n');
let total = 0;
total += processDir(appDir);
total += processDir(componentsDir);
total += processDir(libDir);
console.log(`\n=== Done: ${total} files updated ===`);
