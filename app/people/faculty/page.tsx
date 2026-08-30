import { Box, Container, Typography, Paper } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';
import FacultyCard from '@/components/people/FacultyCard';
import db from '@/lib/db';

interface Faculty {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  details: string;
  address: string;
  link: string;
  subtitle: string;
  subtitle_link: string;
  place: string;
}

function getFaculty(): Faculty[] {
  try {
    // Order: HOD first, then Professors, Associate Professors, Assistant Professors (each in ascending order by id)
    return db.prepare(`
      SELECT * FROM faculty
      ORDER BY
        CASE
          WHEN subtitle LIKE '%Head of the Department%' THEN 0
          WHEN title = 'Professor' THEN 1
          WHEN title = 'Associate Professor' THEN 2
          ELSE 3
        END,
        id ASC
    `).all() as Faculty[];
  } catch {
    return [];
  }
}

export default function FacultyPage() {
  const faculty = getFaculty();

  return (
    <PageLayout
      title="Faculty"
      subtitle="The Department currently has 25 faculty members whose expertise falls under five main areas: Communications and Signal Processing (CSP), VLSI and Nanoelectronic devices (VDN), Power Electronics, Electrical Machines, Power Systems and Controls (PSPE) & RF and Microwave. The faculty members are actively engaged in cutting-edge research and attract funding through several sponsored projects. Through several active collaborations between the Academia and Industry, we endeavour to constantly develop solutions, technology and products that have real-life societal impact."
      backgroundImage="/images/banners/faculty.jpg"
      backgroundPosition="center -300%"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {faculty.length > 0 ? (
          <Paper elevation={1}>
            {faculty.map((f) => (
              <FacultyCard key={f.id} faculty={f} />
            ))}
          </Paper>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No faculty records found
            </Typography>
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}
