import { Grid, Typography } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

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
        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" paddingLeft="40%" color="secondary.main">
              Communications
            </Typography>
            <div id="rectangle-l-outside">
              <div id="rectangle-l-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Ram Bilas Pachori</li>
                    <li>Prof. Prabhat Kumar Upadhyay</li>
                    <li>Prof. Vimal Bhatia</li>
                    <li>Prof. Sumit Gautam</li>
                    <li>Prof. Swaminathan R.</li>
                    <li>Prof. Appina Balasubramanyam</li>
                    <li>Prof. Dibbendu Roy</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" align="right" paddingRight="40%" color="secondary.main">
              Signal and Image Processing
            </Typography>
            <div id="rectangle-r-outside">
              <div id="rectangle-r-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Ram Bilas Pachori</li>
                    <li>Prof. Prabhat Kumar Upadhyay</li>
                    <li>Prof. Vimal Bhatia</li>
                    <li>Prof. Vivek Kanhangad</li>
                    <li>Prof. Appina Balasubramanyam</li>
                    <li>Prof. Ayush Tripathi</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" paddingLeft="40%" color="secondary.main">
              Power Electronics and Electric Machines
            </Typography>
            <div id="rectangle-l-outside">
              <div id="rectangle-l-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Amod C. Umarikar</li>
                    <li>Prof. Vijay A. S.</li>
                    <li>Prof. Lokesh Kumar Dewangan</li>
                    <li>Prof. B Prathap Reddy</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" align="right" paddingRight="40%" color="secondary.main">
              Power Systems
            </Typography>
            <div id="rectangle-r-outside">
              <div id="rectangle-r-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Trapti Jain</li>
                    <li>Prof. Shubhadeep Paladhi</li>
                    <li>Prof. Lokesh Kumar Dewangan</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" paddingLeft="40%" color="secondary.main">
              VLSI Design
            </Typography>
            <div id="rectangle-l-outside">
              <div id="rectangle-l-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Santosh Kumar Vishvakarma</li>
                    <li>Prof. Shaibal Mukherjee</li>
                    <li>Prof. Mukesh Kumar</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" align="right" paddingRight="40%" color="secondary.main">
              Radio Frequency and Microwave
            </Typography>
            <div id="rectangle-r-outside">
              <div id="rectangle-r-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Saptrishi Ghosh</li>
                    <li>Prof. Rinkee Chopra</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" paddingLeft="40%" color="secondary.main">
              Nanoelectronic Devices
            </Typography>
            <div id="rectangle-l-outside">
              <div id="rectangle-l-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Srivathsan Vasudevan</li>
                    <li>Prof. Mukesh Kumar</li>
                    <li>Prof. Shaibal Mukherjee</li>
                    <li>Prof. Vipul Singh</li>
                    <li>Prof. Abhinav Kranti</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" align='right' paddingRight="40%" color="secondary.main">
              Control Instrumentation And Optimization
            </Typography>
            <div id="rectangle-r-outside">
              <div id="rectangle-r-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Sharad Kumar Singh</li>
                    <li>Prof. Srivathsan Vasudevan</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h5" align="left" paddingLeft="40%" color="secondary.main">
              Machine Learning and Deep Learning
            </Typography>
            <div id="rectangle-l-outside">
              <div id="rectangle-l-inside">
                <Typography component="div" fontSize="0.8rem">
                  <ul>
                    <li>Prof. Ram Bilas Pachori</li>
                    <li>Prof. Vivek Kanhangad</li>
                    <li>Prof. Vimal Bhatia</li>
                    <li>Prof. Dibbendu Roy</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />
      </div>
    </PageLayout>
  );
}
