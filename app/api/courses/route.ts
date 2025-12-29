import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { initializeDatabase, checkTablesExist } from '@/lib/schema';

if (!checkTablesExist()) {
  initializeDatabase();
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const program = searchParams.get('program');
    const format = searchParams.get('format'); // 'old' or 'new'
    const semester = searchParams.get('semester');

    const tableName = format === 'new' ? 'courses_new' : 'courses';
    let query = `SELECT * FROM ${tableName}`;
    const params: (string | number)[] = [];
    const conditions: string[] = [];

    if (program) {
      conditions.push('program = ?');
      params.push(program);
    }

    if (semester && format === 'new') {
      conditions.push('semester = ?');
      params.push(parseInt(semester));
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY id';

    const data = db.prepare(query).all(...params);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const format = body.format || 'old';
    delete body.format;
    delete body.id;
    delete body.created_at;

    const tableName = format === 'new' ? 'courses_new' : 'courses';
    const columns = Object.keys(body).join(', ');
    const placeholders = Object.keys(body).map(() => '?').join(', ');
    const values = Object.values(body);

    const stmt = db.prepare(`INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`);
    const result = stmt.run(...values);

    return NextResponse.json({ id: result.lastInsertRowid, message: 'Created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
