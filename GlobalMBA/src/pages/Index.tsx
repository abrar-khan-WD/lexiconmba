import React from "react";
import { SiteNavbar } from "../components/Navbar";
import Hero from "../components/Hero";
import {Placements} from "../components/Placements"
import {About} from "../components/About"

const Index = () => {
  return (
    <div className="min-h-screen">
  <SiteNavbar />
    <Hero />
    <Placements />
    <About />
    </div>
  );
};

export default Index;
