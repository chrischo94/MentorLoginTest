import React, { useState } from "react";
import HeroSection from "../components/ReuseHero";
import MentorshipInfoSection from "../components/MentorshipInfoSection";
import {
  mentorshipObjOne,
  
} from "../components/MentorshipInfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const MentoringInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      <MentorshipInfoSection {...mentorshipObjOne}/>
      <Footer />
    </>
  );
};

export default MentoringInfo;
