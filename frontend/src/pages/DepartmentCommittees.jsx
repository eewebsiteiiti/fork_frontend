import React from "react"
import Navbar from "../components/BodyNavbar/BodyNavbar"
import Header from "../components/Header"
import { com } from "../HeaderData"
import "../components/styles/dc.css"

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
        {/* <Container sx={{ py: 4 }}>
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
                DWC-Department Website Committee
              </Typography>
              <CardActions sx={{ float: "right" }}>
                <Email /> Email: &nbsp;
                <a href="mailto:dugcee@iiti.ac.in">
                  <Typography variant="p" color={"primary"}>
                    website.ee@iiti.ac.in
                  </Typography>
                </a>
              </CardActions>
              <Typography variant="body2" color="text.secondary">
                The Department has a Website Committee which deals with the Departmental Website.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="primary">
                The current DWC comprises of <br /> Dr. Vijay A S
                (Convener) <br /> Prof. Saptarshi Ghosh
                <br /> Prof. Sumit Gautam
              </Typography>
            </CardContent>
          </Card>

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


        </Container> */}

<div class="container text-center" style={{
  // margin:"1%"
  marginTop:"0.5%",
  
}}>
<link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
  <div class="row ">
    <div class="col row1 col1">
      COMMITTEE NAME
    </div>
    <div class="col row1">
      FUNCTION
    </div>
    <div class="col row1">
      MEMBERS 
    </div>
    <div class="col row1">
      EMAIL ID 
    </div>
  </div>

  <div class="row ">
    <div class="col row2 col1">
      DUGC-Department Under Graduate Committee
    </div>
    <div class="col row2">
    The department has a DUGC to deal with all issues related to UG
                students, academic programs, UG curriculum and courses, academic
                performance, academic indiscipline, academic malpractices of
                individual UG students Revising the UG curriculum, assessment of
                the academic programs and suggests appropriate revisions or
                modifications.
    </div>
    <div class="col row2">
    <ul style={{
      listStyleType:"disc"
    }}>
      <li>Dr. Vijay A S (Convener)</li>
      <li>Dr. Swaminathan R </li>
      <li>Prof. Srivathsan Vasudevan</li>
      <li>Mr. Rishabh Patil (3rd year EE)</li>
    </ul>

    </div>
    <div class="col row2">dugcee@iiti.ac.in</div>
  </div>

  <div class="row ">
    <div class="col  row3 col1">
    DPGC-Department Post Graduate Committee
    </div>
    <div class="col row3">
    The department has a DPGC to deal with all issues related to PG
                students, academic programs, PG curriculum and courses, academic
                performance, academic indiscipline, academic malpractices of
                individual PG students Revising the PG curriculum, assessment of
                the academic programs and suggests appropriate revisions or
                modifications.
    </div>
    <div class="col row3">
    <ol>
      <li>Prof. Saptarshi Ghosh
                (Convener)</li>
      <li>Prof. Amod C. Umarikar</li>
      <li>Prof. Santosh Kumar Vishvakarma</li>
      
    </ol>

    </div>
    <div class="col row3">dpgcee@iiti.ac.in</div>
  </div>

  <div class="row ">
    <div class="col row4 col1">
      DWC-Department Website Committee 
    </div>
    <div class="col row4">
    The Department Website Committee oversees the activities of the Student Team which updates and maintains the Departmental website
    </div>
    <div class="col row4">
    <ol>
      <li>Dr. Vijay A S (Convener)</li>
      <li>Prof. Saptarshi Ghosh</li>
      <li>Prof. Sumit Gautam</li>
      
    </ol>

    </div>
    <div class="col row4">website.ee@iiti.ac.in</div>
  </div>

  <div class="row">
    <div class="col row5 col1">
      DSC-Department Space Committee
    </div>
    <div class="col row5">
    The committee will put forward departmental space requirements related to UG and PG programs, assess requests for space from individual faculty members, and make recommendations to the Head of the Department of Electrical Engineering
    </div>
    <div class="col row5">
    <ol style={{color:"black"}}>
      <li>Dr. Swaminathan R. (Convener) </li>
      <li>Prof. Srivathsan Vasudevan </li>
      <li>Dr. Subhadeep Paladhi </li>
      
    </ol>

    </div>
    <div class="col row5">-</div>
  </div>
</div>

      </div>
    </>
  )
}
