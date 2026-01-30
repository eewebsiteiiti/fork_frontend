'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { FlashOn, Close } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';

const programs = [
  { name: 'B. Tech.', image: '/images/gallery/batches/btech22.jpg', bg: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)' },
  { name: 'M. Tech.', image: '/images/gallery/batches/mtech25.jpg', bg: 'linear-gradient(135deg, #b71c1c 0%, #c62828 100%)' },
  { name: 'M. S.', image: '/images/banners/about.jpg', bg: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)' },
  { name: 'Ph. D.', image: '/images/gallery/batches/phd23.jpg', bg: 'linear-gradient(135deg, #e65100 0%, #ef6c00 100%)' },
];

const focusAreas = [
  'Next-generation Communication Systems, Smart Antennas, and Human-Centered AI methods for Signal Processing',
  'Flexible Electronics, Semiconductor Nanofabrication, Electronics-Photonics convergence, Energy efficient systems',
  'Renewable Energy Integration and Smart Grids, Cyber-security aspects, System on Chip Biomedical Devices for diagnostics and therapy',
  'Novel Algorithms in Control and Optimisation, Drones and Robotics',
];

const researchAreas = [
  {
    title: 'Communications and Signal Processing (CSP)',
    description: 'Communication and signal processing group works in areas related to wireless communication technologies and various signal/image processing techniques.',
    image: '/images/about/research/signal.jpg',
  },
  {
    title: 'VLSI Design and Nano Electronics (VDN)',
    description: 'VLSI Design and Nano Electronics focuses on design and fabrication of various electronic devices having applications in memory, communication, sensors, IoT, and wearable electronics',
    image: '/images/about/research/vlsi.jpg',
  },
  {
    title: 'Power Electronics, Machines and Power Systems (PSPE)',
    description: 'Power Electronics, Machines and Power Systems group works on efficient and optimal generation, transmission, distribution, use of electrical energy and efficient electric drives.',
    image: '/images/about/research/power.png',
  },
  {
    title: 'RF and Microwave (RFM)',
    description: 'RF (Radio Frequency) and microwave engineering are a particular domain of electrical engineering that focus on the design and analysis of high-frequency electronic circuits and systems.',
    image: '/images/about/research/rf.jpg',
  },
  {
    title: 'Control Instrumentation And Optimization',
    description: 'Control optimization involves the meticulous management of system behavior and the strategic refinement of processes to attain optimal outcomes. By monitoring variables, making informed decisions, and applying adjustments, control optimization ensures efficiency and effectiveness.',
    image: '/images/about/research/control.png',
  },
];

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState({ name: '', image: '' });

  const handleClickOpen = (program: typeof programs[0]) => {
    setSelectedProgram({ name: program.name, image: program.image });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PageLayout
      title="ABOUT US"
      subtitle="From starting out as one of the founding departments of the Institute from 2009, the Department of Electrical Engineering at IIT Indore has grown in leaps and bounds. Apart from 24 faculty members and 8 support staff, the EE Department currently has around 330 UG students, 50 PG and about 120 Doctoral students actively enrolled. The department is ranked highly at the national level, with 1500+ publications having a combined citation count of 52250+ citations. In the short span of 15 years, since inception, the department has successfully executed 100+ research projects sponsored by various national and international agencies with a combined funding to the tune of INR 32 Crores. Furthermore, around 26 patents have been granted and several more have been filed. The department has proudly graduated a total of around 1050 students to date and hopes to continue its journey onward in the pursuit of excellence."
      backgroundImage="/images/banners/about.jpg"
    >
      {/* Programs Offered */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" fontWeight={700} sx={{ pb: 5, fontFamily: 'Caudex, serif' }}>
          PROGRAMS OFFERED
        </Typography>
        <Grid container justifyContent="space-around" alignItems="center" spacing={3} sx={{ pb: 6 }}>
          {programs.map((program) => (
            <Grid key={program.name}>
              <Box
                onClick={() => handleClickOpen(program)}
                sx={{
                  width: 150,
                  height: 150,
                  background: program.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  color="white"
                  textAlign="center"
                >
                  {program.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Focus Areas */}
      <Box sx={{ bgcolor: 'secondary.main', py: 5 }}>
        <Container>
          <Typography variant="h3" fontWeight={700} color="white" sx={{ pb: 3, fontFamily: 'Caudex, serif' }}>
            FOCUS AREAS
          </Typography>
          <List>
            {focusAreas.map((area, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <FlashOn sx={{ color: '#FFC107' }} />
                </ListItemIcon>
                <Typography variant="body1" color="white">
                  {area}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>

      {/* Research Areas */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" fontWeight={700} sx={{ pb: 5, fontFamily: 'Caudex, serif' }}>
          RESEARCH AREAS
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {researchAreas.map((area) => (
            <Grid key={area.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Box
                sx={{
                  textAlign: 'center',
                  border: '1px solid #ddd',
                  p: 2,
                  height: 280,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: 'primary.main',
                    height: 300,
                  },
                  '&:hover .research-icon': {
                    top: '-30px',
                  },
                  '&:hover .research-title': {
                    top: '-30px',
                  },
                  '&:hover .research-description': {
                    opacity: 1,
                    transform: 'scale(1)',
                  },
                }}
              >
                <Box
                  className="research-icon"
                  sx={{
                    position: 'relative',
                    top: '50px',
                    display: 'inline-block',
                    mb: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    component="img"
                    src={area.image}
                    alt={area.title}
                    sx={{ width: 100, height: 100, objectFit: 'contain' }}
                  />
                </Box>
                <Typography
                  className="research-title"
                  variant="h6"
                  fontWeight={600}
                  color="primary"
                  sx={{
                    position: 'relative',
                    top: '50px',
                    fontSize: '0.95rem',
                    transition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  }}
                >
                  {area.title}
                </Typography>
                <Typography
                  className="research-description"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    width: '100%',
                    mx: 'auto',
                    fontSize: '0.70rem',
                    opacity: 0,
                    transform: 'scale(0)',
                    transition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  }}
                >
                  {area.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Our Journey */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} sx={{ py: 3, fontFamily: 'Caudex, serif' }}>
            Our Journey...
          </Typography>
          <Box
            component="img"
            src="/images/about/journey.jpg"
            alt="Our Journey - Department History"
            sx={{
              width: { xs: '100%', md: '65%' },
              height: 'auto',
              mx: 'auto',
            }}
          />
        </Box>
      </Container>

      {/* Program Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0, position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
          <Box
            component="img"
            src={selectedProgram.image}
            alt={selectedProgram.name}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'cover',
            }}
          />
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              top: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              fontWeight: 600,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            {selectedProgram.name}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
            }}
          >
            <Close />
          </IconButton>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
}
