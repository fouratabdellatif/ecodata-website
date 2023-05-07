import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
// import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Team from "../components/Sections/Team";
import Solution from "../components/Sections/Solution";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Solution />
      {/* <Projects /> */}
      <Team />
      {/* <Blog /> */}
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


