import { Box, Container, Typography, Grid, Paper, IconButton, ImageList, ImageListItem } from '@mui/material';
import { YouTube, Instagram, Email, Facebook, LinkedIn } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';

const eesaImages = [
  '/images/eesa/eesa.jpg',
  '/images/eesa/eesa1.jpg',
  '/images/eesa/eesa2.jpg',
  '/images/eesa/eesa3.jpg',
  '/images/eesa/eesa4.jpg',
  '/images/eesa/eesa5.jpg',
  '/images/eesa/eesa6.jpg',
  '/images/eesa/eesa7.jpg',
  '/images/eesa/eesa8.jpg',
  '/images/eesa/eesa9.jpg',
  '/images/eesa/eesa10.jpg',
  '/images/eesa/eesa11.jpg',
  '/images/eesa/eesa12.jpg',
  '/images/eesa/eesa13.jpg',
  '/images/eesa/eesa14.jpg',
  '/images/eesa/eesa15.jpg',
  '/images/eesa/eesa16.jpg',
  '/images/eesa/eesa17.jpg',
  '/images/eesa/eesa18.jpeg',
  '/images/eesa/ncp08410.jpg',
  '/images/eesa/ncp08454.jpg',
  '/images/eesa/ncp08455.jpg',
  '/images/eesa/ncp08459.jpg',
  '/images/eesa/ncp08473.jpg',
  '/images/eesa/ncp08525.jpg',
  '/images/eesa/ncp08526.jpg',
  '/images/eesa/ncp08541.jpg',
  '/images/eesa/ncp08579.jpg',
  '/images/eesa/ncp08596.jpg',
];

export default function EESAPage() {
  return (
    <PageLayout
      title="EESA"
      subtitle="Electrical Engineering Students' Association"
      backgroundImage="/images/banners/eesa.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'grey.50' }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            The Electrical Engineering Students' Association (EESA) unites undergraduates, postgraduates, PhD candidates, and alumni from the department, promoting collaborative culture. Our mission is to facilitate student coordination, cultivate valuable connections, and enhance the academic and social experience within the department and institute. EESA fosters a vibrant community through both academic support and enjoyable informal activities, creating a lively social atmosphere for all members. EESA organizes and executes informative trips to help students better understand the fundamentals and applications of electrical engineering. EESA also serves as a vital link between students and professors, facilitating project assignments and ensuring effective communication and collaboration throughout the project's lifecycle. Apart from academics, EESA organizes enjoyable informal activities like department trips, and cultural programs to foster a lively social atmosphere and instill a sense of community and belonging in its members.
          </Typography>
        </Paper>

        {/* Social Links */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h5" fontWeight={600} gutterBottom textAlign="center">
            Connect With Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <IconButton
              component="a"
              href="https://www.youtube.com/@eloiiti"
              target="_blank"
              sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
            >
              <YouTube fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com/eesa_iiti"
              target="_blank"
              sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
            >
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/company/electrical-engineering-students-association/"
              target="_blank"
              sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:eesa@iiti.ac.in"
              sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
            >
              <Email fontSize="large" />
            </IconButton>
          </Box>
        </Paper>

        {/* Activities */}
        <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Caudex, serif', color: 'primary.main' }}>
          Our Activities
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { title: 'Technical Workshops', desc: 'Hands-on sessions on latest technologies and tools' },
            { title: 'Guest Lectures', desc: 'Industry experts and alumni sharing insights' },
            { title: 'Hackathons', desc: 'Competitive coding and project building events' },
            { title: 'Cultural Events', desc: 'Celebrating diversity through arts and performances' },
            { title: 'Industrial Visits', desc: 'Learning from real-world industry experiences' },
            { title: 'Sports Events', desc: 'Inter-departmental sports competitions' },
          ].map((activity) => (
            <Grid key={activity.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 3, height: '100%', borderTop: 3, borderColor: 'secondary.main' }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {activity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Photo Gallery */}
        <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Caudex, serif', color: 'primary.main' }}>
          Photo Gallery
        </Typography>
        <ImageList variant="masonry" cols={3} gap={16}>
          {eesaImages.map((image, index) => (
            <ImageListItem key={image}>
              <Box
                component="img"
                src={image}
                alt={`EESA event ${index + 1}`}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </PageLayout>
  );
}
