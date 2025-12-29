import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { initializeDatabase, checkTablesExist } from '@/lib/schema';

if (!checkTablesExist()) {
  initializeDatabase();
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const specialization = searchParams.get('specialization');

    let query = 'SELECT * FROM research';
    const params: string[] = [];

    if (specialization) {
      query += ' WHERE specialization = ?';
      params.push(specialization);
    }

    query += ' ORDER BY id DESC';

    const data = db.prepare(query).all(...params);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching research:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    delete body.id;
    delete body.created_at;

    const columns = Object.keys(body).join(', ');
    const placeholders = Object.keys(body).map(() => '?').join(', ');
    const values = Object.values(body);

    const stmt = db.prepare(`INSERT INTO research (${columns}) VALUES (${placeholders})`);
    const result = stmt.run(...values);

    return NextResponse.json({ id: result.lastInsertRowid, message: 'Created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating research:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
