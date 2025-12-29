import { NextRequest, NextResponse } from 'next/server';
import db from './db';
import { initializeDatabase, checkTablesExist } from './schema';

// Ensure database is initialized
if (!checkTablesExist()) {
  initializeDatabase();
}

export function createCrudHandlers(tableName: string) {
  return {
    async getAll(request: NextRequest, filters?: Record<string, string>) {
      try {
        let query = `SELECT * FROM ${tableName}`;
        const params: (string | number)[] = [];
        const conditions: string[] = [];

        if (filters) {
          for (const [key, value] of Object.entries(filters)) {
            if (value) {
              conditions.push(`${key} = ?`);
              params.push(value);
            }
          }
        }

        if (conditions.length > 0) {
          query += ' WHERE ' + conditions.join(' AND ');
        }

        query += ' ORDER BY id DESC';

        const data = db.prepare(query).all(...params);
        return NextResponse.json(data);
      } catch (error) {
        console.error(`Error fetching ${tableName}:`, error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    },

    async getById(id: string) {
      try {
        const data = db.prepare(`SELECT * FROM ${tableName} WHERE id = ?`).get(id);
        if (!data) {
          return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }
        return NextResponse.json(data);
      } catch (error) {
        console.error(`Error fetching ${tableName}:`, error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    },

    async create(request: NextRequest) {
      try {
        const body = await request.json();
        delete body.id;
        delete body.created_at;
        delete body.updated_at;

        const columns = Object.keys(body).join(', ');
        const placeholders = Object.keys(body).map(() => '?').join(', ');
        const values = Object.values(body);

        const stmt = db.prepare(`INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`);
        const result = stmt.run(...values);

        return NextResponse.json({ id: result.lastInsertRowid, message: 'Created successfully' }, { status: 201 });
      } catch (error) {
        console.error(`Error creating ${tableName}:`, error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    },

    async update(id: string, request: NextRequest) {
      try {
        const body = await request.json();
        delete body.id;
        delete body.created_at;

        const updates = Object.keys(body).map((key) => `${key} = ?`).join(', ');
        const values = [...Object.values(body), id];

        const stmt = db.prepare(`UPDATE ${tableName} SET ${updates} WHERE id = ?`);
        const result = stmt.run(...values);

        if (result.changes === 0) {
          return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Updated successfully' });
      } catch (error) {
        console.error(`Error updating ${tableName}:`, error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    },

    async delete(id: string) {
      try {
        const result = db.prepare(`DELETE FROM ${tableName} WHERE id = ?`).run(id);

        if (result.changes === 0) {
          return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Deleted successfully' });
      } catch (error) {
        console.error(`Error deleting ${tableName}:`, error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    },
  };
}
