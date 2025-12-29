import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Valid folders for image uploads
const VALID_FOLDERS: Record<string, string> = {
  faculty: 'images/people/faculty',
  staff: 'images/people/staff',
  btech: 'images/people/students/btech',
  mtech: 'images/people/students/mtech',
  phd: 'images/people/students/phd',
  ms: 'images/people/students/ms',
  alumni: 'images/people/students/alumni',
  labs: 'images/labs',
  events: 'images/events',
  books: 'images/books',
  uploads: 'uploads',
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = (formData.get('folder') as string) || 'uploads';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate folder
    const targetFolder = VALID_FOLDERS[folder] || VALID_FOLDERS['uploads'];

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // Create filename - use custom name if provided, otherwise sanitize original
    const customFilename = formData.get('filename') as string;
    let filename: string;
    if (customFilename) {
      // Use custom filename (sanitized)
      filename = customFilename.replace(/[^a-zA-Z0-9.-]/g, '_').toLowerCase();
    } else {
      // Use original name (sanitized)
      filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_').toLowerCase();
    }

    // Ensure target directory exists
    const uploadsDir = path.join(process.cwd(), 'public', targetFolder);
    await mkdir(uploadsDir, { recursive: true });

    // Write file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(uploadsDir, filename);
    await writeFile(filePath, buffer);

    // Return the public URL
    const url = `/${targetFolder}/${filename}`;

    return NextResponse.json({ url, filename, folder: targetFolder });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
