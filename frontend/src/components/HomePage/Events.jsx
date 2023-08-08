import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import Event from "./Event";
import { useEffect } from "react";
import axios from "axios";
import { api } from "../../Api";

export default function Events() {
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
  }, [isError]);
  console.log(event);
  return (
    <div>
      <Container sx={{ my: 5 }}>
        <Typography variant="h1" sx={{ borderBottom: "2px solid #BBBBBB" }}>
          EVENTS
        </Typography>
        <Grid
          container
          justifyContent="Left"
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={3}>
            {/* map on item list */}
            <Event description="sdfs" title="dhfjsdh" image="skjdf"  />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
