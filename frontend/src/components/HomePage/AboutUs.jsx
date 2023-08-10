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
                  ABOUT US
                </Typography>
                <br />
                <Typography variant="p" color="white">
                  One of the founding departments of the Institute from 2009,
                  the Department of Electrical Engineering at IIT Indore has
                  played a prominent role by setting the highest standards in
                  teaching and research. Over the years, several new
                  interdisciplinary courses and programs in the fields of
                  Communications and Signal Processing (CSP), VLSI Design and
                  Nanotechnology (VDN), have been offered. conferred with
                  several awards and fellowships at national and international
                  levels. Many of the faculty members have memberships in
                  various professional societies of the IEEE. Several serve on
                  the editorial boards of reputed international and national
                  journals and review technical articles for journals on a
                  regular basis. Furthermore, many serve as technical and
                  organizing committee members of international symposia and
                  conferences. Some faculty have excelled in teaching and have
                  been conferred awards and recognitions for their
                  contributions. Some also have books and monographs to their
                  credit.
                </Typography>
              </Grid>
              <Grid item>
                <img
                  className="about-img"
                  src="/Images/about.JPG"
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
