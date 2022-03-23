import React from "react";

import { InfoContainer, InfoWrapper, TextWrapper } from "./InfoElements";

import TextFormat from "./careertext";
import TextFormatExec from "./executivetext";
import TextFormatStaff from "./stafftext";
import TextFormatBusiness from "./businesstext";

import "./businesstext.css"

const CoachingInfoSection = ({ id }) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <TextWrapper>
            <TextFormat/>
            <div className="businesscoachinginfo" >
            <br/><br/><br/><br/>
            <TextFormatBusiness />
            </div>
            <div className="executivecoachinginfo" />
            <br/><br/><br/><br/>
            <div className="staffcoachinginfo" />
            <TextFormatExec />
            <br/><br/><br/><br/>
            <TextFormatStaff />
          </TextWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default CoachingInfoSection;
