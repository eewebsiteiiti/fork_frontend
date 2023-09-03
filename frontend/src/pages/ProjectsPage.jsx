import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, Container } from "@mui/material";
import { api } from "../Api";
import Header from "../components/Header";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import { projects } from "../HeaderData";
import "../components/styles/projects.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../components/styles/program.css";
export default function ProjectsPage() {
  const [data, setData] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    axios
      .get(`${api}/research/project/read`)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setIsError("Not Available");
    }
  }, [isError]);
  console.log(data);
  return (
    <>
      <Navbar />
      <Header
        title={projects.title}
        description={projects.description}
        image={projects.image}
      />
      {/* <div className="projects">
      <Box>
        <br/>
        <br/>
        
        <table>
          <tr>
            <th>Title</th>
            <th align="right">Project Incharge</th>
            <th align="right">Funding</th>
            <th align="right">Duration</th>
            <th align="right">Source</th>
          </tr>

          {data?.map((item, key) => (
            <>
              <tr>
                <td>{item.title}</td>
                <td align="center">{item.worker}</td>
                <td align="center">{item.funding}</td>
                <td align="center">{item.duration}</td>
                <td align="center">{item.project_type}</td>
              </tr>
            </>
          ))}
        </table>
      </Box>
      </div>  */}
      <div className="program">
        <div className="bg_border">
          <Container>
            <br />
            <br />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "secondary.main" }}>
                  <TableRow>
                    <TableCell>
                      <Typography color="white">Project Title</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Duration (Months)</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Source</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography color="white">Project Incharge</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row, key) => (
                    <TableRow
                      key={key}
                      sx={{
                        backgroundColor: key % 2 != 0 ? "#ffd6dd7c" : "",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.duration}</TableCell>
                      <TableCell align="right">{row.project_type}</TableCell>
                      <TableCell align="right">{row.worker}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          <br />
        </div>
      </div>
    </>
  );
}
