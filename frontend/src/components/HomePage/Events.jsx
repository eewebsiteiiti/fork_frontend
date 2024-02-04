import React from "react"
import Event from "./Event"
import { useEffect } from "react"
import axios from "axios"
import Dates from "./Dates"
import { api } from "../../Api"
import { Container, Typography, Grid } from "@mui/material"
export default function Events() {
  const [event, setEvent] = React.useState([])
  const [isError, setIsError] = React.useState([])
  const [announcement, setAnnouncement] = React.useState([])
  const [dates, setDates] = React.useState([])
  useEffect(() => {
    axios
      .get(`${api}/events/read`, {
        mode: "cors",
      })
      .then((response) => setEvent(response.data))
      .catch((error) => setIsError(error.message))
    if (!isError) {
      setEvent("Not Available")
    }
    // event.reverse();
  }, [isError, event])
  useEffect(() => {
    axios
      .get(`${api}/announcement/read`, {
        mode: "cors",
      })
      .then((response) => setAnnouncement(response.data))
      .catch((error) => setIsError(error.message))
    if (!isError) {
      setEvent("Not Available")
    }
  }, [isError])
  useEffect(() => {
    axios
      .get(`${api}/news/read`, {
        mode: "cors",
      })
      .then((response) => setDates(response.data))
      .catch((error) => setIsError(error.message))
    if (!isError) {
      setEvent("Not Available")
    }
  }, [isError])
  return (
    <div>
      <Container sx={{ my: 5 }}>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="top"
          padding={2}
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={8}>
            <Grid
              container
              justifyContent="center"
              direction="column"
              alignItems="left"
              spacing={4}
            >
              <Grid item>
                <Typography
                  variant="h1"
                  sx={{
                    borderBottom: "2px solid #BBBBBB",
                    padding: 0,
                    marginBottom: 3,
                  }}
                >
                  EVENTS
                </Typography>
                <Grid
                  container
                  justifyContent="space-around"
                  direction="row"
                  alignItems="top"
                  spacing={2}
                >
                  {event
                    ?.slice(0)
                    .reverse()
                    .slice(0, 6)
                    .map((item, key) => (
                      <>
                        <Grid item sm={6} md={4} my={3}>
                          {/* {item.link ? <></> : <></>} */}
                          <a
                            rel="noreferrer"
                            href={item.link}
                            target="_blank"
                            style={{
                              pointerEvents: item.link ? "auto" : "none",
                            }}
                          >
                            <Event
                              description={item.description}
                              title={item.title}
                              image={item.image}
                              day={item.day}
                              year={item.year}
                              date={item.date}
                              month={item.month}
                              time={item.time}
                            />
                          </a>
                        </Grid>
                      </>
                    ))}
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="h1"
                  sx={{
                    borderBottom: "2px solid #BBBBBB",
                    padding: 0,
                    marginBottom: 3,
                  }}
                >
                  IMPORTANT DATES
                </Typography>
                <Grid
                  container
                  justifyContent="space-around"
                  direction="row"
                  alignItems="center"
                  spacing={4}
                  // p={4}
                  // m={"auto"}
                >
                  {dates
                    .slice(0)
                    .reverse()
                    .slice(0, 6)
                    ?.map((item, key) => (
                      <>
                        <Grid item sm={12} md={4} key={key}>
                          <Dates
                            description={item.description}
                            title={item.title}
                            image={item.image}
                            day={item.day}
                            year={item.year}
                            date={item.date}
                            month={item.month}
                            time={item.time}
                            link={item.link}
                          />
                        </Grid>
                      </>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid
            item
            xs={12}
            sm={10}
            md={3}
            backgroundColor={"#EEE"}
            borderTop={"4px solid #B2103F"}
            padding={2}
            sx={{ marginY: { xs: 4, md: 0 } }}
            // spacing={1}
          >
            <Typography
              variant="h1"
              textAlign={"center"}
              sx={{
                borderBottom: "2px solid #BBBBBB",
                padding: 0,
              }}
            >
              NEWS
            </Typography>
            <Grid
              container
              justifyContent="Left"
              direction="column-reverse"
              alignItems="center"
              // spapaddingY={0}cing={1}
            >
              {announcement.slice(0, 10)?.map((item, key) => (
                <>
                  <Grid
                    item
                    sm={12}
                    md={3}
                    width={1}
                    key={key}
                    borderBottom={"2px solid #BBBBBB"}
                    padding={1}
                    spacing={1}
                  >
                    <Typography
                      variant="p"
                      fontSize={"0.8rem"}
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>
                    <br />
                    <Typography variant="p" fontSize={"0.8rem"}>
                      {item.description}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
