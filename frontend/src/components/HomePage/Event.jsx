import React from "react";
import { image_api } from "../../Api";
import { Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function Event(props) {
  return (
    <div>
      <Grid
        container
        justifyContent="left"
        direction="column"
        alignItems="top"
      >
        <Grid item sx={12} md={5}>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={`${image_api}${props.image}`}
            loading="lazy"
          />
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="space-between"
            direction="row"
            alignItems="left"
          >
            <Grid item>
              <Typography variant="p" color="gray" fontSize={".7rem"}>
                {props.time}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="p" color="gray" fontSize={".7rem"}>
                {props.date} {props.month} {props.year} ,{props.day}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5" fontWeight={700} color="black">
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p" fontSize={"0.8rem"} xs={12} md={3} textAlign={"justify"}>
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
