import { Box, Grid, Typography } from '@mui/material';

export default function NoteFromHOD() {
  return (
    <Box
      sx={{
        backgroundColor: '#b2103f',
        py: 4,
        px: 2,
        ml: { xs: 0, md: '100px' },
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid sx={{ m: 5, textAlign: { xs: 'center', lg: 'left' } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              borderBottom: '1px solid #fff',
              pb: 1,
              color: 'white',
              fontFamily: 'Caudex, serif',
            }}
          >
            From the Head&apos;s Desk
          </Typography>
          <Typography variant="body1" color="white" sx={{ mt: 3, lineHeight: 1.8 }}>
            As the Head of the Electrical Department, I welcome you to our
            website, where you can find information about our academic
            programs, events and research activities. At IIT Indore, we are
            committed to providing our students with an exceptional
            education that prepares them for successful careers in
            Electrical Engineering. We offer undergraduate and graduate
            programs in Electrical Engineering that are designed to give our
            students a strong foundation in the fundamentals of the field,
            while also exposing them to the latest research and
            technologies. Our students have opportunities to work on
            research projects, participate in internships, and engage with
            industry through our industry partnerships. I invite you to
            explore our website to learn more about our department and our
            academic programs. If you have any questions or would like to
            learn more about what we have to offer, please do not hesitate
            to contact us. Thank you for your interest in the Electrical
            Engineering Department at IIT Indore.
          </Typography>
          <Typography variant="h6" color="white" fontWeight={600} sx={{ mt: 2 }}>
            ~ Vivek Kanchan
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
