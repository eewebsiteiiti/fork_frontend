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
    const page = parseInt(searchParams.get('page') || '0');
    const limit = parseInt(searchParams.get('limit') || '0');
    const search = searchParams.get('search') || '';

    let whereClause = '';
    const queryParams: (string | number)[] = [];

    // Build WHERE clause
    const conditions: string[] = [];

    if (year && ['btech', 'mtech', 'phd', 'alumni', 'ms'].includes(type)) {
      conditions.push('year = ?');
      queryParams.push(parseInt(year));
    }

    if (search) {
      conditions.push('name LIKE ?');
      queryParams.push(`%${search}%`);
    }

    if (conditions.length > 0) {
      whereClause = ' WHERE ' + conditions.join(' AND ');
    }

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM ${type}${whereClause}`;
    const countResult = db.prepare(countQuery).get(...queryParams) as { total: number };
    const total = countResult.total;

    // Get paginated data
    let dataQuery = `SELECT * FROM ${type}${whereClause} ORDER BY id DESC`;

    if (limit > 0) {
      dataQuery += ` LIMIT ? OFFSET ?`;
      queryParams.push(limit, page * limit);
    }

    const data = db.prepare(dataQuery).all(...queryParams);

    // If pagination is requested, return with metadata
    if (limit > 0) {
      return NextResponse.json({
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      });
    }

    // Otherwise return just the data (for backward compatibility)
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
