import React from "react";
import Header from "../components/Header";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import Event from "../components/HomePage/Event";
import { activity } from "../HeaderData";
import { Container, Grid } from "@mui/material";
import { api } from "../Api";
import { useEffect } from "react";
import axios from "axios";

export default function ActivitiesPage() {
  const [event, setEvent] = React.useState([]);
  const [isError, setIsError] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${api}/events/read`, {
        mode: "cors",
      })
      .then((response) => setEvent(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setEvent("Not Available");
    }
  }, [isError, event]);

  return (
    <>
      <Navbar />
      <Header title={activity.title} />
      <Container sx={{ my: 5 }}>
        <Grid item>
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
                    {/* <Event
                      description={item.description}
                      title={item.title}
                      image={item.image}
                      day={item.day}
                      year={item.year}
                      date={item.date}
                      month={item.month}
                      time={item.time}
                    /> */}
                  </a>
                </Grid>
              </>
            ))}
        </Grid>
      </Container>
    </>
  );
}
