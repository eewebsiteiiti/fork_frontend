import React from "react";
import Carousel from "../components/HomePage/Carousel";
import Navbar from "../components/HomePage/Navbar";
import MobileNavbar from "../components/HomePage/MobileNavbar";
import Events from "../components/HomePage/Events";
import Gallery from "../components/HomePage/Gallery";
import NoteFromHOD from "../components/HomePage/NoteFromHOD";
import AboutUs from "../components/HomePage/AboutUs";
import { Typography } from "@mui/material";
export default function HomePage() {
  return (
    <>
      <div className="home">
        <section className="carousel">
          <Navbar />
          <MobileNavbar />
          <Carousel />
        </section>
        <section className="news">
          <Events />
          <br /> <br />
          <AboutUs />
          <br /> <br />
          <Gallery />
          <br />
          <br />
          <NoteFromHOD />
          <br />
          <br />
          <Typography
            sx={{ textAlign: "center", fontSize: "2.3rem", py: 4 }}
            variant="h1"
            component="h2"
          >
            Timeline!
          </Typography>
          <img src="/Images/history.png" alt="not available" width="98%" />
        </section>
      </div>
    </>
  );
}
