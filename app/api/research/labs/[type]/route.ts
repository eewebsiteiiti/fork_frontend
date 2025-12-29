import { NextRequest, NextResponse } from 'next/server';
import { createCrudHandlers } from '@/lib/api-helpers';

const VALID_TYPES = ['ug', 'pg'];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;

  if (!VALID_TYPES.includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const tableName = type === 'ug' ? 'ug_labs' : 'pg_labs';
  const handlers = createCrudHandlers(tableName);
  return handlers.getAll(request);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;

  if (!VALID_TYPES.includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const tableName = type === 'ug' ? 'ug_labs' : 'pg_labs';
  const handlers = createCrudHandlers(tableName);
  return handlers.create(request);
}
