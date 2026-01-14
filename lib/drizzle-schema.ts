import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

// People tables
export const faculty = sqliteTable('faculty', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  title: text('title'),
  email: text('email'),
  details: text('details'),
  address: text('address'),
  link: text('link'),
  image: text('image'),
  subtitle: text('subtitle'),
  place: text('place'),
  phone: text('phone'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP'),
});

export const staff = sqliteTable('staff', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  title: text('title'),
  email: text('email'),
  phone: text('phone'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const btech = sqliteTable('btech', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  rollNo: text('roll_no'),
  year: integer('year'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const mtech = sqliteTable('mtech', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  rollNo: text('roll_no'),
  year: integer('year'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const phd = sqliteTable('phd', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  rollNo: text('roll_no'),
  year: integer('year'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const alumni = sqliteTable('alumni', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  rollNo: text('roll_no'),
  year: integer('year'),
  program: text('program'),
  date: text('date'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const ms = sqliteTable('ms', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  rollNo: text('roll_no'),
  year: integer('year'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

// Research tables
export const research = sqliteTable('research', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  specialization: text('specialization'),
  person: text('person'),
  description: text('description'),
  name: text('name'),
  link: text('link'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  worker: text('worker'),
  funding: text('funding'),
  duration: text('duration'),
  projectType: text('project_type'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const ugLabs = sqliteTable('ug_labs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  keywords: text('keywords'),
  image: text('image'),
  review: text('review'),
  equipments: text('equipments'),
  location: text('location'),
  area: text('area'),
  category: text('category'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const pgLabs = sqliteTable('pg_labs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  keywords: text('keywords'),
  image: text('image'),
  review: text('review'),
  equipments: text('equipments'),
  location: text('location'),
  area: text('area'),
  category: text('category'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

// Courses tables
export const courses = sqliteTable('courses', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  courseCode: text('course_code'),
  name: text('name').notNull(),
  credit: real('credit'),
  ltp: text('ltp'),
  program: text('program'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const coursesNew = sqliteTable('courses_new', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  code: text('code'),
  name: text('name').notNull(),
  credit: real('credit'),
  ltp: text('ltp'),
  program: text('program'),
  semester: integer('semester'),
  elective: integer('elective').default(0),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const electives = sqliteTable('electives', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  code: text('code'),
  name: text('name').notNull(),
  credit: real('credit'),
  ltp: text('ltp'),
  program: text('program'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

// Content tables
export const events = sqliteTable('events', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  date: integer('date'),
  month: text('month'),
  day: text('day'),
  time: text('time'),
  image: text('image'),
  link: text('link'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const announcements = sqliteTable('announcements', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  link: text('link'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const news = sqliteTable('news', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  date: text('date'),
  month: text('month'),
  day: text('day'),
  time: text('time'),
  link: text('link'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const reads = sqliteTable('reads', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content'),
  author: text('author'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

// Achievements tables
export const books = sqliteTable('books', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year'),
  name: text('name').notNull(),
  author: text('author'),
  publication: text('publication'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const facultyAwards = sqliteTable('faculty_awards', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year'),
  name: text('name').notNull(),
  award: text('award'),
  image: text('image'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const studentAwards = sqliteTable('student_awards', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year'),
  name: text('name').notNull(),
  award: text('award'),
  rollNo: text('roll_no'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const patents = sqliteTable('patents', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year'),
  name: text('name').notNull(),
  pi: text('pi'),
  uuid: text('uuid'),
  status: text('status'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});
