import { Box, Container, Typography, Paper } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

// Research areas with faculty lists
const researchAreas = [
  {
    title: 'Communications',
    faculty: [
      'Prof. Ram Bilas Pachori',
      'Prof. Prabhat Kumar Upadhyay',
      'Prof. Vimal Bhatia',
      'Prof. Sumit Gautam',
      'Prof. Swaminathan R.',
      'Prof. Appina Balasubramanyam',
      'Prof. Dibbendu Roy',
    ],
  },
  {
    title: 'Signal and Image Processing',
    faculty: [
      'Prof. Ram Bilas Pachori',
      'Prof. Prabhat Kumar Upadhyay',
      'Prof. Vimal Bhatia',
      'Prof. Vivek Kanhangad',
      'Prof. Appina Balasubramanyam',
      'Prof. Ayush Tripathi',
    ],
  },
  {
    title: 'Power Electronics and Electric Machines',
    faculty: [
      'Prof. Amod C. Umarikar',
      'Prof. Vijay A. S.',
      'Prof. Lokesh Kumar Dewangan',
      'Prof. Prathap Reddy B',
    ],
  },
  {
    title: 'Power Systems',
    faculty: [
      'Prof. Trapti Jain',
      'Prof. Subhadeep Paladhi',
      'Prof. Lokesh Kumar Dewangan',
    ],
  },
  {
    title: 'VLSI Design',
    faculty: [
      'Prof. Santosh Kumar Vishvakarma',
      'Prof. Shaibal Mukherjee',
      'Prof. Mukesh Kumar',
    ],
  },
  {
    title: 'Radio Frequency and Microwave',
    faculty: [
      'Prof. Saptarshi Ghosh',
      'Prof. Rinkee Chopra',
    ],
  },
  {
    title: 'Nanoelectronic Devices',
    faculty: [
      'Prof. Srivathsan Vasudevan',
      'Prof. Mukesh Kumar',
      'Prof. Shaibal Mukherjee',
      'Prof. Vipul Singh',
      'Prof. Abhinav Kranti',
    ],
  },
  {
    title: 'Machine Learning and Deep Learning',
    faculty: [
      'Prof. Ram Bilas Pachori',
      'Prof. Vivek Kanhangad',
      'Prof. Vimal Bhatia',
      'Prof. Dibbendu Roy',
      'Prof. Ayush Tripathi',
    ],
  },
  {
    title: 'Control Instrumentation and Optimization',
    faculty: [
      'Prof. Sharad Kumar Singh',
      'Prof. Srivathsan Vasudevan',
    ],
  },
];

export default function ResearchPage() {
  return (
    <PageLayout
      title="Research"
      subtitle="In line with the vision of the pursuit of excellence, the Department actively engages in cutting-edge research in the field of Electronics, Electrical and Communcation Engineering. We strive to develop a vibrant research culture with strong industry-alumni-academia connects."
      backgroundImage="/images/banners/research.jpg"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Central timeline layout */}
        <Box sx={{ position: 'relative' }}>
          {/* Center line */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 4,
              bgcolor: 'primary.main',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' },
              borderRadius: 2,
            }}
          />

          {researchAreas.map((area, index) => {
            const isLeft = index % 2 === 0;

            return (
              <Box
                key={area.title}
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: isLeft ? 'flex-start' : 'flex-end' },
                  mb: 4,
                  position: 'relative',
                }}
              >
                {/* Connector dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 24,
                    width: 16,
                    height: 16,
                    bgcolor: 'secondary.main',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    display: { xs: 'none', md: 'block' },
                    zIndex: 1,
                    border: '3px solid',
                    borderColor: 'primary.main',
                  }}
                />

                {/* Connector line */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 30,
                    [isLeft ? 'right' : 'left']: '50%',
                    width: { md: '5%' },
                    height: 2,
                    bgcolor: 'primary.main',
                    display: { xs: 'none', md: 'block' },
                  }}
                />

                {/* Card */}
                <Paper
                  elevation={2}
                  sx={{
                    width: { xs: '100%', md: '42%' },
                    p: 0,
                    overflow: 'hidden',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 3,
                      py: 1.5,
                      clipPath: isLeft
                        ? 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
                        : 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        textAlign: isLeft ? 'left' : 'right',
                      }}
                    >
                      {area.title}
                    </Typography>
                  </Box>

                  {/* Faculty list */}
                  <Box sx={{ p: 2.5 }}>
                    <Box
                      component="ul"
                      sx={{
                        m: 0,
                        pl: isLeft ? 2.5 : 0,
                        pr: isLeft ? 0 : 2.5,
                        listStyle: 'none',
                        textAlign: { xs: 'left', md: isLeft ? 'left' : 'right' },
                      }}
                    >
                      {area.faculty.map((name) => (
                        <Typography
                          component="li"
                          key={name}
                          variant="body2"
                          sx={{
                            py: 0.5,
                            color: 'text.secondary',
                            position: 'relative',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              [isLeft ? 'left' : 'right']: -16,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: 6,
                              height: 6,
                              bgcolor: 'secondary.main',
                              borderRadius: '50%',
                            },
                          }}
                        >
                          {name}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Container>
    </PageLayout>
  );
}
