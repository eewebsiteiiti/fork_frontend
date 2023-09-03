import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ResearchCard from "./ResearchCard";
const ResearchAreas = () => {
  return (
    <div className="research">
      <Container>
        <Typography variant="h1" py={5}>
          RESEARCH AREAS
        </Typography>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="top"
          spacing={5}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ResearchCard
              specialisation={"Communications and Signal Processing"}
              description={
                "Communication and signal processing group works in areas related to wireless communication technologies and various signal/image processing techniques."
              }
              action={"/research/signal"}
              photo={"/Images/logo/signal.jpg"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ResearchCard
              specialisation={"VLSI Design and Nano Electronics"}
              description={
                "VLSI Design and Nano Electronics focus on the design and manufacture of microelectronic circuits and devices."
              }
              action={"/research/vlsi"}
              photo={"/Images/logo/VLSI.jpg"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ResearchCard
              specialisation={"Power Electronics and Power Systems"}
              description={
                "Power Electronics and Power Systems group works on efficient and optimal generation, transmission, distribution, and use of electrical energy."
              }
              photo={"/Images/logo/power.png"}
              action={"/research/power"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ResearchCard
              specialisation={"RF and Microwave"}
              description={
                "RF (Radio Frequency) and microwave engineering are a particular domain of electrical engineering that focus on the design and analysis of high-frequency electronic circuits and systems."
              }
              photo={"Images/logo/RF.jpg"}
              action={"research//RF"}
            />
          </Grid>
        </Grid>
        <Typography
          sx={{ textAlign: "center", fontSize: "2.3rem", py: 1 }}
          variant="h1"
          component="h2"
        >
          OUR HISTORY!
        </Typography>
        <center>
          <img src="/Images/history.png" alt="not available" width="65%" />
        </center>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default ResearchAreas;
