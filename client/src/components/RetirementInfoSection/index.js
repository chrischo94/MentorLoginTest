import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
} from "./InfoElements";

const RetirementInfoSection = ({
  lightBg,
  id,
  imgStart,
  headline,
  description,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TextWrapper>
            <Heading>커리어 코칭이란?</Heading>
            <Subtitle>
              커리어 코칭은 개인의 적성에 맞는 일을 찾을 수 있게 조언하고
              여러분의 능력과 강점을 상세히 파악하여 더 나은 진로변경을 할 수
              <br />
              있도록 목표를 정하고 실천하도록 돕는 과정을 말합니다.
              <br />
              <br />
              코치는 여러분에게 무엇을 해야 하는지에 대해 말해주지는 않지만 현재
              여러분의 상황과 목표에 대한 충분한 이해와 컨설팅 후 결정을 내릴 수
              있도록 지원하며 조직의 핵심인재로 성장할 수 있도록 도와주는
              ‘인생의 조언자’의 역할을 할 것 입니다.
            </Subtitle>
            <Heading>커리어 코칭을 통해 어떤 도움을 받을 수 있나요?</Heading>
            <Subtitle>
              커리어 코칭을 통해 얻을 수 있는 혜택은 여러 측면에서 다양하게
              있으며 이는 전적으로 여러분에게 달려 있습니다. 코치와 아래
              주제들에 대해 코칭을 받으실 수 있으며 이외 여러분이 원하시는
              주제들도 직접 정하실 수 있습니다. <br />
              <br />
              <ul>
                <li>현 직장에서의 경력 향상</li>
                <li>경력관리에 대한 이해와 그에 따른 선택사항들 검토</li>
                <li>잠재적인 장애물들을 진단해보고 극복하기</li>
                <li>본인의 능력과 경험을 활용하고 향상시키기</li>
                <li>다른 지원자들로부터 돋보이기 위한 인터뷰 코칭</li>
                <li>돋보이는 이력서 작성을 위한 지원</li>
                <li>진로 변경을 위한 지원 및 도움</li>
                <li>직장생활에서 도태되어 있는 감정으로부터 극복하기</li>
                <li>다가올 기회를 위해 자신의 위치 설정하기</li>
                <li>달성가능한 목표 및 실행 계획 수립</li>
                <li>일과 가정 사이의 균형 재조정 및 우선순위 관리</li>
                <li>장기 휴직 또는 병가 후 직장으로의 복귀</li>
              </ul>
              <br />
              커리어 코칭을 받기 위해 직장을 다니고 있어야 하는 것은 아닙니다.
              여러분은 어쩌면 오랜 기간 교육을 받은 후, 어느 방향으로 <br />
              나아가야 할지 모르는 대학 중퇴자나 졸업생 일 수도 있습니다. 특정
              전공에 몰두하느라 수년간의 시간을 보냈지만 그것이 더 이상
              <br /> 자신이 추구하지 않는 방향이라는 것을 늦게 깨닫게 될 수도
              있습니다. <br />
              <br /> 무엇을 진정으로 원하는지 몰라도 괜찮습니다, 지극히 정상적인
              일입니다. 그럼에도 불구하고 선택할 수 여지가 있다는 것을 잊지{" "}
              <br /> 말아야 합니다. 커리어 코칭은 여러분이 가지고 있는 능력을
              인지하고, 어떤 직업에 관심이 있고, 또한 이러한 목표를 달성하는데
              <br /> 도움을 드릴 수 있습니다.
            </Subtitle>
          </TextWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default RetirementInfoSection;
