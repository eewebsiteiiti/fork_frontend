import React from "react";
import { image_api } from "../../Api";
import { Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function Event(props) {
  return (
    <div>
      <Grid
        container
        justifyContent="Left"
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Grid item sx={12} md={3}>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={`${image_api}${props.image}`}
            loading="lazy"
          />
        </Grid>
        <Grid item> {props.time} </Grid>
        <Grid item>
          {props.date} {props.month} {props.year} ,{props.day}
        </Grid>
        <Grid item>
          <Typography variant="p" fontWeight={700}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p" xs={12} md={3}>
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
