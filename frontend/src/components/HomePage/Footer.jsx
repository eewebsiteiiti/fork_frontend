import React from "react";
import Box from "@mui/material/Box";
import { Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import "../styles/footer.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PublicIcon from "@mui/icons-material/Public";
import ExtensionIcon from "@mui/icons-material/Extension";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import {
  CurrencyRupee,
  School,
  SupervisedUserCircle,
  Timeline,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      {/* counter */}
      <div className="Footer-div">
        <div className="blacklayer">
          <Typography
            color="secondary.main"
            variant="h1"
            sx={{
              textAlign: "center",
              padding: 3,
              marginBottom: 3,
            }}
          >
            ACHIEVEMENTS
          </Typography>

          <Box sx={{ px: 4 }}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              sx={{ m: "auto" }}
            >
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/people/Faculty">
                    <SupervisedUserCircle
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white ">
                    <CountUp end={18} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </Typography>
                  <Typography color="white">Faculty</Typography>
                </Box>
              </Grid>
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/research/stats/Students">
                    <SupervisorAccountIcon
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white">
                    <CountUp end={1115} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </Typography>
                  <Typography color="white">Students Graduated</Typography>
                </Box>
              </Grid>
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/research/stats/Publications">
                    <LibraryBooksIcon
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white">
                    <CountUp end={1358} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </Typography>
                  <Typography color="white">Publications</Typography>
                </Box>
              </Grid>
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/research/stats/Placements">
                    <Timeline
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white">
                    <CountUp end={96} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    %
                  </Typography>
                  <Typography color="white">Placement</Typography>
                </Box>
              </Grid>
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/research/stats/Patents">
                    <PublicIcon
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white">
                    <CountUp end={19} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </Typography>
                  <Typography color="white">Patents</Typography>
                </Box>
              </Grid>
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/research/stats/Projects">
                    <ExtensionIcon
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white">
                    <CountUp end={95} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </Typography>
                  <Typography color="white">Projects</Typography>
                </Box>
              </Grid>
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/research/stats/Grants">
                    <CurrencyRupee
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white">
                    <CountUp end={32} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    .7 Cr
                  </Typography>
                  <Typography color="white">Project Grants</Typography>
                </Box>
              </Grid>
              <Grid item sx={{ alignItems: "center" }} xs={12} sm={6} md={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <a href="/research/stats/citations">
                    <School
                      color="quaternary"
                      sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                    />
                  </a>
                  <Typography color="white">
                    <CountUp end={44150} duration={2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </Typography>
                  <Typography color="white" align="center">
                    Google Scholar Citations
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 2 }} color="gray" />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                paddingTop: 5,
                // px: 10,
                m: "auto",
                py: 5,
              }}
            >
              <Box className="footer-info" sx={{ mx: 3 }}>
                <Typography variant="h1" color="secondary.main" sx={{}}>
                  IIT Indore Department of Electrical
                </Typography>
                <Typography variant="body2" sx={{ color: "#B7B7c7" }}>
                  Contact: Head, Electrical Engineering Scandium Building,
                  <br />
                  Academic POD Indian Institute of Technology Indore Khandwa
                  Road,
                  <br />
                  Simrol Indore, Madhya Pradesh, India 453552
                  <br />
                  Email: hodee@iiti.ac.in
                </Typography>
              </Box>

              <Box className="footer-Links">
                <Typography
                  textAlign="center"
                  variant="h1"
                  color="secondary.main"
                >
                  Important Links
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ px: 2, borderRight: "1px solid gray" }}>
                    <Typography varient="p" sx={{ color: "white" }}>
                      About Us
                    </Typography>
                    <Box>
                      <Link to="/about">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Department
                        </Typography>
                      </Link>
                      {/* <Link to="/administration">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Administration
                        </Typography>
                      </Link> */}
                      {/* <Link to="/contact">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Contact Us
                        </Typography>
                      </Link> */}
                      <Link to="/gallery">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Gallery
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                  <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                    <Typography varient="p" sx={{ color: "white" }}>
                      People
                    </Typography>
                    <Box>
                      <Link to="/people/Faculty">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Faculty
                        </Typography>
                      </Link>
                      <Link to="/people/Staff">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Staff
                        </Typography>
                      </Link>
                      <Link to="/people/PhD/2021">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          PhD - students
                        </Typography>
                      </Link>
                      <Link to="/people/PhD/2021">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          M S Research - students
                        </Typography>
                      </Link>
                      <Link to="/people/MTech/2023">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          M.Tech. - students
                        </Typography>
                      </Link>
                      <Link to="/people/BTech/2023">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          B.Tech. - students
                        </Typography>
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                    <Typography varient="p" sx={{ color: "white" }}>
                      Research
                    </Typography>
                    <Box>
                      <Link to="/research">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Research Areas
                        </Typography>
                      </Link>
                      <Link to="/projects">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Projects
                        </Typography>
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                    <Typography varient="p" sx={{ color: "white" }}>
                      Academics
                    </Typography>
                    <Box>
                      <a href="https://academic.iiti.ac.in/">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Academics
                        </Typography>
                      </a>

                      <Link to="/courses/BTech">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Courses - UG
                        </Typography>
                      </Link>
                      <Link to="/courses/MTech/old">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Courses - PG
                        </Typography>
                      </Link>
                      <Link to="/labs/ug">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Laboratories - UG
                        </Typography>
                      </Link>
                      <Link to="/labs/pg">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Laboratories - Research
                        </Typography>
                      </Link>
                      <a href="https://academic.iiti.ac.in:8443/index1.html" target="_blank">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          AROL
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                  <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                    <Typography varient="p" sx={{ color: "white" }}>
                      Achievements
                    </Typography>
                    <Box>
                      <Link to="/achievements/books">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Books
                        </Typography>
                      </Link>

                      <Link to="/achievements/faculty">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Faculty Recognition
                        </Typography>
                      </Link>
                      <Link to="/achievements/students">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Student Achievements
                        </Typography>
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                    <Typography varient="p" sx={{ color: "white" }}>
                      Open Positions
                    </Typography>
                    <Box>
                      <a href="http://academic.iiti.ac.in/phdadvt.php">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Ph.D. Positions
                        </Typography>
                      </a>

                      <a href="http://www.iiti.ac.in/Careers/faculty_appointments.htm">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Faculty Positions
                        </Typography>
                      </a>

                      <a href="http://ee.iiti.ac.in/seminars.html">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Seminars
                        </Typography>
                      </a>

                      {/* <a href="http://www.iiti.ac.in/Courses/index.htm">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          CEP
                        </Typography>
                      </a> */}

                      <Link to="/stats/Placements">
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Placement Statistics
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider />
          <Box
            sx={{
              backgroundColor: "#1e1e1e",
            }}
          >
            <Typography color="white" textAlign="center" sx={{ p: 2 }}>
              ©️ Department of Electrical Engineering, IIT Indore - All Rights
              Reserved
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Footer;
