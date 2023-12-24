import styled from '@emotion/styled';
import theme from 'theme';

import backgroundImage from 'assets/img/image100.jpg';
import HeroImage from 'assets/img/image101.png';

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  height: 1244px;
  overflow: hidden;
`;

export const HeroBackgroundImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 1244px;
  background: no-repeat url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const HeroImgBox = styled.div`
  position: absolute;
  top: 132px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 975px;
  background: no-repeat url(${HeroImage});
  background-position: center;
  z-index: 1;
`;

export const Title = styled.h1`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  top: 93px;
  text-align: center;

  span {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.heading.desktop.xl};
    font-weight: ${theme.fontWeights.light};
    line-height: normal;
    letter-spacing: 40px;
    text-transform: uppercase;

    :first-of-type {
      display: block;
      width: 788px;
    }

    :last-of-type {
      position: relative;
      top: -85px;
      display: block;
      width: 983px;
      z-index: 2;
    }
  }
`;

export const Ellipse1 = styled.div`
  width: 358.902px;
  height: 293.047px;
  transform: rotate(41.599deg);
  border-radius: 358.902px;
  background: #249479;
  filter: blur(125px);
  position: absolute;
  top: 365px;
  left: -33px;
`;

export const Ellipse2 = styled.div`
  width: 472.65px;
  height: 211.054px;
  transform: rotate(-43.21deg);
  border-radius: 472.65px;
  background: #7d2253;
  filter: blur(125px);
  position: absolute;
  top: 236px;
  right: 15px;
`;
