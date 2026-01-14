import { notFound } from 'next/navigation';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Patent {
  id: number;
  name: string;
  pi: string;
  uuid: string;
  status: string;
  year: string;
}

interface StatConfig {
  title: string;
  subtitle: string;
  images?: string[];
  showPatentTable?: boolean;
  showCitations?: boolean;
}

const statsConfig: Record<string, StatConfig> = {
  students: {
    title: 'Degrees Awarded',
    subtitle: 'EE IITI in figures and stats',
    images: ['/images/stats/degree.png'],
  },
  publications: {
    title: 'Publications',
    subtitle: 'EE IITI in figures and stats',
    images: ['/images/stats/journals2.png'],
  },
  projects: {
    title: 'Research Projects',
    subtitle: 'EE IITI in figures and stats',
    images: ['/images/stats/projects3.png'],
  },
  patents: {
    title: 'Patents',
    subtitle: 'EE IITI in figures and stats',
    images: ['/images/stats/patentss.png'],
    showPatentTable: true,
  },
  placements: {
    title: 'Placements',
    subtitle: 'EE IITI in figures and stats',
    images: [
      '/images/stats/ug-placements.jpg',
      '/images/stats/pg-placements.jpg',
      '/images/stats/placement-companies.png',
    ],
  },
  grants: {
    title: 'Project Grants',
    subtitle: 'EE IITI in figures and stats',
    images: ['/images/stats/project-grants.jpg'],
  },
  citations: {
    title: 'Google Scholar Citations',
    subtitle: 'EE IITI in figures and stats',
    showCitations: true,
  },
  funding: {
    title: 'Funding Agencies and Collaborators',
    subtitle: 'EE IITI in figures and stats',
    images: ['/images/stats/funding-agencies.jpg'],
  },
};

function getPatents(): Patent[] {
  try {
    return db.prepare('SELECT * FROM patents ORDER BY id DESC').all() as Patent[];
  } catch {
    return [];
  }
}

export default async function StatsPage({
  params,
}: {
  params: Promise<{ stat: string }>;
}) {
  const { stat } = await params;
  const config = statsConfig[stat];

  if (!config) {
    notFound();
  }

  const patents = config.showPatentTable ? getPatents() : [];

  return (
    <PageLayout
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage="/images/banners/research.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Images */}
        {config.images && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            {config.images.map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={config.title}
                sx={{
                  maxWidth: '100%',
                  width: { xs: '100%', md: '70%' },
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            ))}
          </Box>
        )}

        {/* Citations Counter */}
        {config.showCitations && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography
              variant="h1"
              color="secondary.main"
              sx={{ fontSize: { xs: '4rem', md: '7rem' }, fontWeight: 700 }}
            >
              60,000+
            </Typography>
            <Typography variant="h4" color="secondary.main" sx={{ mt: 2 }}>
              ... & Counting!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
              Google Scholar Citations
            </Typography>
          </Box>
        )}

        {/* Patent Table */}
        {config.showPatentTable && patents.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" fontWeight={600} textAlign="center" sx={{ mb: 4 }}>
              Patents
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: 'secondary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Application Number</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Patent Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Inventors</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Year</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patents.map((patent, idx) => (
                    <TableRow
                      key={patent.id}
                      sx={{
                        bgcolor: idx % 2 === 0 ? 'white' : 'grey.50',
                        '&:hover': { bgcolor: 'action.hover' },
                      }}
                    >
                      <TableCell>{patent.uuid}</TableCell>
                      <TableCell>{patent.name}</TableCell>
                      <TableCell>{patent.pi}</TableCell>
                      <TableCell>{patent.year}</TableCell>
                      <TableCell>{patent.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}

export function generateStaticParams() {
  return Object.keys(statsConfig).map((stat) => ({ stat }));
}
