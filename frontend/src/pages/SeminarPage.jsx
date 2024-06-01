import React from "react";
import Header from "../components/Header";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import { Typography, Container } from "@mui/material";
import { seminar } from "../HeaderData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SeminarPage() {
  return (
    <>
      <Navbar />
      <Header title={seminar.title} />
      <Container>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "primary.main" }}>
              <TableRow>
                <TableCell align="left">
                  <Typography color="white">Seminar Title </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="white">Time</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="white">By</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography color="white">Details</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </TableCell>
                <TableCell align="right"> 4 hours</TableCell>
                <TableCell align="right">Quod natus </TableCell>
                <TableCell align="right">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit vitae quasi eum, molestiae doloremque ipsum ex
                  aspernatur consectetur, recusandae ducimus explicabo ipsa qui
                  optio, cupiditate sint error numquam neque{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
