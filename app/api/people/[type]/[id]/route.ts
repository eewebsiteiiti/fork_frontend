import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

const VALID_TYPES = ['faculty', 'staff', 'btech', 'mtech', 'phd', 'alumni', 'ms'];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; id: string }> }
) {
  try {
    const { type, id } = await params;

    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const data = db.prepare(`SELECT * FROM ${type} WHERE id = ?`).get(id);

    if (!data) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching person:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; id: string }> }
) {
  try {
    const { type, id } = await params;

    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const body = await request.json();

    // Remove fields that shouldn't be updated
    delete body.id;
    delete body.created_at;

    const tableInfo = db.prepare(`PRAGMA table_info(${type})`).all() as { name: string }[];
    const validColumns = new Set(tableInfo.map((col) => col.name));

    const filteredBody = Object.fromEntries(
      Object.entries(body).filter(([key]) => validColumns.has(key))
    );

    const updates = Object.keys(filteredBody)
      .map((key) => `${key} = ?`)
      .join(', ');
    const hasUpdatedAt = validColumns.has('updated_at');
    const values = [...Object.values(filteredBody), id];

    const stmt = db.prepare(
      `UPDATE ${type} SET ${updates}${hasUpdatedAt ? ', updated_at = CURRENT_TIMESTAMP' : ''} WHERE id = ?`
    );
    const result = stmt.run(...values);

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Updated successfully' });
  } catch (error) {
    console.error('Error updating person:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; id: string }> }
) {
  try {
    const { type, id } = await params;

    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const result = db.prepare(`DELETE FROM ${type} WHERE id = ?`).run(id);

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting person:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
