import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#D3D3D3')};

    @media screen and (max-width: 2000px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: 50px;
    padding: 0 24px;
    justify-content: left;
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
    padding-top: 0;
    padding-bottom: 60px;
`;


export const Heading = styled.h1`
    margin-bottom: 35px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: #000000;
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    /* white-space: pre; */
    margin-bottom: 35px;
    font-size: 25px;
    line-height: 40px;
    color: #000000;
    margin-right: auto;
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


