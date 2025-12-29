import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { initializeDatabase, checkTablesExist } from '@/lib/schema';

const VALID_TYPES = ['faculty', 'staff', 'btech', 'mtech', 'phd', 'alumni', 'ms'];

// Ensure database is initialized
if (!checkTablesExist()) {
  initializeDatabase();
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;

    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year');

    let query = `SELECT * FROM ${type}`;
    const queryParams: (string | number)[] = [];

    if (year && ['btech', 'mtech', 'phd', 'alumni', 'ms'].includes(type)) {
      query += ' WHERE year = ?';
      queryParams.push(parseInt(year));
    }

    query += ' ORDER BY id DESC';

    const data = db.prepare(query).all(...queryParams);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching people:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;

    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const body = await request.json();

    // Remove id if present (auto-increment)
    delete body.id;
    delete body.created_at;
    delete body.updated_at;

    const columns = Object.keys(body).join(', ');
    const placeholders = Object.keys(body).map(() => '?').join(', ');
    const values = Object.values(body);

    const stmt = db.prepare(
      `INSERT INTO ${type} (${columns}) VALUES (${placeholders})`
    );
    const result = stmt.run(...values);

    return NextResponse.json(
      { id: result.lastInsertRowid, message: 'Created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating person:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
