import { notFound } from 'next/navigation';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
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

function getPeopleByYear(table: string, year: number): Person[] {
  try {
    return db.prepare(`SELECT * FROM ${table} WHERE year = ? ORDER BY roll_no ASC`).all(year) as Person[];
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

export default async function PeopleYearPage({
  params,
}: {
  params: Promise<{ type: string; year: string }>;
}) {
  const { type, year } = await params;
  const yearNum = parseInt(year);

  const config = typeConfig[type];
  if (!config || isNaN(yearNum)) {
    notFound();
  }

  const people = getPeopleByYear(config.table, yearNum);
  const years = getYears(config.table);

  // Add the requested year to the list if not present (for navbar links to years with no data yet)
  const allYears = years.includes(yearNum) ? years : [yearNum, ...years].sort((a, b) => b - a);

  return (
    <PageLayout
      title={config.title}
      subtitle={`Batch ${yearNum}`}
      backgroundImage={config.headerImage}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Year Navigation */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Select Batch Year
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {allYears.map((y) => (
              <Chip
                key={y}
                label={y}
                component="a"
                href={`/people/${type}/${y}`}
                clickable
                color={yearNum === y ? 'primary' : 'default'}
                variant={yearNum === y ? 'filled' : 'outlined'}
              />
            ))}
          </Box>
        </Box>

        {/* People Count */}
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Showing {people.length} {people.length === 1 ? 'student' : 'students'} from batch {yearNum}
        </Typography>

        {/* People Grid */}
        <Grid container spacing={3}>
          {people.map((person) => (
            <Grid key={person.id} size={{ xs: 12, sm: 6, md: type === 'alumni' ? 4 : 3 }}>
              <PersonCard
                name={person.name}
                roll_no={person.roll_no}
                year={person.year}
                program={type}
                image={person.image}
                type={type === 'alumni' ? 'alumni' : 'student'}
              />
            </Grid>
          ))}
        </Grid>

        {people.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No students found for batch {yearNum}
            </Typography>
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}

export function generateStaticParams() {
  const params: { type: string; year: string }[] = [];

  for (const type of Object.keys(typeConfig)) {
    try {
      const years = db.prepare(`SELECT DISTINCT year FROM ${typeConfig[type].table} WHERE year IS NOT NULL`).all() as { year: number }[];
      for (const { year } of years) {
        params.push({ type, year: year.toString() });
      }
    } catch {
      // Skip if table doesn't exist
    }
  }

  return params;
}
