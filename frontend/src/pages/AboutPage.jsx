import React from 'react'
import Header from "../components/Header";
import { about } from "../HeaderData";
import Program from "../components/AboutUsPage/Program";
import Navbar from '../components/BodyNavbar/BodyNavbar';
import KeyPoint from '../components/AboutUsPage/KeyPoint';
import ResearchAreas from '../components/AboutUsPage/ResearchAreas';

export default function AboutPage() {
  return (
    <div className="about">
      <Navbar/>
      <div className="header">
        <Header title={about.title} description={about.description} image={about.image} />
      </div>
      <section className="programs">
        <Program />
      </section>
      <section className="KeyPoints">
        <KeyPoint/>
      </section>
      <section className="researchArea">
        <ResearchAreas/>
      </section>
      </div>
  )
}
