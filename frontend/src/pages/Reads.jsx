import React, { useState,useEffect } from "react";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import Header from "../components/Header";
import { reads, Grid } from "../HeaderData";
import { Typography,Container} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function Reads() {
 
  return (
    <>
      <Navbar />
      <Header title={reads.title}
         description ={reads.description} />
      <br/>
      <br/>
      <Container>
      <TableContainer >
                <TableBody>
                  <TableRow>
                  <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell  ><Typography fontWeight={600} color = "primary">By Rakshit Jangid 2022 B.Tech.</Typography></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell ><Typography fontWeight={600} color = "primary">By Tejas Chaudhari 2022 B.Tech.</Typography></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell  ><embed src ="/pdf/EESA.pdf" height = "500" width="400"></embed></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell  ><embed src ="/pdf/Bouncing.pdf" height = "500" width="400"></embed></TableCell>
                    </TableRow>
                </TableBody>
            </TableContainer>
            </Container>
  </>
  );
}