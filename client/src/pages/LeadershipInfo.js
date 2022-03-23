import React, { useState } from "react";
import HeroSection from "../components/ReuseHero";
import LeadershipInfoSection from "../components/LeadershipInfoSection";
import {
  leadershipObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/LeadershipInfoSection/Data";
import Navbar from "../components/NavbarRouter";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const LeadershipInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <LeadershipInfoSection {...leadershipObjOne} />

      <Footer />
    </>
  );
};

export default LeadershipInfo;
