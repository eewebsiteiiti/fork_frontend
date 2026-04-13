import { Grid, Typography, Box } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

const domains = [
  {
    title: 'Communications, Networks & Signal/Image Processing',
    faculty: [
      'Prof. Ram Bilas Pachori',
      'Prof. Prabhat Kumar Upadhyay',
      'Prof. Vimal Bhatia',
      'Prof. Sumit Gautam',
      'Prof. Swaminathan R.',
      'Prof. Appina Balasubramanyam',
      'Prof. Dibbendu Roy',
      'Prof. Vivek Kanhangad',
      'Prof. Ayush Tripathi',
    ],
  },
  {
    title: 'VLSI Design, Nanoelectronics & Photonics',
    faculty: [
      'Prof. Srivathsan Vasudevan',
      'Prof. Shaibal Mukherjee',
      'Prof. Mukesh Kumar',
      'Prof. Vipul Singh',
      'Prof. Santosh Kumar Vishvakarma',
      'Prof. Abhinav Kranti',
    ],
  },
  {
    title: 'Power Systems, Power Electronics & Machine Drives',
    faculty: [
      'Prof. Amod C. Umarikar',
      'Prof. Vijay A. S.',
      'Prof. Lokesh Kumar Dewangan',
      'Prof. Prathap Reddy B',
      'Prof. Trapti Jain',
      'Prof. Subhadeep Paladhi',
    ],
  },
  {
    title: 'RF & Microwave',
    faculty: [
      'Prof. Saptarshi Ghosh',
      'Prof. Rinkee Chopra',
    ],
  },
  {
    title: 'Instrumentation, Robotics & Control',
    faculty: [
      'Prof. Srivathsan Vasudevan',
      'Prof. Sharad Kumar Singh',
    ],
  },
  {
    title: 'Artificial Intelligence & Quantum Technology',
    faculty: [
      'Prof. Vivek Kanhangad',
      'Prof. Vimal Bhatia',
      'Prof. Mukesh Kumar',
      'Prof. Shaibal Mukherjee',
      'Prof. Sharad Kumar Singh',
      'Prof. Ayush Tripathi',
      'Prof. Subhadeep Paladhi',
      'Prof. Saptarshi Ghosh',
      'Prof. Swaminathan R.',
      'Prof. Vipul Singh',
      'Prof. Appina Balasubramanyam',
      'Prof. Trapti Jain',
      'Prof. Santosh Kumar Vishvakarma',
      'Prof. Abhinav Kranti',
      'Prof. Prabhat Kumar Upadhyay',
      'Prof. Sumit Gautam',
      'Prof. Ram Bilas Pachori',
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
      <div className="bg_border">
        <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
          <Grid container spacing={4} justifyContent="center">
            {domains.map((domain) => (
              <Grid key={domain.title} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    border: '2px solid',
                    borderColor: 'secondary.main',
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      py: 2,
                      px: 2,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {domain.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2, flexGrow: 1 }}>
                    <Typography component="div" fontSize="0.85rem">
                      <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                        {domain.faculty.map((name) => (
                          <li key={name} style={{ marginBottom: '4px' }}>
                            {name}
                          </li>
                        ))}
                      </ul>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </PageLayout>
  );
}
