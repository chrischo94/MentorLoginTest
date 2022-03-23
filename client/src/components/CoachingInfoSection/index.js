import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
} from "./InfoElements";

import TextFormat from "./careertext";

const CoachingInfoSection = ({
  lightBg,
  id,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TextWrapper>
            <TextFormat />
          </TextWrapper>
        </InfoWrapper>
      </InfoContainer>
      
    </>
  );
};

export default CoachingInfoSection;
