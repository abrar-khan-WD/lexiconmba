import React from "react";
import { SiteNavbar } from "../components/Navbar";
import Hero from "../components/Hero";
import {Placements} from "../components/Placements"
import {About} from "../components/About"
import ProgramsSection from "../components/ProgramsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
    <SiteNavbar />
      <Hero />
      <Placements />
      <About />
    <ProgramsSection />
    </div>
  );
};

export default Index;
