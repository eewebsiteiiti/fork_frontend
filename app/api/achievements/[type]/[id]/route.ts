import { NextRequest, NextResponse } from 'next/server';
import { createCrudHandlers } from '@/lib/api-helpers';

const TYPE_TO_TABLE: Record<string, string> = {
  books: 'books',
  'faculty-awards': 'faculty_awards',
  'student-awards': 'student_awards',
  patents: 'patents',
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; id: string }> }
) {
  const { type, id } = await params;
  const tableName = TYPE_TO_TABLE[type];

  if (!tableName) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const handlers = createCrudHandlers(tableName);
  return handlers.getById(id);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; id: string }> }
) {
  const { type, id } = await params;
  const tableName = TYPE_TO_TABLE[type];

  if (!tableName) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const handlers = createCrudHandlers(tableName);
  return handlers.update(id, request);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; id: string }> }
) {
  const { type, id } = await params;
  const tableName = TYPE_TO_TABLE[type];

  if (!tableName) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const handlers = createCrudHandlers(tableName);
  return handlers.delete(id);
}
