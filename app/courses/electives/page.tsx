import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Button } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Elective {
  id: number;
  code: string;
  name: string;
  credit: number;
  ltp: string;
}

function getElectives(): Elective[] {
  try {
    return db.prepare('SELECT * FROM ee_electives ORDER BY code').all() as Elective[];
  } catch {
    return [];
  }
}

export default function ElectivesPage() {
  const electives = getElectives();

  return (
    <PageLayout
      title="EE Departmental Electives"
      subtitle="Elective courses available for B. Tech. and M. Tech. programs in Electrical Engineering"
      backgroundImage="/images/banners/research.jpg"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Curriculum Links */}
        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/DcoHfLLD5OSzzJFQkn26g1LSQZSoDTPalMm8gPYu.pdf"
            target="_blank"
            endIcon={<OpenInNew />}
          >
            B. Tech. Curriculum
          </Button>
          <Button
            variant="outlined"
            href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/2NOJOa0uobweE5UdktqZLKEpzZj4wRhhMekKMgU8.pdf"
            target="_blank"
            endIcon={<OpenInNew />}
          >
            M. Tech. / Ph.D. Curriculum
          </Button>
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Showing {electives.length} departmental elective courses
        </Typography>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Code</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Course Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>L-T-P-C</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {electives.map((course, index) => (
                <TableRow
                  key={course.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? 'white' : 'grey.50',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <TableCell>
                    <Chip label={course.code} size="small" color="primary" variant="outlined" />
                  </TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.ltp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {electives.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No elective courses found
            </Typography>
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}
