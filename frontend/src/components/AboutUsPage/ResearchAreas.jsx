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
          spacing={1}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ResearchCard
              specialisation={"Communications and Signal Processing (CSP)"}
              description={
                "Communication and signal processing group works in areas related to wireless communication technologies and various signal/image processing techniques."
              }
              action={"#"}
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
              specialisation={"VLSI Design and Nano Electronics (VDN)"}
              description={
                "VLSI Design and Nano Electronics focuses on design and fabrication of various electronic devices having applications in memory, communication, sensors, IoT, and wearable electronics"
              }
              action={"#"}
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
              specialisation={"Power Electronics, Machines and Power Systems (PEPS)"}
              description={
                "Power Electronics, Machines and Power Systems group works on efficient and optimal generation, transmission, distribution, use of electrical energy and efficient electric drives."
              }
              photo={"/Images/logo/power.png"}
              action={"#"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ResearchCard
              specialisation={"RF and Microwave (RFM)"}
              description={
                "RF (Radio Frequency) and microwave engineering are a particular domain of electrical engineering that focus on the design and analysis of high-frequency electronic circuits and systems."
              }
              photo={"Images/logo/RF.jpg"}
              action={"#"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ResearchCard
              specialisation={"Control Instrumentation And Optimization"}
              description={
                
                "Control optimization involves the meticulous management of system behavior and the strategic refinement of processes to attain optimal outcomes. By monitoring variables, making informed decisions, and applying adjustments, control optimization ensures efficiency and effectiveness."
              }
              action={"#"}
              photo={"https://thumbs.dreamstime.com/b/computer-repair-service-vector-business-logo-template-concept-illustration-wrench-gears-symbols-search-engine-optimization-130160615.jpg"}
            />
          </Grid>
        </Grid>
        <Typography
          sx={{ textAlign: "center", fontSize: "2.3rem", py: 1 }}
          variant="h1"
          component="h2"
        >
          
          Our Journey...
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
