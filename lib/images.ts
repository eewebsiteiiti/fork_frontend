/**
 * Image path utilities
 *
 * Images can be stored in the database (uploaded via admin) or derived from mappings.
 * Database paths take precedence over mappings.
 */

// Slugify a name for use in file paths
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Check if image path is valid (uploaded or exists)
function isValidImagePath(path: string | null | undefined): path is string {
  return Boolean(path && path.trim() !== '' && path !== 'null' && path !== 'undefined');
}

// Normalize a DB image path to always have a leading /
function normalizeImagePath(p: string): string {
  return p.startsWith('/') ? p : `/${p}`;
}

// Get student image path based on program and roll number
export function getStudentImagePath(program: string, rollNo: string, dbImage?: string | null): string {
  // If there's an image stored in database, use it
  if (isValidImagePath(dbImage)) {
    return normalizeImagePath(dbImage);
  }
  const programDir = program.toLowerCase();
  return `/images/people/students/${programDir}/${rollNo}.jpg`;
}

// Get faculty image path
// Since faculty images have inconsistent naming, we use a mapping
const facultyImageMap: Record<string, string> = {
  // Professors
  'Prof. Vivek Kanhangad': 'vivek.jpg',
  'Prof. Amod C. Umarikar': 'amod.jpg',
  'Prof. Ram Bilas Pachori': 'pachori.jpg',
  'Prof. Santosh Kumar Vishvakarma': 'santosh.jpg',
  'Prof. Shaibal Mukherjee': 'sm.jpg',
  'Prof. Vipul Singh': 'vipul.jpg',
  'Prof. Abhinav Kranti': 'kranti.jpg',
  'Prof. Trapti Jain': 'trapti.jpg',
  'Prof. Prabhat Kumar Upadhyay': 'prabhat-zdtomhj.jpg',
  'Prof. Vimal Bhatia': 'vimal.jpg',
  'Prof. Mukesh Kumar': 'mukesh-zzch8i7.jpg',
  'Prof. Srivathsan Vasudevan': 'dosa.jpg',
  // Associate Professors
  'Prof. Swaminathan R.': 'swami.jpg',
  'Prof. Saptarshi Ghosh': 'saptrishi.jpg',
  // Assistant Professors
  'Prof. Appina Balasubramanyam': 'apinna.jpg',
  'Prof. Ayush Tripathi': 'ayush-tripathi.jpg',
  'Prof. Dibbendu Roy': 'dibbendu-img.png',
  'Prof. Lokesh Kumar Dewangan': 'lokesh-dewangan.jpg',
  'Prof. Prathap Reddy B': 'prathap-reddy.jpg',
  'Prof. Rinkee Chopra': 'whatsapp-image-2023-10-23-at-20.52.12-b22a3f84.jpg',
  'Prof. Sharad Kumar Singh': 'sharad-singh.jpg',
  'Prof. Subhadeep Paladhi': 'pic.jpg',
  'Prof. Sumit Gautam': 'sumit.jpg',
  'Prof. Vijay A. S.': 'vijay.jpg',
};

export function getFacultyImagePath(name: string, dbImage?: string | null): string {
  // If there's an image stored in database, use it
  if (isValidImagePath(dbImage)) {
    return normalizeImagePath(dbImage);
  }
  // Try mapping
  const imageName = facultyImageMap[name];
  if (imageName) {
    return `/images/people/faculty/${imageName}`;
  }
  // Fallback to placeholder
  return '/images/logos/profile-placeholder.jpg';
}

// Get staff image path
// Images should be placed in /public/images/people/staff/
const staffImageMap: Record<string, string> = {
  'Mr. Ravindra Chouhan': 'ravindra.jpg',
  'Mr. Raghvendra Hanswal': 'raghvendra.jpg',
  'Mr. Raju Singh Dawer': 'raju.jpg',
  'Mr. Prateek Rode': 'prateek.jpg',
  'Mr. Ram Kumar': 'ram-kumar.jpg',
  'Ms. Sakshi Jain': 'sakshi.jpg',
  'Ms. Shrashti Sharma': 'shrashti.jpg',
};

export function getStaffImagePath(name: string, dbImage?: string | null): string {
  // If there's an image stored in database, use it
  if (isValidImagePath(dbImage)) {
    return normalizeImagePath(dbImage);
  }
  // Try mapping
  const imageName = staffImageMap[name];
  if (imageName) {
    return `/images/people/staff/${imageName}`;
  }
  return '/images/logos/profile-placeholder.jpg';
}

// Get page banner/header image path
export function getBannerImagePath(page: string): string {
  const bannerMap: Record<string, string> = {
    about: '/images/banners/about.jpg',
    research: '/images/banners/research.jpg',
    faculty: '/images/banners/faculty.jpg',
    staff: '/images/banners/staff.jpg',
    btech: '/images/banners/btech.png',
    mtech: '/images/banners/mtech.png',
    phd: '/images/banners/phd.png',
    ms: '/images/banners/ms.png',
    gallery: '/images/banners/gallery.jpg',
    books: '/images/banners/books.png',
  };
  return bannerMap[page] || '/images/banners/about.jpg';
}

// Get lab image path
export function getLabImagePath(type: 'ug' | 'pg' | 'research', labName: string): string {
  const slug = slugify(labName);
  return `/images/labs/${type}/${slug}.jpg`;
}

// Placeholder image
export const PLACEHOLDER_IMAGE = '/images/logos/profile-placeholder.jpg';

// Event placeholder
export const EVENT_PLACEHOLDER = '/images/logos/event-placeholder.jpg';

// Get event image path
// Uses database image if provided, otherwise falls back to event-{id}.jpg pattern
export function getEventImagePath(eventId: number, dbImage?: string | null): string {
  if (dbImage && dbImage.trim() !== '') {
    // Ensure path starts with /
    return dbImage.startsWith('/') ? dbImage : `/${dbImage}`;
  }
  return `/images/events/event-${eventId}.jpg`;
}
