import React, { useState } from "react";
import HeroSection from "../components/ReuseHero";
import RetirementInfoSection from "../components/RetirementInfoSection";
import {
  retirementObjOne,
} from "../components/RetirementInfoSection/Data";
import Navbar from "../components/NavbarRouter";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const RetirementInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      <RetirementInfoSection {...retirementObjOne}/>
      <Footer />
    </>
  );
};

export default RetirementInfo;

