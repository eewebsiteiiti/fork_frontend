import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './lib/drizzle-schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: './database.sqlite',
  },
});
