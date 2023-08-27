import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/BodyNavbar/BodyNavbar";
export default function StatsPage() {
  const param = useParams();
  console.log(param.program === "Faculty");
  return (
    <div>
      <>
      <Navbar/>
        <br />
        <center>
          {param?.program === "Faculty" ? (
            <>
            <Header title="Statistics"/>
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
            <Header title="Statistics"/>
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
            <Header title="Statistics"/>
              <center>
                <img alt="not_found" width="50%" src="/Images/journals.jpg" />
              </center>
            </>
          ) : (
            <></>
          )}
          {param?.program === "Placements" ? (
            
            <>
            <Header title="Statistics"/>
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
            <Header title="Statistics"/>
              <img alt="not_found" width="50%" src="/Images/patent_data.png" />
            </>
          ) : (
            <></>
          )}
          {param?.program === "Projects" ? (
            <>
              <center>
              <Header title="Statistics"/>
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
            <Header title="Statistics"/>
              <img
                alt="not_found"
                width="50%"
                src="/Images/project_grant.jpg"
              />
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
