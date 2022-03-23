import React, { useState } from "react";
import HeroSection from "../components/ReuseHero";
import CoachingInfoSection from "../components/CoachingInfoSection";
import {
  coachingObjOne,
  coachingObjTwo,
} from "../components/CoachingInfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const CoachingInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services />

      <CoachingInfoSection {...coachingObjOne}/>
      <Footer />
    </>
  );
};

export default CoachingInfo;
