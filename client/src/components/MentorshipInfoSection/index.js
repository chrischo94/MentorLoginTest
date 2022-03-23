import React from "react";

import { InfoContainer, InfoWrapper, TextWrapper } from "./InfoElements";

import TextFormat from "./mentorshiptext";


const MentorshipInfoSection = ({ id }) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <TextWrapper>
            <TextFormat/>
          </TextWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default MentorshipInfoSection;
