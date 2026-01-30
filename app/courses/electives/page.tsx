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
  semester: string;
}

function getElectives(): Elective[] {
  try {
    return db.prepare('SELECT * FROM ee_electives ORDER BY semester, code').all() as Elective[];
  } catch {
    return [];
  }
}

const semesterOrder = ['III', 'IV', 'V', 'VI', 'VIII'];

const semesterLabels: Record<string, string> = {
  'III': 'Semester III',
  'IV': 'Semester IV',
  'V': 'Semester V',
  'VI': 'Semester VI',
  'VIII': 'Semester VIII and PG',
};

export default function ElectivesPage() {
  const electives = getElectives();

  // Group electives by semester
  const electivesBySemester: Record<string, Elective[]> = {};
  electives.forEach((course) => {
    if (!electivesBySemester[course.semester]) {
      electivesBySemester[course.semester] = [];
    }
    electivesBySemester[course.semester].push(course);
  });

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

        {semesterOrder.map((sem) => {
          const semesterElectives = electivesBySemester[sem];
          if (!semesterElectives || semesterElectives.length === 0) return null;

          return (
            <Box key={sem} sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontFamily: 'Caudex, serif',
                  color: 'primary.main',
                  borderBottom: '2px solid',
                  borderColor: 'secondary.main',
                  pb: 1,
                  display: 'inline-block',
                }}
              >
                {semesterLabels[sem]}
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
                    {semesterElectives.map((course, index) => (
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
            </Box>
          );
        })}

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
