const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images');
const peopleDir = path.join(baseDir, 'people');

// Create directories
const dirs = [
  'people/faculty',
  'people/staff',
  'people/students/btech',
  'people/students/mtech',
  'people/students/phd',
  'people/students/ms',
  'people/alumni',
  'gallery/department',
  'gallery/events',
  'gallery/trips',
  'gallery/batches',
  'labs/ug',
  'labs/pg',
  'labs/research',
  'activities/eesa',
  'banners',
  'logos'
];

dirs.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Faculty image names (from seed data)
const facultyImages = [
  'vivek.JPG', 'vivek.png', 'Amod.JPG', 'pachori.JPG', 'santosh.jpg', 'SM.png',
  'vipul.JPG', 'kranti.JPG', 'DOSA.JPG', 'prabhat_ZDTOMHj.JPG', 'Trapti.JPG',
  'vimal.JPG', 'mukesh_ZZCh8I7.JPG', 'Saptrishi.JPG', 'Swami.JPG', 'Sumit.JPG',
  'Vijay.JPG', 'Apinna.JPG', 'pic.JPG', 'sharad.JPG', 'Srivathsan.JPG',
  'lokesh.JPG', 'prathap.JPG', 'paladhi.JPG', 'chopra.JPG', 'Dibbendu_Img.png',
  'WhatsApp_Image_2023-10-23_at_20.52.12_b22a3f84.jpg'
];

// Staff image names
const staffImages = [
  'arjun.jpg', 'Arvind.jpg', 'DMS.jpg', 'rakesh.jpg', 'shailesh.png',
  'deepak_sharma.jpg', 'sanjay.jpg'
];

// Move student images based on roll number patterns
function moveStudentImages() {
  const files = fs.readdirSync(peopleDir);
  let moved = { btech: 0, mtech: 0, phd: 0, ms: 0 };

  files.forEach(file => {
    const filePath = path.join(peopleDir, file);
    if (!fs.statSync(filePath).isFile()) return;

    const basename = path.basename(file, path.extname(file));

    // Check if it's a roll number (9-10 digits)
    if (/^\d{9,10}$/.test(basename)) {
      let dest = null;

      // BTech: 9 digits, contains 0002 (e.g., 220002001)
      if (/^\d{2}0002\d{3}$/.test(basename)) {
        dest = path.join(baseDir, 'people/students/btech', file);
        moved.btech++;
      }
      // MTech: 10 digits, contains 02102 (e.g., 2202102002)
      else if (/^\d{2}02102\d{3}$/.test(basename)) {
        dest = path.join(baseDir, 'people/students/mtech', file);
        moved.mtech++;
      }
      // PhD: 10 digits, contains 01102 or 01202 (e.g., 1901102003, 1901202004)
      else if (/^\d{2}01[12]02\d{3}$/.test(basename)) {
        dest = path.join(baseDir, 'people/students/phd', file);
        moved.phd++;
      }
      // MS: 10 digits, contains 01802 (e.g., 1801202003)
      else if (/^\d{2}01802\d{3}$/.test(basename)) {
        dest = path.join(baseDir, 'people/students/ms', file);
        moved.ms++;
      }

      if (dest && fs.existsSync(filePath)) {
        fs.renameSync(filePath, dest);
      }
    }
  });

  console.log('Student images moved:', moved);
}

// Move faculty images
function moveFacultyImages() {
  let moved = 0;
  facultyImages.forEach(img => {
    const src = path.join(peopleDir, img);
    const dest = path.join(baseDir, 'people/faculty', img);
    if (fs.existsSync(src)) {
      fs.renameSync(src, dest);
      moved++;
    }
  });
  console.log('Faculty images moved:', moved);
}

// Move staff images
function moveStaffImages() {
  let moved = 0;
  staffImages.forEach(img => {
    const src = path.join(peopleDir, img);
    const dest = path.join(baseDir, 'people/staff', img);
    if (fs.existsSync(src)) {
      fs.renameSync(src, dest);
      moved++;
    }
  });
  console.log('Staff images moved:', moved);
}

// Move banner images
function moveBannerImages() {
  const banners = ['about.JPG', 'research.JPG', 'faculty.JPG', 'btech.png', 'mtech.png',
                   'phd.png', 'ms.png', 'gallery.jpg', 'books.png', 'staff.JPG'];
  let moved = 0;
  banners.forEach(img => {
    const src = path.join(baseDir, img);
    const dest = path.join(baseDir, 'banners', img);
    if (fs.existsSync(src)) {
      fs.renameSync(src, dest);
      moved++;
    }
  });
  console.log('Banner images moved:', moved);
}

// Move logo images
function moveLogoImages() {
  const logos = ['iiti-logo.png', 'ee-logo.png', 'eesa_logo.png', 'profile_placeholder.jpg',
                 'IITILogo.png', 'logo.png'];
  let moved = 0;
  logos.forEach(img => {
    const src = path.join(baseDir, img);
    const dest = path.join(baseDir, 'logos', img);
    if (fs.existsSync(src)) {
      fs.renameSync(src, dest);
      moved++;
    }
  });
  console.log('Logo images moved:', moved);
}

// Reorganize gallery
function reorganizeGallery() {
  const galleryDir = path.join(baseDir, 'gallery');
  if (!fs.existsSync(galleryDir)) return;

  const files = fs.readdirSync(galleryDir);
  let moved = { department: 0, batches: 0, events: 0, trips: 0 };

  files.forEach(file => {
    const filePath = path.join(galleryDir, file);
    if (!fs.statSync(filePath).isFile()) return;

    let dest = null;

    // Department photos
    if (/^(FC|DUGC|vdn|ps|staffCombo|csp|makerspace|9K6A|IMG_)/.test(file)) {
      dest = path.join(galleryDir, 'department', file);
      moved.department++;
    }
    // Batch photos
    else if (/^(btech|mtech|phd)/.test(file)) {
      dest = path.join(galleryDir, 'batches', file);
      moved.batches++;
    }
    // Trip photos
    else if (/^TRIP/.test(file)) {
      dest = path.join(galleryDir, 'trips', file);
      moved.trips++;
    }
    // Event photos
    else if (/^(NCP|Tesla)/.test(file)) {
      dest = path.join(galleryDir, 'events', file);
      moved.events++;
    }

    if (dest && fs.existsSync(filePath)) {
      fs.renameSync(filePath, dest);
    }
  });

  console.log('Gallery images moved:', moved);
}

// Run migrations
console.log('=== Starting Image Migration ===\n');
moveStudentImages();
moveFacultyImages();
moveStaffImages();
moveBannerImages();
moveLogoImages();
reorganizeGallery();
console.log('\n=== Migration Complete ===');
