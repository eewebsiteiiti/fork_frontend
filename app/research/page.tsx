import { Grid, Typography, Box } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

const domains = [
  {
    title: 'CSP & RFM',
    subtitle: 'Communications, Signal Processing & Radio Frequency Microwave',
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
      'Prof. Saptrishi Ghosh',
      'Prof. Rinkee Chopra',
    ],
  },
  {
    title: 'PSPE and Control',
    subtitle: 'Power Electronics, Machines and Power Systems',
    faculty: [
      'Prof. Amod C. Umarikar',
      'Prof. Vijay A. S.',
      'Prof. Lokesh Kumar Dewangan',
      'Prof. B Prathap Reddy',
      'Prof. Trapti Jain',
      'Prof. Shubhadeep Paladhi',
      'Prof. Sharad Kumar Singh',
    ],
  },
  {
    title: 'VDN and Photonics',
    subtitle: 'VLSI Devices, Nanoelectronics and Photonics',
    faculty: [
      'Prof. Santosh Kumar Vishvakarma',
      'Prof. Shaibal Mukherjee',
      'Prof. Mukesh Kumar',
      'Prof. Vipul Singh',
      'Prof. Srivathsan Vasudevan',
      'Prof. Abhinav Kranti',
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
              <Grid key={domain.title} size={{ xs: 12, sm: 6, md: 4 }}>
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
                    <Typography variant="h5" fontWeight="bold">
                      {domain.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                      {domain.subtitle}
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
