import React from "react";
import Carousel from "../components/HomePage/Carousel";
import Navbar from "../components/HomePage/Navbar";
import MobileNavbar from "../components/HomePage/MobileNavbar";
import Events from "../components/HomePage/Events";
import Gallery from "../components/HomePage/Gallery";
import NoteFromHOD from "../components/HomePage/NoteFromHOD";
import AboutUs from "../components/HomePage/AboutUs";
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
          
        </section>
      </div>
    </>
  );
}
