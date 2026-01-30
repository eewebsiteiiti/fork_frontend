import { notFound } from 'next/navigation';
import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, Chip, Button } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Course {
  id: number;
  code?: string;
  course_code?: string;
  name: string;
  credit: number;
  ltp?: string;
  semester?: number;
  program?: string;
}

const programConfig: Record<string, { title: string; subtitle: string; headerImage: string; semesters: number; dbProgram?: string; specialization?: string }> = {
  btech: {
    title: 'B.Tech Courses',
    subtitle: 'Undergraduate curriculum in Electrical Engineering',
    headerImage: '/images/banners/btech.png',
    semesters: 8,
  },
  mtech: {
    title: 'M.Tech Courses',
    subtitle: 'Postgraduate curriculum in CSP, VDN and PSPE',
    headerImage: '/images/banners/mtech.png',
    semesters: 4,
  },
  'mtech-csp': {
    title: 'M.Tech Courses (CSP)',
    subtitle: 'Curriculum for Masters program in Communications and Signal Processing specialization',
    headerImage: '/images/banners/mtech.png',
    semesters: 4,
    dbProgram: 'MTech',
    specialization: 'CSP',
  },
  'mtech-vdn': {
    title: 'M.Tech Courses (VDN)',
    subtitle: 'Curriculum for Masters program in VLSI Design and Nanoelectronics specialization',
    headerImage: '/images/banners/mtech.png',
    semesters: 4,
    dbProgram: 'MTech',
    specialization: 'VDN',
  },
  'mtech-pspe': {
    title: 'M.Tech Courses (PSPE)',
    subtitle: 'Curriculum for Masters program in Power Systems and Power Electronics specialization',
    headerImage: '/images/banners/mtech.png',
    semesters: 4,
    dbProgram: 'MTech',
    specialization: 'PSPE',
  },
  phd: {
    title: 'Ph.D. Courses',
    subtitle: 'Doctoral program coursework',
    headerImage: '/images/banners/phd.png',
    semesters: 2,
  },
};

function getCourses(program: string, config: typeof programConfig[string]): Course[] {
  try {
    // Map URL program to database value
    const programMap: Record<string, string> = {
      btech: 'BTech',
      mtech: 'MTech',
      phd: 'PhD',
    };
    const dbProgram = config.dbProgram || programMap[program] || program;

    // Try courses_new table first (has semester info), then courses
    let courses: Course[];
    if (config.specialization) {
      courses = db.prepare(`SELECT * FROM courses_new WHERE program = ? AND specialization = ? ORDER BY semester, code`).all(dbProgram, config.specialization) as Course[];
    } else {
      courses = db.prepare(`SELECT * FROM courses_new WHERE program = ? ORDER BY semester, code`).all(dbProgram) as Course[];
    }
    if (courses.length === 0) {
      courses = db.prepare(`SELECT * FROM courses WHERE program = ? ORDER BY name`).all(dbProgram) as Course[];
    }
    return courses;
  } catch {
    return [];
  }
}

function getElectives(): Course[] {
  try {
    return db.prepare('SELECT * FROM electives ORDER BY code').all() as Course[];
  } catch {
    return [];
  }
}

export default async function CoursesPage({
  params,
  searchParams,
}: {
  params: Promise<{ program: string }>;
  searchParams: Promise<{ semester?: string }>;
}) {
  const { program } = await params;
  const { semester } = await searchParams;

  const config = programConfig[program];
  if (!config) {
    notFound();
  }

  const courses = getCourses(program, config);
  const electives = getElectives();
  const selectedSemester = semester ? parseInt(semester) : null;

  // Group courses by semester
  const coursesBySemester: Record<number, Course[]> = {};
  courses.forEach((course) => {
    const sem = course.semester || 0;
    if (!coursesBySemester[sem]) {
      coursesBySemester[sem] = [];
    }
    coursesBySemester[sem].push(course);
  });

  const filteredCourses = selectedSemester
    ? coursesBySemester[selectedSemester] || []
    : courses;

  return (
    <PageLayout
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage={config.headerImage}
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
              href={`/courses/${program}`}
              clickable
              color={!selectedSemester ? 'primary' : 'default'}
              variant={!selectedSemester ? 'filled' : 'outlined'}
            />
            {Array.from({ length: config.semesters }, (_, i) => i + 1).map((sem) => (
              <Chip
                key={sem}
                label={`Semester ${sem}`}
                component="a"
                href={`/courses/${program}?semester=${sem}`}
                clickable
                color={selectedSemester === sem ? 'primary' : 'default'}
                variant={selectedSemester === sem ? 'filled' : 'outlined'}
              />
            ))}
          </Box>
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Showing {filteredCourses.length} courses
          {selectedSemester && ` for Semester ${selectedSemester}`}
        </Typography>

        {/* Courses Display */}
        {selectedSemester ? (
          /* Single semester view - flat table */
          <TableContainer component={Paper} sx={{ mb: 6 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>Code</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>Course Name</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>Credits</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCourses.map((course, index) => (
                  <TableRow
                    key={course.id}
                    sx={{
                      bgcolor: index % 2 === 0 ? 'white' : 'grey.50',
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <TableCell>
                      <Chip label={course.code || course.course_code || '-'} size="small" color="primary" variant="outlined" />
                    </TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.credit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          /* All semesters view - grouped by semester */
          <Box sx={{ mb: 6 }}>
            {Object.keys(coursesBySemester)
              .map(Number)
              .sort((a, b) => a - b)
              .map((sem) => (
                <Box key={sem} sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontFamily: 'Caudex, serif', color: 'primary.main' }}>
                    Semester {sem}
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ bgcolor: 'primary.main' }}>
                          <TableCell sx={{ color: 'white', fontWeight: 600 }}>Code</TableCell>
                          <TableCell sx={{ color: 'white', fontWeight: 600 }}>Course Name</TableCell>
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
                              <Chip label={course.code || course.course_code || '-'} size="small" color="primary" variant="outlined" />
                            </TableCell>
                            <TableCell>{course.name}</TableCell>
                            <TableCell>{course.credit}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              ))}
          </Box>
        )}

        {filteredCourses.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4, mb: 4 }}>
            <Typography variant="body1" color="text.secondary">
              No courses found for this selection
            </Typography>
          </Box>
        )}

        {/* Electives Section */}
        {electives.length > 0 && (
          <>
            <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Caudex, serif', color: 'primary.main' }}>
              Elective Courses
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: 'secondary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Code</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Course Name</TableCell>
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
                        <Chip label={course.code || '-'} size="small" color="secondary" variant="outlined" />
                      </TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.credit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Container>
    </PageLayout>
  );
}

export function generateStaticParams() {
  return Object.keys(programConfig).map((program) => ({ program }));
}
