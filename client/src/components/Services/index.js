import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesBtnLink,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>커리어, 임원 와 직원 링크</ServicesH1>
      <ServicesWrapper>
        <ServicesBtnLink to="careercoachinginfo">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>커리어 코칭</ServicesH2>
          </ServicesCard>
        </ServicesBtnLink>
        <ServicesBtnLink to="executivecoachinginfo">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>임원 코칭</ServicesH2>
          </ServicesCard>
        </ServicesBtnLink>
        <ServicesBtnLink to="staffcoachinginfo">
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>직원 코칭</ServicesH2>
          </ServicesCard>
        </ServicesBtnLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
