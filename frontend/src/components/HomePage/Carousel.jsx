import React from "react";
import "../styles/carousel.css";
import { Typography } from "@mui/material";

export default function Carousel() {
  return (
      <div className="imgSlider">
      <div className="Carousel-text">
        <Typography fontSize={"2rem"} margin={"auto"} fontWeight={600}>
          Welcome to the Department of
          <br />
          Electrical Engineering
          <br />
          @ IIT Indore
          <br />
        </Typography>
      </div>
    </div>
  )
}
