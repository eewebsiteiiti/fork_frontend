import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Button } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Course {
  id: number;
  code: string;
  name: string;
  credit: number;
  ltp: string;
  semester: number;
}

function getCourses(): Course[] {
  try {
    return db.prepare('SELECT * FROM mtech_pspe_courses ORDER BY semester, code').all() as Course[];
  } catch {
    return [];
  }
}

export default function MTechPSPECoursesPage() {
  const courses = getCourses();

  // Group courses by semester
  const coursesBySemester: Record<number, Course[]> = {};
  courses.forEach((course) => {
    if (!coursesBySemester[course.semester]) {
      coursesBySemester[course.semester] = [];
    }
    coursesBySemester[course.semester].push(course);
  });

  const semesters = Object.keys(coursesBySemester).map(Number).sort((a, b) => a - b);

  return (
    <PageLayout
      title="M. Tech. Core Courses (PSPE)"
      subtitle="Core curriculum for M. Tech. in Power Systems and Power Electronics"
      backgroundImage="/images/banners/mtech.png"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* IIT Indore Curriculum Link */}
        <Box sx={{ mb: 4 }}>
          <Button
            variant="outlined"
            href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/2NOJOa0uobweE5UdktqZLKEpzZj4wRhhMekKMgU8.pdf"
            target="_blank"
            endIcon={<OpenInNew />}
          >
            IIT Indore PG Course Curriculum
          </Button>
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Showing {courses.length} core courses
        </Typography>

        {semesters.map((sem) => (
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
              Semester {sem}
            </Typography>

            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: 'primary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Code</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Course Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>L-T-P</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Credits</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {coursesBySemester[sem].map((course, index) => (
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
                      <TableCell>{course.credit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}

        {courses.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No courses found
            </Typography>
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}
