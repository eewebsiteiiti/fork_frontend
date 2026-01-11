import { Box, Container, Grid, Typography } from '@mui/material';

export default function AboutUs() {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Container sx={{ py: 5 }}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid size={{ xs: 12, md: 7 }} sx={{ py: 5, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography
              variant="h4"
              sx={{
                borderBottom: '2px solid #BBBBBB',
                pb: 1,
                color: 'white',
                fontFamily: 'Caudex, serif',
              }}
            >
              EE @ IITI
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 3, lineHeight: 1.8 }}>
              One of the founding departments of the Institute from 2009,
              the Department of Electrical Engineering at IIT Indore has
              played a prominent role by setting the highest standards in
              teaching and research. Over the years, several new
              interdisciplinary courses and programs in the fields of
              Communications and Signal Processing (CSP) and VLSI Design
              and Nanotechnology (VDN), have been offered.
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 2, lineHeight: 1.8 }}>
              The department offers four academic programs, all in Electrical Engineering:
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 1, lineHeight: 1.8 }}>
              1) B. Tech. (EE)<br />
              2) M. S. (by Research)<br />
              3) M. Tech (CSP, VDN)<br />
              4) Ph. D.
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 2, lineHeight: 1.8 }}>
              The current annual intake of the Department is 80 in B. Tech., 30 in M. Tech
              and 15-20 Ph. D. students per year. A wide spectrum of courses is being offered
              at levels ranging from the undergraduate to the doctoral degree program. These
              include Special Semiconductor Devices, IC Fabrication Technology, Advanced
              Micro-processes and Nanotechnology, Optoelectronics, Microwave and Satellite
              Communication, Internet of Things (IoT) Networks, Design of Photovoltaic
              systems, Structural power systems, Design and Analysis of Communication Networks, etc.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: { xs: 'none', md: 'block' }, my: 4 }}
          >
            <Box
              component="img"
              src="/images/about.JPG"
              alt="About EE"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
