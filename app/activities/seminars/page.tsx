import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

interface Seminar {
  id: number;
  title: string;
  time: string;
  speaker: string;
  details: string;
}

// Seminars would come from a database table when available
function getSeminars(): Seminar[] {
  return [];
}

export default function SeminarsPage() {
  const seminars = getSeminars();

  return (
    <PageLayout
      title="Upcoming Seminars / Talks"
      subtitle="Academic seminars and guest lectures"
      backgroundImage="/images/banners/research.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>
                  Seminar Title
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>
                  Time
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>
                  By
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {seminars.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} sx={{ textAlign: 'center', py: 6 }}>
                    <Typography variant="body1" color="text.secondary">
                      No upcoming seminars at the moment.
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                seminars.map((seminar) => (
                  <TableRow key={seminar.id} hover>
                    <TableCell>{seminar.title}</TableCell>
                    <TableCell>{seminar.time}</TableCell>
                    <TableCell>{seminar.speaker}</TableCell>
                    <TableCell>{seminar.details}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </PageLayout>
  );
}
