import React from "react";
import "../styles/carousel.css";
import { Typography } from "@mui/material";

export default function Carousel() {
  return (
      <div className="imgSlider">
      <div className="Carousel-text">
        <Typography variant="h3" fontSize={"2.5rem"} margin={"auto"} fontWeight={600} sx={{color:"white"}}>
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
