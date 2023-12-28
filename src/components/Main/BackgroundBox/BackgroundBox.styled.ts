import styled from '@emotion/styled';
import backgroundImage2 from 'assets/img/3b9c2bc4fe6c0d9fe34cd09531ca99c7.png';
import backgroundImage from 'assets/img/image100.jpg';
import { IPosition } from 'components/Shared/types';
import theme from 'theme';

export const Ellipse1 = styled.div`
  width: 358.902px;
  height: 293.047px;
  border-radius: 358.902px;
  background: ${theme.colors.primary};
  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 435px;
  left: 50%;
  transform: translateX(-690px) rotate(41.599deg);
`;

export const Ellipse2 = styled.div`
  width: 472.65px;
  height: 211.054px;
  border-radius: 472.65px;
  background: ${theme.colors.accent};
  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 620px;
  left: 50%;
  transform: rotate(-43.21deg) translateX(340px);
`;

export const Ellipse3 = styled.div`
  width: 707.545px;
  height: 236.872px;
  border-radius: 707.545px;
  background: ${theme.colors.accent};
  opacity: 0.6;
  filter: blur(125px);

  position: absolute;
  top: 2370px;
  left: 50%;
  transform: rotate(32.828deg) translateX(-980px);
`;

export const Ellipse4 = styled.div`
  width: 879.44px;
  height: 211.054px;
  border-radius: 879.44px;
  background: ${theme.colors.primary};
  opacity: 0.6;
  filter: blur(125px);

  position: absolute;
  top: 1830px;
  left: 50%;
  transform: rotate(32.828deg) translateX(-80px);
`;

export const Ellipse5 = styled.div`
  width: 850px;
  height: 161.887px;
  background: ${theme.colors.primary};
  opacity: 0.6;
  filter: blur(125px);

  position: absolute;
  top: 4650px;
  left: 50%;
  transform: rotate(60.828deg) translateX(-1780px);
`;

export const Ellipse6 = styled.div`
  width: 571.277px;
  height: 196.429px;
  background: ${theme.colors.accent};
  opacity: 0.6;
  filter: blur(125px);

  position: absolute;
  top: 3250px;
  left: 50%;
  transform: rotate(25.828deg) translateX(-400px);
`;

export const Ellipse7 = styled.div`
  width: 354.93px;
  height: 364.216px;
  background: ${theme.colors.accent};
  opacity: 0.6;
  filter: blur(125px);

  position: absolute;
  top: 4280px;
  left: 50%;
  transform: rotate(25.828deg) translateX(580px);
`;

export const Ellipse8 = styled.div`
  width: 99.587px;
  height: 211.054px;
  background: ${theme.colors.primary};
  filter: blur(125px);

  position: absolute;
  top: 6620px;
  left: 50%;
  transform: rotate(21.097deg) translateX(-780px);
`;

export const Ellipse9 = styled.div`
  width: 879.44px;
  height: 211.054px;
  border-radius: 879.44px;
  background: ${theme.colors.primary};
  filter: blur(125px);

  position: absolute;
  top: 6530px;
  left: 50%;
  transform: rotate(21.097deg) translateX(-80px);
`;

export const Ellipse10 = styled.div`
  width: 354.93px;
  height: 364.216px;
  border-radius: 879.44px;
  background: ${theme.colors.accent};
  filter: blur(125px);
  opacity: 0.6;

  position: absolute;
  top: 5900px;
  left: 50%;
  transform: rotate(32.828deg) translateX(550px);
`;

export const BackgroundText = styled.span<IPosition>`
  position: absolute;
  ${({ sideX, sizeX }) => {
    switch (sideX) {
      case 'top':
        return `top: ${sizeX}px;`;
      case 'bottom':
        return `bottom: ${sizeX}px;`;
      default:
        return `top: 0;`;
    }
  }};
  ${({ sideY, sizeY }) => {
    switch (sideY) {
      case 'left':
        return `left: ${sizeY}px;`;
      case 'right':
        return `right: ${sizeY}px;`;
      default:
        return `left: 0;`;
    }
  }};
  color: #0a1717;
  font-size: ${theme.fontSizes.heading.desktop.xl};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 8px;
  text-transform: uppercase;
  animation: slide 35s ease-in-out infinite;

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-3%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;

export const BackgroundImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1440px;
  height: 1244px;
  background: no-repeat url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const BackgroundImgBox2 = styled.div`
  position: absolute;
  top: 3560px;
  left: 50%;
  transform: translateX(-915px);
  width: 600px;
  height: 845px;
  background: no-repeat url(${backgroundImage2});
  background-position: center;
  background-size: contain;
  z-index: 1;
`;

export const Bottom = styled.div`
  position: absolute;
  top: 838px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 406px;
  background: linear-gradient(180deg, rgba(4, 10, 10, 0) 0%, #000 100%);
`;
