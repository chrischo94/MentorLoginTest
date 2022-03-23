import React from "react";
import HeroImage from "../../images/coachinginfo.jpg";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from "./ReuseHeroElements";

const ReuseHero = () => {


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={HeroImage} type="Image.jpg" />
      </HeroBg>
      <HeroContent>
        <HeroH1>SigniCoach</HeroH1>

      </HeroContent>
    </HeroContainer>
  );
};

export default ReuseHero;
