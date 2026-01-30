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
  elective: number;
}

function getCourses(): Course[] {
  try {
    return db.prepare(`
      SELECT * FROM courses_new
      WHERE program = 'BTech' AND elective = 0
      ORDER BY semester, code
    `).all() as Course[];
  } catch {
    return [];
  }
}

function getElectives(): Course[] {
  try {
    return db.prepare(`
      SELECT * FROM courses_new
      WHERE program = 'BTech' AND elective = 1
      ORDER BY code
    `).all() as Course[];
  } catch {
    return [];
  }
}

export default async function NewBTechCoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ semester?: string }>;
}) {
  const { semester } = await searchParams;
  const selectedSemester = semester ? parseInt(semester) : null;

  const allCourses = getCourses();
  const electives = getElectives();

  // Get unique semesters
  const semesters = [...new Set(allCourses.map(c => c.semester))].sort((a, b) => a - b);

  // Filter courses by semester if selected
  const filteredCourses = selectedSemester
    ? allCourses.filter(c => c.semester === selectedSemester)
    : allCourses;

  // Group filtered courses by semester
  const coursesBySemester: Record<number, Course[]> = {};
  filteredCourses.forEach((course) => {
    if (!coursesBySemester[course.semester]) {
      coursesBySemester[course.semester] = [];
    }
    coursesBySemester[course.semester].push(course);
  });

  const displaySemesters = Object.keys(coursesBySemester).map(Number).sort((a, b) => a - b);

  return (
    <PageLayout
      title="B. Tech. Courses (New Curriculum)"
      subtitle="Updated undergraduate curriculum in Electrical Engineering"
      backgroundImage="/images/banners/btech.png"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* IIT Indore Curriculum Link */}
        <Box sx={{ mb: 4 }}>
          <Button
            variant="outlined"
            href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/DcoHfLLD5OSzzJFQkn26g1LSQZSoDTPalMm8gPYu.pdf"
            target="_blank"
            endIcon={<OpenInNew />}
          >
            IIT Indore EE Course Curriculum
          </Button>
        </Box>

        {/* Semester Filter */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Filter by Semester
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip
              label="All"
              component="a"
              href="/courses/btech/new"
              clickable
              color={!selectedSemester ? 'primary' : 'default'}
              variant={!selectedSemester ? 'filled' : 'outlined'}
            />
            {semesters.map((sem) => (
              <Chip
                key={sem}
                label={`Semester ${sem}`}
                component="a"
                href={`/courses/btech/new?semester=${sem}`}
                clickable
                color={selectedSemester === sem ? 'primary' : 'default'}
                variant={selectedSemester === sem ? 'filled' : 'outlined'}
              />
            ))}
          </Box>
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Showing {filteredCourses.length} courses
          {selectedSemester && ` for Semester ${selectedSemester}`}
        </Typography>

        {displaySemesters.map((sem) => (
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

        {/* Electives Section - only show when viewing all */}
        {!selectedSemester && electives.length > 0 && (
          <Box sx={{ mt: 6 }}>
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
              Elective Courses
            </Typography>

            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: 'secondary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Code</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Course Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>L-T-P</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Credits</TableCell>
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
                        <Chip label={course.code} size="small" color="secondary" variant="outlined" />
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
        )}

        {displaySemesters.length === 0 && (
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
