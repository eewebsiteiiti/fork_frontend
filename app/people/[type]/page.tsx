import { notFound } from 'next/navigation';
import { Box, Container, Typography, Grid, Tabs, Tab, Chip } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';
import PersonCard from '@/components/people/PersonCard';
import db from '@/lib/db';

interface Person {
  id: number;
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  image?: string;
  details?: string;
  address?: string;
  link?: string;
  place?: string;
  subtitle?: string;
  roll_no?: string;
  year?: number;
}

const typeConfig: Record<string, { title: string; subtitle: string; table: string; headerImage: string }> = {
  staff: {
    title: 'Staff',
    subtitle: 'The Department currently has 7 Support Staff Members.',
    table: 'staff',
    headerImage: '/images/banners/staff.jpg',
  },
  btech: {
    title: 'B. Tech. Students',
    subtitle: 'Undergraduate students in Electrical Engineering',
    table: 'btech',
    headerImage: '/images/banners/btech.png',
  },
  mtech: {
    title: 'M. Tech. Students',
    subtitle: 'Postgraduate students in CSP and VDN',
    table: 'mtech',
    headerImage: '/images/banners/mtech.png',
  },
  phd: {
    title: 'Ph.D. Scholars',
    subtitle: 'Doctoral researchers in Electrical Engineering',
    table: 'phd',
    headerImage: '/images/banners/phd.png',
  },
  ms: {
    title: 'M.S. (Research) Students',
    subtitle: 'Research-focused master\'s students',
    table: 'ms',
    headerImage: '/images/banners/ms.png',
  },
  alumni: {
    title: 'Alumni',
    subtitle: 'Our proud graduates making a difference',
    table: 'alumni',
    headerImage: '/images/gallery/batches/btech22.jpg',
  },
};

function getPeople(table: string): Person[] {
  try {
    if (table === 'staff') {
      // Order: Senior Lab Assistants, Junior Lab Assistants, Attendants, Junior Assistants
      return db.prepare(`
        SELECT * FROM staff
        ORDER BY
          CASE
            WHEN title LIKE '%Junior Assistant%' THEN 1
            WHEN title LIKE '%Senior Lab Assistant%' THEN 2
            WHEN title LIKE '%Junior Lab Assistant%' THEN 3
            WHEN title LIKE '%Attendant%' THEN 4
            ELSE 5
          END,
          id ASC
      `).all() as Person[];
    }
    return db.prepare(`SELECT * FROM ${table} ORDER BY name ASC`).all() as Person[];
  } catch {
    return [];
  }
}

function getYears(table: string): number[] {
  try {
    const result = db.prepare(`SELECT DISTINCT year FROM ${table} WHERE year IS NOT NULL ORDER BY year DESC`).all() as { year: number }[];
    return result.map(r => r.year);
  } catch {
    return [];
  }
}

export default async function PeoplePage({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ year?: string }>;
}) {
  const { type } = await params;
  const { year } = await searchParams;

  const config = typeConfig[type];
  if (!config) {
    notFound();
  }

  const isFacultyOrStaff = type === 'faculty' || type === 'staff';
  const people = getPeople(config.table);
  const years = !isFacultyOrStaff ? getYears(config.table) : [];

  // Filter by year if specified and applicable
  const selectedYear = year ? parseInt(year) : (years.length > 0 ? years[0] : null);
  const filteredPeople = !isFacultyOrStaff && selectedYear
    ? people.filter(p => p.year === selectedYear)
    : people;

  return (
    <PageLayout
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage={config.headerImage}
      backgroundPosition='center -350%'
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Year Filter for students */}
        {!isFacultyOrStaff && years.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select Batch Year
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {years.map((y) => (
                <Chip
                  key={y}
                  label={y}
                  component="a"
                  href={`/people/${type}/${y}`}
                  clickable
                  color={selectedYear === y ? 'primary' : 'default'}
                  variant={selectedYear === y ? 'filled' : 'outlined'}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* People Count */}
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Showing {filteredPeople.length} {filteredPeople.length === 1 ? 'person' : 'people'}
          {selectedYear && !isFacultyOrStaff && ` from batch ${selectedYear}`}
        </Typography>

        {/* People Grid */}
        <Grid container spacing={3}>
          {filteredPeople.map((person) => (
            <Grid key={person.id} size={{ xs: 12, sm: 6, md: isFacultyOrStaff ? 4 : (type === 'alumni' ? 4 : 3) }}>
              <PersonCard
                name={person.name}
                title={person.title}
                email={person.email}
                phone={person.phone}
                details={person.details}
                address={person.address}
                link={person.link}
                place={person.place}
                subtitle={person.subtitle}
                roll_no={person.roll_no}
                year={person.year}
                program={type}
                type={isFacultyOrStaff ? (type as 'faculty' | 'staff') : (type === 'alumni' ? 'alumni' : 'student')}
              />
            </Grid>
          ))}
        </Grid>

        {filteredPeople.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No records found
            </Typography>
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}

export function generateStaticParams() {
  return Object.keys(typeConfig).map((type) => ({ type }));
}
