// People Types
export interface Faculty {
  id: number;
  name: string;
  title: string;
  email: string;
  details: string;
  address: string;
  link: string;
  image: string;
  subtitle: string;
  place: string;
  phone: string;
  created_at?: string;
  updated_at?: string;
}

export interface Staff {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  image: string;
  created_at?: string;
}

export interface Student {
  id: number;
  name: string;
  roll_no: string;
  year: number;
  image: string;
  created_at?: string;
}

export interface BTech extends Student {}
export interface MTech extends Student {}
export interface PhD extends Student {}
export interface MS extends Student {}

export interface Alumni extends Student {
  program: string;
  date: string;
}

// Research Types
export interface Research {
  id: number;
  specialization: string;
  person: string;
  description: string;
  name: string;
  link: string;
  created_at?: string;
}

export interface Project {
  id: number;
  title: string;
  worker: string;
  funding: string;
  duration: string;
  project_type: string;
  created_at?: string;
}

export interface Lab {
  id: number;
  name: string;
  description: string;
  keywords: string;
  image: string;
  review: string;
  equipments: string;
  location: string;
  area: string;
  category: string;
  created_at?: string;
}

export interface UGLab extends Lab {}
export interface PGLab extends Lab {}

// Course Types
export interface Course {
  id: number;
  course_code: string;
  name: string;
  credit: number;
  ltp: string;
  program: string;
  created_at?: string;
}

export interface CourseNew {
  id: number;
  code: string;
  name: string;
  credit: number;
  ltp: string;
  program: string;
  semester: number;
  elective: number;
  created_at?: string;
}

export interface Elective {
  id: number;
  code: string;
  name: string;
  credit: number;
  ltp: string;
  program: string;
  created_at?: string;
}

// Content Types
export interface Event {
  id: number;
  title: string;
  description: string;
  date: number;
  month: string;
  day: string;
  time: string;
  image: string;
  link: string;
  created_at?: string;
}

export interface Announcement {
  id: number;
  title: string;
  description: string;
  link: string;
  created_at?: string;
}

export interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  month: string;
  day: string;
  time: string;
  link: string;
  created_at?: string;
}

export interface Read {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at?: string;
}

// Achievement Types
export interface Book {
  id: number;
  year: number;
  name: string;
  author: string;
  publication: string;
  image: string;
  created_at?: string;
}

export interface FacultyAward {
  id: number;
  year: number;
  name: string;
  award: string;
  image: string;
  created_at?: string;
}

export interface StudentAward {
  id: number;
  year: number;
  name: string;
  award: string;
  roll_no: string;
  created_at?: string;
}

export interface Patent {
  id: number;
  year: number;
  name: string;
  pi: string;
  uuid: string;
  status: string;
  created_at?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// Table name mapping for dynamic queries
export type PeopleType = 'faculty' | 'staff' | 'btech' | 'mtech' | 'phd' | 'alumni' | 'ms';
export type AchievementType = 'books' | 'faculty_awards' | 'student_awards' | 'patents';
export type LabType = 'ug' | 'pg';
