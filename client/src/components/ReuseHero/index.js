import React, { useState } from "react";
import HeroImage from "../../images/coachinginfo.jpg";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./ReuseHeroElements";

const ReuseHero = () => {


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={HeroImage} type="Image.jpg" />
      </HeroBg>
      <HeroContent>
        <HeroH1>코칭</HeroH1>

      </HeroContent>
    </HeroContainer>
  );
};

export default ReuseHero;
