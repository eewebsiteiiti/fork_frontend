import { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Container,
  Table,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { TableContainer } from "@mui/material";
import { useParams } from "react-router-dom";
import { api } from "../Api";
import LoadingPage from "./LoadingPage";
import Header from "../components/Header";
import { courses } from "../HeaderData";
import Navbar from "../components/BodyNavbar/BodyNavbar";
export default function CoursePage() {
  const param = useParams();
  const [data, setData] = useState();
  const [isError, setIsError] = useState();

  const [elective, setElective] = useState();

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${api}/course/read/${param.program}`, { timeout: 50000 })
        .then((response) => setData(response.data))
        .catch((error) => setIsError(error.message));
      if (!isError) {
        setIsError("Not Available");
      }
    });
  }, [param.program, isError]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${api}/course/read/elective/${param.program}`)
        .then((response) => setElective(response.data))
        .catch((error) => setIsError(error.message));
      if (!isError) {
        setIsError("Not Available");
      }
    }, 3000);
  }, [param.program, isError]);
  return (
    <div>
      <Navbar />
      <Header
        title={courses.title}
        description={courses.description}
        image={courses.image}
      />
  <div className="bg_border">

      <Container  sx={{ py: 2 }}>
        <br />
        <a href="https://academic.iiti.ac.in/" target="_blank">
          <Typography variant="h4">👉Academic IIT Indore</Typography>
        </a>

        <Typography variant="h1" color="primary.main" textAlign="center">
          {param.program === "BTech" ? "B.Tech." : "M.Tech."}
        </Typography>
        <Box sx={{ py: 4 }}>
          {data ? (
            <>
              {param.program === "BTech" ? (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((first, i) => (
                    <>
                      <div >
                        <Typography
                          variant="h1"
                          textAlign="center"
                          fontWeight="bold"
                          color="primary.main"
                        >
                          Semester: {first}
                        </Typography>
                        <Container>
                          <br />
                          <br />
                          <TableContainer component={Paper}>
                            <Table
                              sx={{ minWidth: 650 }}
                              aria-label="simple table"
                            >
                              <TableHead
                                sx={{ backgroundColor: "secondary.main" }}
                              >
                                <TableRow>
                                  {/* <TableCell>
                                  <Typography color="white">S.No.</Typography>
                                </TableCell> */}
                                  <TableCell align="left">
                                    <Typography color="white">
                                      Course Code
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography color="white">
                                      Course Name / Syllabus
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography color="white">
                                      Credit
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography color="white">L-T-P</Typography>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {data?.map((row, key) => (
                                  <TableRow
                                    key={key}
                                    sx={{
                                      color: "black",
                                      backgroundColor:
                                        key % 2 != 0 ? "#ffd6dd7c" : "",
                                      "&:last-child td, &:last-child th": {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    {row.semester === first ? (
                                      <>
                                        {/* <TableCell component="th" scope="row">
                                        number
                                      </TableCell> */}
                                        <TableCell align="left">
                                          {row.code}
                                        </TableCell>
                                        <TableCell align="left">
                                          {row.name}
                                        </TableCell>
                                        <TableCell align="left">
                                          {row.credit}
                                        </TableCell>
                                        <TableCell align="left">
                                          {row.ltp}
                                        </TableCell>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Container>

                        <br />
                      </div>
                    </>
                  ))}

                  <Typography textAlign="center" fontWeight="bold" variant="h1">
                    Electives
                  </Typography>
                  <Container>
                    <br />
                    <br />
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "secondary.main" }}>
                          <TableRow>
                            <TableCell align="left">
                              <Typography color="white">Couse Code</Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography color="white">Course Name</Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography color="white">
                                Course Credit
                              </Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography color="white">L-T-P</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {elective?.map((row, key) => (
                            <TableRow
                              key={key}
                              sx={{
                                backgroundColor:
                                  key % 2 != 0 ? "#ffd6dd7c" : "",
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell align="left">{row.code}</TableCell>
                              <TableCell align="left">{row.name}</TableCell>
                              <TableCell align="left">{row.credit}</TableCell>
                              <TableCell align="left">{row.ltp}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Container>
                </>
              ) : (
                <>
                  {[1, 2, 3, 4].map((first, i) => (
                    <>
                      <div >
                        <Typography
                          textAlign="center"
                          fontWeight="bold"
                          variant="h1"
                        >
                          Semester: {first}
                        </Typography>

                        <Container>
                          <br />
                          <br />
                          <TableContainer component={Paper}>
                            <Table
                              sx={{ minWidth: 500 }}
                              aria-label="simple table"
                            >
                              <TableHead
                                sx={{ backgroundColor: "secondary.main" }}
                              >
                                <TableRow>
                                  <TableCell align="center">
                                    <Typography color="white">
                                      Course Code
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography color="white">
                                      Course Name / Syllabus
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {data?.map((row, key) => (
                                  <TableRow
                                    key={key}
                                    sx={{
                                      color: "black",
                                      backgroundColor: "white",
                                    }}
                                  >
                                    {row.semester === first ? (
                                      <>
                                        <TableCell align="center">
                                          {row.code}
                                        </TableCell>
                                        <TableCell align="center">
                                          {row.name}
                                        </TableCell>
                                        <TableCell align="left">
                                          {row.credit}
                                        </TableCell>
                                        <TableCell align="left">
                                          {row.ltp}
                                        </TableCell>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Container>

                        <br />
                      </div>

                      {/* 

                      <table>
                        <th>Course Code</th>
                        <th align="right">Course Name</th>
                        {data?.map((item, key) => (
                          <tr>
                            {item.semester === first ? (
                              <>
                                <td>{item.code}</td>
                                <td align="center">{item.name}</td>
                              </>
                            ) : (
                              <></>
                            )}
                          </tr>
                        ))}
                      </table>

                      <br /> */}
                    </>
                  ))}
                </>
              )}
            </>
          ) : (
            <LoadingPage />
          )}
        </Box>
      </Container>
      </div>
    </div>
  );
}
