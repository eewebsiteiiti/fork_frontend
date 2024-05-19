import React from "react"
import Header from "../components/Header"
import { eesa } from "../HeaderData"
import Navbar from "../components/BodyNavbar/BodyNavbar"
import { Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import Email from "@mui/icons-material/Email"

const EESAPage = () => {
  return (
    <div>
      <Navbar />
      <Header
        title={eesa.title}
        description={eesa.description}
        image={eesa.image}
      />
      <Container>
        <Email /> Email: &nbsp;
        <a href="mailto:dugcee@iiti.ac.in">
          <Typography variant="p" color={"primary"}>
            eesa@iiti.ac.in
          </Typography>
        </a>
        <img src="Images/eesa.JPG" alt="not found" width="100%" />
      </Container>
    </div>
  )
}

export default EESAPage
