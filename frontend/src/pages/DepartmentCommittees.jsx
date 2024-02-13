import React from "react"
import Navbar from "../components/BodyNavbar/BodyNavbar"
import Header from "../components/Header"
import { com } from "../HeaderData"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/material"
import { Email } from "@mui/icons-material"
export default function DepartmentCommittees() {
  return (
    <>
      <div className="about">
        <Navbar />
        <div className="header">
          <Header
            title={com.title}
            description={com.description}
            image={com.image}
          />
        </div>
        <Container sx={{ py: 4 }}>
          <Card>
            <CardMedia
              sx={{ height: 400 }}
              image="/Images/Committees/DUGC.JPG"
              title="DUGC Team"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                color={"secondary"}
                component="div"
              >
                DUGC - Department Under Graduate Committee
              </Typography>
              <CardActions sx={{ float: "right" }}>
                <Email /> Email: &nbsp;
                <a href="mailto:dugcee@iiti.ac.in">
                  <Typography variant="p" color={"primary"}>
                    dugcee@iiti.ac.in
                  </Typography>
                </a>
              </CardActions>
              <Typography variant="body2" color="text.secondary">
                The department has a DUGC to deal with all issues related to UG
                students, academic programs, UG curriculum and courses, academic
                performance, academic indiscipline, academic malpractices of
                individual UG students Revising the UG curriculum, assessment of
                the academic programs and suggests appropriate revisions or
                modifications.
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="body2" color="primary">
                The current DUGC comprises of <br /> Dr. Vijay A S (Convener){" "}
                <br /> Dr. Swaminathan R <br /> Prof. Srivathsan Vasudevan{" "}
                <br /> Mr. Rishabh Patil (3rd year EE)
              </Typography>
            </CardContent>
          </Card>

          <br />
          <Card>
            <CardMedia
              sx={{ height: 400 }}
              image="/Images/profile_placeholder.jpg"
              title="DPGC Team"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                color={"secondary"}
                component="div"
              >
                DPGC - Department Post Graduate Committee
              </Typography>
              <CardActions sx={{ float: "right" }}>
                <Email /> Email: &nbsp;
                <a href="mailto:dugcee@iiti.ac.in">
                  <Typography variant="p" color={"primary"}>
                    dpgcee@iiti.ac.in
                  </Typography>
                </a>
              </CardActions>
              <Typography variant="body2" color="text.secondary">
                The department has a DPGC to deal with all issues related to PG
                students, academic programs, PG curriculum and courses, academic
                performance, academic indiscipline, academic malpractices of
                individual PG students Revising the PG curriculum, assessment of
                the academic programs and suggests appropriate revisions or
                modifications.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="primary">
                The current DPGC comprises of <br /> Prof. Saptarshi Ghosh
                (Convener) <br /> Prof. Amod C. Umarikar
                <br /> Prof. Santosh Kumar Vishvakarma
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  )
}
