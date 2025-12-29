import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Project {
  id: number;
  title: string;
  duration: string;
  project_type: string;
  worker: string;
}

function getProjects(): Project[] {
  try {
    return db.prepare('SELECT * FROM projects ORDER BY id ASC').all() as Project[];
  } catch {
    return [];
  }
}

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageLayout
      title="Research Projects"
      subtitle="The faculty of the Department are constantly egaged in research and attract funding through several sponsored projects. Through several active collaborations between the Academia and Industry, we endeavour to constantly develop solutions, technology and products that have real-life societal impact."
      backgroundImage="/images/banners/gallery.jpg"
      backgroundPosition="center -300%"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'grey.50' }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Our department has been successful in securing significant research funding from various
            government agencies and industries. The following table lists our ongoing and completed
            research projects.
          </Typography>
        </Paper>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Total Projects: {projects.length}
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>#</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Project Title</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Duration</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Source</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>PI / Co-PI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow
                  key={project.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? 'white' : 'grey.50',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell sx={{ maxWidth: 400 }}>{project.title}</TableCell>
                  <TableCell>{project.duration}</TableCell>
                  <TableCell>{project.project_type}</TableCell>
                  <TableCell>{project.worker}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {projects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No projects found
            </Typography>
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}
