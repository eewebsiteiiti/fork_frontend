import { NextRequest } from 'next/server';
import { createCrudHandlers } from '@/lib/api-helpers';

const handlers = createCrudHandlers('events');

export async function GET(request: NextRequest) {
  return handlers.getAll(request);
}

export async function POST(request: NextRequest) {
  return handlers.create(request);
}
