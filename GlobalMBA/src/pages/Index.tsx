import React from "react";
import { SiteNavbar } from "../components/Navbar";
import Hero from "../components/Hero";
import {Placements} from "../components/Placements"
import ProgramsSection from "../components/ProgramsSection";
import Recognitions from "../components/Recognitions";
import About from "../components/About/About";
import Awards from "../components/Awards/Awards";
import BackToTop from "../components/Footer/BackToTop";import { ModalProvider } from "../components/Footer/ModalContext"
import Footer from '../components/Footer/Footer';
// import Programs from "../components/Programs/Programs";
import Recruiters from "../components/Recruiters/Recruiters";
import CampusLife from "../components/CampusLife/CampusLife";
import Testimonials from "../components/Testimonials/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
    <SiteNavbar />
      <Hero />
      <Placements />
      <About />
      <Awards />
      {/* <Programs/> */}
      <ProgramsSection />
      <Recruiters />
      <CampusLife/>
      <Testimonials/>
      <BackToTop/>
      <Footer/>
    </div>
  );
};

export default Index;
