import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#f9f9f9")};

  @media screen and (max-width: 2000px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    padding-right: 45px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: 50px;
  padding: 0 24px;
  justify-content: left;

  @media screen and (max-width: 480px) {
    margin-right: 50px;
  }
`;

// export const InfoRow = styled.div`
//     display: grid;
//     grid-auto-columns: minmax(auto, 1fr);
//     align-items: left;
//     grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

//     @media screen and (max-width: 768px) {
//         grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
//     }

// `;

export const TextWrapper = styled.div`
  max-width: auto;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 50px;
`;

export const Heading = styled.h1`
  margin-top: 80px;
  margin-bottom: 35px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #01bf71;
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
export const Subheading = styled.h1`
  margin-top: 80px;
  margin-bottom: 35px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #000000;
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const UnderlineHeading = styled.h1`
  margin-top: 80px;
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 1.1;
  color: #000000;
  text-decoration: underline;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const IndentUnderlineHeading = styled.h1`
  margin-top: 80px;
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 1.1;
  color: #000000;
  text-decoration: underline;
  padding-left: 20px;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 1.8px;
  color: #000000;
  margin-right: auto;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const MiniSubtitle = styled.p`
 
  font-size: 25px;
 
  letter-spacing: 1.8px;
  color: #000000;
  margin-right: auto;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Poem = styled.p`
  text-align: center;
  font-style: italic;
  font-size: 25px;
  color: #01bf71;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
export const CenterSubtitle = styled.p`
  text-align: center;
  font-size: 25px;
  color: #01bf71;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const BoldHeading = styled.h1`
  padding-top: 30px;
  font-style: bold;
  color:#000000;
`;

export const BoldList = styled.h1`
  padding-top: 30px;
  font-size: 25px;
  font-weight: 600;
  color: #000000;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const HighlightedText = styled.div`
  display: table; /* keep the background color wrapped tight */
  margin: 0px auto 0px auto; /* keep the table centered */
  padding:5px;
  background-color: #D6D6D6;
  color: #000000;
  font-size: 25px;
`;
export const IndentSubtitle = styled.p`
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 1.8px;
  color: #000000;
  margin-right: auto;
  padding-left: 20px;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const MiniText = styled.p`
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 1.8px;
  color: #000000;
  margin-right: auto;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

