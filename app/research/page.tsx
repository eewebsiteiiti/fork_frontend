import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import {
  Wifi,
  GraphicEq,
  BoltOutlined,
  ElectricalServices,
  Memory,
  SettingsInputAntenna,
  Science,
  Psychology,
  Tune,
} from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';

// Research areas with faculty lists and icons
const researchAreas = [
  {
    title: 'Communications',
    icon: Wifi,
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
    icon: GraphicEq,
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
    icon: BoltOutlined,
    faculty: [
      'Prof. Amod C. Umarikar',
      'Prof. Vijay A. S.',
      'Prof. Lokesh Kumar Dewangan',
      'Prof. Prathap Reddy B',
    ],
  },
  {
    title: 'Power Systems',
    icon: ElectricalServices,
    faculty: [
      'Prof. Trapti Jain',
      'Prof. Subhadeep Paladhi',
      'Prof. Lokesh Kumar Dewangan',
    ],
  },
  {
    title: 'VLSI Design',
    icon: Memory,
    faculty: [
      'Prof. Santosh Kumar Vishvakarma',
      'Prof. Shaibal Mukherjee',
      'Prof. Mukesh Kumar',
    ],
  },
  {
    title: 'Radio Frequency and Microwave',
    icon: SettingsInputAntenna,
    faculty: [
      'Prof. Saptarshi Ghosh',
      'Prof. Rinkee Chopra',
    ],
  },
  {
    title: 'Nanoelectronic Devices',
    icon: Science,
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
    icon: Psychology,
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
    icon: Tune,
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
      subtitle="In line with the vision of the pursuit of excellence, the Department actively engages in cutting-edge research in the field of Electronics, Electrical and Communication Engineering. We strive to develop a vibrant research culture with strong industry-alumni-academia connects."
      backgroundImage="/images/banners/research.jpg"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Timeline layout */}
        <Box sx={{ position: 'relative' }}>
          {/* Center line with gradient */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 3,
              background: 'linear-gradient(180deg, #000249 0%, #B2103F 50%, #000249 100%)',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' },
              borderRadius: 2,
            }}
          />

          {researchAreas.map((area, index) => {
            const isLeft = index % 2 === 0;
            const Icon = area.icon;

            return (
              <Box
                key={area.title}
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: isLeft ? 'flex-start' : 'flex-end' },
                  mb: 5,
                  position: 'relative',
                }}
              >
                {/* Connector dot with icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 20,
                    width: 44,
                    height: 44,
                    bgcolor: 'white',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    border: '3px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  <Icon sx={{ color: 'secondary.main', fontSize: 22 }} />
                </Box>

                {/* Connector line */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 40,
                    [isLeft ? 'right' : 'left']: '50%',
                    [isLeft ? 'left' : 'right']: { md: isLeft ? 'auto' : 'auto' },
                    width: { md: 'calc(5% - 22px)' },
                    marginLeft: isLeft ? 0 : '22px',
                    marginRight: isLeft ? '22px' : 0,
                    height: 2,
                    bgcolor: 'primary.main',
                    display: { xs: 'none', md: 'block' },
                  }}
                />

                {/* Card */}
                <Paper
                  elevation={0}
                  sx={{
                    width: { xs: '100%', md: '43%' },
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    '&:hover': {
                      transform: { md: 'scale(1.02)' },
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #000249 0%, #1a1a6e 100%)',
                      color: 'white',
                      px: 3,
                      py: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      flexDirection: isLeft ? 'row' : 'row-reverse',
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: 'rgba(255,255,255,0.15)',
                        display: { xs: 'flex', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{
                        flex: 1,
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        textAlign: { xs: 'left', md: isLeft ? 'left' : 'right' },
                      }}
                    >
                      {area.title}
                    </Typography>
                  </Box>

                  {/* Faculty list */}
                  <Box sx={{ p: 2.5, bgcolor: 'grey.50' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        display: 'block',
                        mb: 1.5,
                        textAlign: { xs: 'left', md: isLeft ? 'left' : 'right' },
                      }}
                    >
                      Faculty Members
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: { xs: 'flex-start', md: isLeft ? 'flex-start' : 'flex-end' },
                      }}
                    >
                      {area.faculty.map((name) => (
                        <Chip
                          key={name}
                          label={name.replace('Prof. ', '')}
                          size="medium"
                          sx={{
                            bgcolor: 'white',
                            border: '1px solid',
                            borderColor: 'grey.300',
                            fontSize: '1rem',
                            '&:hover': {
                              bgcolor: 'primary.main',
                              color: 'white',
                              borderColor: 'primary.main',
                            },
                          }}
                        />
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
