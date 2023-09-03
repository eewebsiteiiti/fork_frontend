import React from "react";
import { Grid, Typography } from "@mui/material";
export default function AboutUs() {
  return (
    <>
      <div className="about">
        <Grid
          container
        // sx={{
        //   backgroundColor: {
        //     xs: "primary.main",
        //     md: "white",
        //   },
        // }}
        >
          <Grid item sx={{ backgroundColor: "primary.main" }} xs={12} md={11}>
            <Grid
              container
              justifyContent="space-around"
              alignItems={"center"}
              direction={"row"}
            >
              <Grid item xs={12} md={6} margin={10}>
                <Typography
                  variant="h1"
                  sx={{
                    borderBottom: "2px solid #BBBBBB",
                    padding: 0,
                    color: "white",
                  }}
                >
                  EE at IITI
                </Typography>
                <br />
                <Typography variant="p" color="white">
                One of the founding departments of the Institute from 2009, the Department of Electrical
Engineering at IIT Indore has played a prominent role by setting the highest standards in
teaching and research. Over the years, several new interdisciplinary courses and programs
in the fields of Communications and Signal Processing (CSP), VLSI Design and
Nanotechnology (VDN), have been offered. <br/>
The department offers four academic programs: 1) B.Tech.(EE), 2) MS (by Research)
3) M.Tech. (CSP, VDN) and 4) Ph.D. in Electrical Engineering. The current intake of the
Department is 85 in B.Tech., 30 in M. Tech and 15-20 PhDs per year. A wide spectrum
of courses is being offered at levels ranging from the undergraduate to the doctoral degree
program. Many subjects such as Special Semiconductor Devices, IC Fabrication
Technology, Advanced Micro-processes and Nanotechnology, Nanotechnology and
Nanoelectronics, Optoelectronics, Microwave and Satellite Communication, Internet of
Things (IoT) Networks are currently being offered as electives.

                </Typography>
              </Grid>
              <Grid item>
                <img
                  className="about-img"
                  src="/Images/about.jpg"
                  alt=""
                  width="400"
                  style={{ position: "relative", left: "60px" }}

                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
