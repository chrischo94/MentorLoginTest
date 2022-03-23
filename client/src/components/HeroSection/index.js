import React, { useState } from "react";
import HeroImage from "../../images/homepage.jpg";
import { Button, ButtonRoute } from "../ButtonElements";
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
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={HeroImage} type="Image.jpg" />
      </HeroBg>
      <HeroContent>
        <HeroH1>오늘 부터 멘토 찼아 보새요!</HeroH1>
        <HeroP>
          몇 질문만 대답하시면, 멘토랑 메칭 해드리겠습니다
        </HeroP>
        <HeroBtnWrapper>
          <ButtonRoute
            to="/Mentors"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            시작 {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonRoute>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
