import React from "react";

import { InfoContainer, InfoWrapper, TextWrapper } from "./InfoElements";

import TextFormat from "./leadershiptext";


const LeadershipInfoSection = ({ id }) => {
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

export default LeadershipInfoSection;
