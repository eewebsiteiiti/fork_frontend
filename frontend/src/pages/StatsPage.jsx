import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Table,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import { api } from "../Api";
import axios from "axios";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function StatsPage() {
  const param = useParams();
  console.log(param.program === "Faculty");
  const [patent, setPatent] = React.useState();
  React.useEffect(() => {
    axios
      .get(`${api}/achievements/patent/read`, {
        mode: "cors",
      })
      .then((response) => setPatent(response.data))
      .catch((error) => console.log(error.message));
  }, []);
  console.log(patent);
  return (
    <div>
      <>
        <Navbar />
        <br />
        <center className="bg_border">
          {param?.program === "Faculty" ? (
            <>
              <Header title="Statistics" />
              <img
                alt="not_found"
                width="50%"
                src="/Images/faculty_number.jpg"
              />
            </>
          ) : (
            <></>
          )}
          {param?.program === "Students" ? (
            <>
              <Header title="Statistics" />
              <img
                alt="not_found"
                width="50%"
                src="/Images/degree_awarded.jpg"
              />
            </>
          ) : (
            <></>
          )}
          {param?.program === "Publications" ? (
            <>
              <Header title="Statistics" />
              <center>
                <img alt="not_found" width="50%" src="/Images/journals.jpg" />
              </center>
            </>
          ) : (
            <></>
          )}
          {param?.program === "Placements" ? (
            <>
              <Header title="Statistics" />
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="not_found"
                  width="40%"
                  src="/Images/ug_placements.jpg"
                />
                <img
                  alt="not_found"
                  width="40%"
                  src="/Images/pg_placements.jpg"
                />
              </Box>
            </>
          ) : (
            <></>
          )}
          {param?.program === "Patents" ? (
            <>
              <Header title="Statistics" />
              <img alt="not_found" width="50%" src="/Images/patent_data.png" />

              <Typography textAlign="center" fontWeight="bold" variant="h1">
                Patents
              </Typography>
              <Container>
                <br />
                <br />
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "secondary.main" }}>
                      <TableRow>
                        <TableCell align="left">
                          <Typography color="white">
                            Application Number
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography color="white">Patent Name</Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography color="white">
                            Project Instructor
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography color="white">Year</Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography color="white">Status</Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {patent?.map((row, key) => (
                        <TableRow
                          key={key}
                          sx={{
                            backgroundColor: key % 2 != 0 ? "#ffd6dd7c" : "",
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell align="left">{row.uuid}</TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.pi}</TableCell>
                          <TableCell align="left">{row.year}</TableCell>
                          <TableCell align="left">{row.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </>
          ) : (
            <></>
          )}
          {param?.program === "Projects" ? (
            <>
              <center>
                <Header title="Statistics" />
                <img
                  alt="not_found"
                  width="50%"
                  src="/Images/projects_number.jpg"
                />
              </center>
            </>
          ) : (
            <></>
          )}
          {param?.program === "Grants" ? (
            <>
              <Header title="Statistics" />
              <img
                alt="not_found"
                width="50%"
                src="/Images/project_grant.jpg"
              />
            </>
          ) : (
            <></>
          )}

          {param?.program === "citations" ? (
            <>
              <Header title="Google Scholar Citation" />
              {/* <img alt="not_found" width="50%" src="/Images/patent_data.jpg" /> */}
              <Typography variant="h1" color="secondary.main" sx={{fontSize:"7rem"}}>
                <CountUp end={44150} duration={5}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </Typography>
              <Typography variant="p" color="secondary.main" sx={{fontSize:"2rem"}}>
                Citations
              </Typography>
            </>
          ) : (
            <></>
          )}
        </center>
        <br />
      </>
    </div>
  );
}
