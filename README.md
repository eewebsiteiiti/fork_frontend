# EE Department Website - IIT Indore

Next.js website for the Electrical Engineering Department at IIT Indore.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: Material-UI (MUI) v7
- **Database**: SQLite (better-sqlite3)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Seed the database (first time only)
npm run seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run seed` | Seed/reset the database |
| `npm run lint` | Run ESLint |
| `npm run db:checkpoint` | Flush WAL changes to main database file |
| `npm run db:studio` | Open Drizzle Studio for database browsing |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── achievements/       # Books, awards, patents
│   ├── activities/         # EESA, reads, seminars, events
│   ├── admin/              # Admin dashboard
│   ├── api/                # API routes
│   ├── courses/            # Course listings
│   ├── gallery/            # Photo gallery
│   ├── labs/               # UG and Research labs
│   ├── people/             # Faculty, staff, students
│   └── research/           # Research areas, projects
├── components/             # Reusable React components
├── config/                 # Configuration files
│   ├── nav-data.ts         # Navigation menu structure
│   └── theme.ts            # MUI theme customization
├── data/seed/              # JSON seed data files
├── lib/                    # Utilities and database
│   ├── db.ts               # Database connection
│   ├── schema.ts           # Database schema
│   ├── seed.ts             # Seeding logic
│   └── images.ts           # Image path mappings
├── public/images/          # Static images
└── database.sqlite         # SQLite database file
```

## Database

### Schema

The database includes the following tables:

| Table | Description |
|-------|-------------|
| `faculty` | Faculty members |
| `staff` | Staff members |
| `btech`, `mtech`, `phd`, `ms` | Students by program |
| `alumni` | Alumni records |
| `courses`, `courses_new` | Course listings (courses_new has semester & specialization) |
| `electives` | Elective courses |
| `ug_labs`, `pg_labs` | Laboratory information |
| `research` | Research areas |
| `projects` | Research projects |
| `events` | Department events |
| `announcements` | Announcements |
| `news` | News items |
| `reads` | Student articles |
| `books` | Published books |
| `faculty_awards`, `student_awards` | Awards |
| `patents` | Patents |

### Seeding the Database

The database is seeded from JSON files in `data/seed/`. To reset and reseed:

```bash
# Delete existing database
rm database.sqlite database.sqlite-shm database.sqlite-wal

# Reseed
npm run seed
```

### Course Structure

Courses are stored in `courses_new` table with the following structure:

| Field | Description |
|-------|-------------|
| `code` | Course code (e.g., EE101) |
| `name` | Course name |
| `credit` | Credit hours |
| `ltp` | Lecture-Tutorial-Practical hours |
| `program` | BTech, MTech, or PhD |
| `semester` | Semester number (1-8 for BTech, 1-4 for MTech) |
| `specialization` | For MTech: CSP, VDN, or PSPE (null for BTech) |

**MTech Specializations:**
- **CSP** - Communications and Signal Processing (`/courses/mtech-csp`)
- **VDN** - VLSI Design and Nanoelectronics (`/courses/mtech-vdn`)
- **PSPE** - Power Systems and Power Electronics (`/courses/mtech-pspe`)

### Updating Data

#### Option 1: Edit JSON seed files

1. Edit the relevant file in `data/seed/`:
   - `people_faculty.json` - Faculty
   - `people_staff.json` - Staff
   - `people_btech.json`, `people_mtech.json`, etc. - Students
   - `course_course.json`, `course_coursenew.json` - Courses
   - `events_events.json` - Events
   - `announcements_announcements.json` - Announcements
   - `research_uglabs.json`, `research_pglabs.json` - Labs
   - `achievements_books.json`, `achievements_patent.json` - Achievements

2. Delete and reseed:
   ```bash
   rm database.sqlite*
   npm run seed
   ```

#### Option 2: Use Admin Panel

1. Navigate to `/admin/login`
2. Login with admin credentials (set in `.env.local`)
3. Use the admin interface to manage data

#### Option 3: Direct Database Edit

```bash
# Open SQLite CLI
sqlite3 database.sqlite

# Example queries
.tables                          # List all tables
SELECT * FROM faculty;           # View faculty
INSERT INTO faculty (name, title, email) VALUES ('Name', 'Professor', 'email@iiti.ac.in');
.quit                            # Exit
```

### Adding New Faculty/Staff Images

1. Add image to `public/images/faculty/` or `public/images/staff/`
2. Update `lib/images.ts` with the mapping:
   ```typescript
   const facultyImages: Record<string, string> = {
     'Dr. New Faculty': '/images/faculty/new-faculty.jpg',
     // ...
   };
   ```

## Environment Variables

Create a `.env.local` file:

```env
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret_key
```

## Navigation

Navigation structure is defined in `config/nav-data.ts`. To add/modify menu items:

```typescript
// config/nav-data.ts
export const navData: NavItem[] = [
  {
    label: 'Section Name',
    children: [
      { label: 'Page Name', href: '/path' },
      { label: 'External Link', href: 'https://...', external: true },
    ],
  },
];
```

## Adding New Pages

1. Create a new folder in `app/` with `page.tsx`
2. Use existing components from `components/`
3. Add navigation link in `config/nav-data.ts`

Example:
```typescript
// app/new-page/page.tsx
import PageLayout from '@/components/layout/PageLayout';

export default function NewPage() {
  return (
    <PageLayout title="Page Title" subtitle="Description">
      {/* Content */}
    </PageLayout>
  );
}
```

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy via Vercel CLI or GitHub integration
```

### Self-hosted

```bash
npm run build
npm run start
```

Note: Ensure `database.sqlite` is included in the deployment and the server has write access for SQLite.

### Committing Database Changes

SQLite uses WAL (Write-Ahead Logging) mode. Changes are written to `database.sqlite-wal` before being merged into the main file. To commit database changes to git:

```bash
# Flush WAL changes to main database file
npm run db:checkpoint

# Now git will see the changes
git add database.sqlite
git commit -m "Update database"
```

## Common Tasks

### Add a new student batch

1. Create JSON file: `data/seed/people_btech.json` (add entries)
2. Run `npm run seed`

### Update timetable links

Edit `config/nav-data.ts` and update the Timetable section URLs.

### Add new lab

1. Add entry to `data/seed/research_uglabs.json` or `research_pglabs.json`
2. Add lab image to `public/images/labs/`
3. Run `npm run seed`

### Modify theme/colors

Edit `config/theme.ts`:
```typescript
palette: {
  primary: { main: '#1a237e' },  // Deep blue
  secondary: { main: '#c5a47e' }, // Gold
}
```

## License

Internal use - IIT Indore Electrical Engineering Department
