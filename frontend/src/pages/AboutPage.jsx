import React from 'react'
import Header from "../components/Header";
import { about } from "../HeaderData";
import Program from "../components/AboutUsPage/Program";
import Navbar from '../components/BodyNavbar/BodyNavbar';
export default function AboutPage() {
  return (
    <div className="about">
      <Navbar/>
      <div className="header">
        <Header title={about.title} description={about.description} image={about.image} />
      </div>
      
      <section className="programs">
        <Program/>
      </section>
      </div>
  )
}
