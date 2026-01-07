import { notFound } from 'next/navigation';
import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Card, CardContent, Grid } from '@mui/material';
import { EmojiEvents, MenuBook, School, Star } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Book {
  id: number;
  name: string;
  author: string;
  publication: string;
  year: number;
}

interface Award {
  id: number;
  name: string;
  roll_no?: string;
  year: number;
  award: string;
}

interface Patent {
  id: number;
  uuid: string;
  name: string;
  pi: string;
  year: number;
  status: string;
}

const typeConfig: Record<string, { title: string; subtitle: string; icon: React.ReactNode }> = {
  books: {
    title: 'Books Published',
    subtitle: 'Academic contributions by our faculty',
    icon: <MenuBook sx={{ fontSize: 40 }} />,
  },
  faculty: {
    title: 'Faculty Recognitions',
    subtitle: 'Awards and honors received by our faculty members',
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
  },
  students: {
    title: 'Student Achievements',
    subtitle: 'Outstanding accomplishments by our students',
    icon: <School sx={{ fontSize: 40 }} />,
  },
  patents: {
    title: 'Patents',
    subtitle: 'Intellectual property and innovations',
    icon: <Star sx={{ fontSize: 40 }} />,
  },
};

function getBooks(): Book[] {
  try {
    return db.prepare('SELECT * FROM books ORDER BY year DESC').all() as Book[];
  } catch {
    return [];
  }
}

function getFacultyAwards(): Award[] {
  try {
    return db.prepare('SELECT * FROM faculty_awards ORDER BY year DESC').all() as Award[];
  } catch {
    return [];
  }
}

function getStudentAwards(): Award[] {
  try {
    return db.prepare('SELECT * FROM student_awards ORDER BY year DESC').all() as Award[];
  } catch {
    return [];
  }
}

function getPatents(): Patent[] {
  try {
    return db.prepare('SELECT * FROM patents ORDER BY year DESC').all() as Patent[];
  } catch {
    return [];
  }
}

export default async function AchievementsPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const config = typeConfig[type];
  if (!config) {
    notFound();
  }

  return (
    <PageLayout
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage="/images/banners/books.png"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Navigation Tabs */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {Object.entries(typeConfig).map(([key, value]) => (
            <Chip
              key={key}
              label={value.title}
              component="a"
              href={`/achievements/${key}`}
              clickable
              color={type === key ? 'primary' : 'default'}
              variant={type === key ? 'filled' : 'outlined'}
              icon={value.icon as React.ReactElement}
            />
          ))}
        </Box>

        {type === 'books' && <BooksSection />}
        {type === 'faculty' && <FacultyAwardsSection />}
        {type === 'students' && <StudentAwardsSection />}
        {type === 'patents' && <PatentsSection />}
      </Container>
    </PageLayout>
  );
}

function BooksSection() {
  const books = getBooks();

  return (
    <>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Total Books Published: {books.length}
      </Typography>

      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid key={book.id} size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%', borderLeft: 4, borderColor: 'primary.main' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {book.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Author:</strong> {book.author}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Publisher:</strong> {book.publication}
                </Typography>
                <Chip label={book.year} size="small" color="primary" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {books.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">No books found</Typography>
        </Box>
      )}
    </>
  );
}

function FacultyAwardsSection() {
  const awards = getFacultyAwards();

  return (
    <>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Total Awards: {awards.length}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>#</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Award / Recognition</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {awards.map((award, index) => (
              <TableRow key={award.id} sx={{ bgcolor: index % 2 === 0 ? 'white' : 'grey.50' }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>{award.name}</TableCell>
                <TableCell>{award.award}</TableCell>
                <TableCell><Chip label={award.year} size="small" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {awards.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">No awards found</Typography>
        </Box>
      )}
    </>
  );
}

function StudentAwardsSection() {
  const awards = getStudentAwards();

  // Separate gold and silver medalists
  const goldMedalists = awards.filter(a => a.award?.toLowerCase().includes('gold'));
  const silverMedalists = awards.filter(a => a.award?.toLowerCase().includes('silver'));
  const otherAwards = awards.filter(a => !a.award?.toLowerCase().includes('gold') && !a.award?.toLowerCase().includes('silver'));

  return (
    <>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Total Awards: {awards.length}
      </Typography>

      {goldMedalists.length > 0 && (
        <>
          <Typography variant="h5" sx={{ mb: 2, color: '#FFD700', fontWeight: 600 }}>
            🏅 President&apos;s Gold Medalists
          </Typography>
          <TableContainer component={Paper} sx={{ mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#FFD700' }}>
                  <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Roll No</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {goldMedalists.map((award) => (
                  <TableRow key={award.id}>
                    <TableCell fontWeight={600}>{award.name}</TableCell>
                    <TableCell>{award.roll_no}</TableCell>
                    <TableCell>{award.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {silverMedalists.length > 0 && (
        <>
          <Typography variant="h5" sx={{ mb: 2, color: '#C0C0C0', fontWeight: 600 }}>
            🥈 Silver Medalists
          </Typography>
          <TableContainer component={Paper} sx={{ mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#E8E8E8' }}>
                  <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Roll No</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {silverMedalists.map((award) => (
                  <TableRow key={award.id}>
                    <TableCell fontWeight={600}>{award.name}</TableCell>
                    <TableCell>{award.roll_no}</TableCell>
                    <TableCell>{award.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {otherAwards.length > 0 && (
        <>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Other Achievements
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>Award</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {otherAwards.map((award, index) => (
                  <TableRow key={award.id} sx={{ bgcolor: index % 2 === 0 ? 'white' : 'grey.50' }}>
                    <TableCell>{award.name}</TableCell>
                    <TableCell>{award.award}</TableCell>
                    <TableCell>{award.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {awards.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">No awards found</Typography>
        </Box>
      )}
    </>
  );
}

function PatentsSection() {
  const patents = getPatents();
  console.log(patents);

  return (
    <>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Total Patents: {patents.length}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>#</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Application No.</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Patent Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Inventors</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Year</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patents.map((patent, index) => (
              <TableRow key={patent.id} sx={{ bgcolor: index % 2 === 0 ? 'white' : 'grey.50' }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{patent.uuid}</TableCell>
                <TableCell sx={{ maxWidth: 300 }}>{patent.name}</TableCell>
                <TableCell>{patent.pi}</TableCell>
                <TableCell>{patent.year}</TableCell>
                <TableCell>
                  <Chip
                    label={patent.status}
                    size="small"
                    color={patent.status?.toLowerCase().includes('granted') ? 'success' : 'warning'}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {patents.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">No patents found</Typography>
        </Box>
      )}
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(typeConfig).map((type) => ({ type }));
}
