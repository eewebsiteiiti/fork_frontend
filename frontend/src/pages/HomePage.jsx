import React from "react";
import Carousel from "../components/HomePage/Carousel";
import Navbar from "../components/HomePage/Navbar";
import MobileNavbar from "../components/HomePage/MobileNavbar";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Events from "../components/HomePage/Events";

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
          <Events/>
        </section>
      </div>
    </>
  );
}
