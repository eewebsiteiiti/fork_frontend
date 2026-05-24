import { Grid, Typography } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

const domains = [
  {
    title: 'Instrumentation, Robotics & Control',
    faculty: [
      'Prof. Srivathsan Vasudevan',
      'Prof. Sharad Kumar Singh',
    ],
    side: 'left',
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
    side: 'right',
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
    side: 'left',
  },
  {
    title: 'RF & Microwave',
    faculty: [
      'Prof. Saptarshi Ghosh',
      'Prof. Rinkee Chopra',
    ],
    side: 'right',
  },
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
      'Prof. Himali Singh'
    ],
    side: 'left',
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
    side: 'right',
  },
];

const rows = [];
for (let i = 0; i < domains.length; i += 2) {
  rows.push(domains.slice(i, i + 2));
}

export default function ResearchPage() {
  return (
    <PageLayout
      title="Research"
      subtitle="In line with the vision of the pursuit of excellence, the Department actively engages in cutting-edge research in the field of Electronics, Electrical and Communication Engineering. We strive to develop a vibrant research culture with strong industry-alumni-academia connects."
      backgroundImage="/images/banners/research.jpg"
    >
      <div className="bg_border">
        <br />
        <br />
        <br />
        {rows.map((row, rowIdx) => (
          <div key={rowIdx}>
            <Grid container>
              {row.map((domain) => (
                <Grid key={domain.title} size={{ xs: 12, sm: 6 }}>
                  {domain.side === 'left' ? (
                    <>
                      <Typography variant="h6" paddingLeft="40%" color="secondary.main" fontWeight="bold" fontSize="0.95rem">
                        {domain.title}
                      </Typography>
                      <div className="rectangle-l-outside">
                        <div className="rectangle-l-inside">
                          <Typography component="div" fontSize="0.8rem" sx={{ pt: 1, pb: 1 }}>
                            <ul>
                              {domain.faculty.map((name) => (
                                <li key={name} style={{ marginBottom: '3px' }}>{name}</li>
                              ))}
                            </ul>
                          </Typography>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Typography variant="h6" align="right" paddingRight="40%" color="secondary.main" fontWeight="bold" fontSize="0.95rem">
                        {domain.title}
                      </Typography>
                      <div className="rectangle-r-outside">
                        <div className="rectangle-r-inside">
                          <Typography component="div" fontSize="0.8rem" sx={{ pt: 1, pb: 1 }}>
                            <ul style={{ listStyle: 'none', paddingRight: '1rem', margin: 0 }}>
                              {domain.faculty.map((name) => (
                                <li key={name} style={{ marginBottom: '3px', textAlign: 'right' }}>{name}</li>
                              ))}
                            </ul>
                          </Typography>
                        </div>
                      </div>
                    </>
                  )}
                </Grid>
              ))}
            </Grid>
            <br />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
