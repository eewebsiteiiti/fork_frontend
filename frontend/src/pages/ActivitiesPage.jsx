import React from "react"
import Header from "../components/Header"
import Navbar from "../components/BodyNavbar/BodyNavbar"
import { activity } from "../HeaderData"
import { Container, Grid } from "@mui/material"
import Event from "../components/HomePage/Event"

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <Header title={activity.title} />
      <Container sx={{ my: 5 }}>
        <Grid item>

         
                {/* <Grid item sm={6} md={4} my={3}>
                  <a
                    rel="noreferrer"
                    href
                    target="_blank"
                  >
                    <Event
                      description
                      title
                      image
                      day
                      year
                      date
                      month
                      time
                    />
                  </a>
                </Grid> */}

        </Grid>
      </Container>
    </>
  )
}
