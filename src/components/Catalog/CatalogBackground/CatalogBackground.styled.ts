import styled from '@emotion/styled';
import backgroundImage from 'assets/img/image128.png';
import theme from 'theme';

export const Ellipse1 = styled.div`
  width: 504.417px;
  height: 360.441px;
  border-radius: 504.417px;
  background: ${theme.colors.accent};

  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 235px;
  left: 50%;
  transform: translateX(-850px) rotate(32.828deg);
`;

export const Ellipse2 = styled.div`
  width: 392.696px;
  height: 280.609px;
  border-radius: 392.696px;
  background: ${theme.colors.accent};

  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(550px) rotate(32.828deg);
`;

export const Ellipse3 = styled.div`
  width: 434.992px;
  height: 256.066px;
  border-radius: 434.992px;
  background: ${theme.colors.accent};

  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 680px;
  left: 50%;
  transform: translateX(250px) rotate(32.828deg);
`;

export const Ellipse4 = styled.div`
  width: 504.417px;
  height: 360.441px;
  border-radius: 504.417px;
  background: ${theme.colors.accent};

  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 780px;
  left: 50%;
  transform: translateX(-850px) rotate(32.828deg);
`;

export const Ellipse5 = styled.div`
  width: 747.738px;
  height: 173.928px;
  border-radius: 747.738px;
  background: ${theme.colors.primary};

  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 1680px;
  left: 50%;
  transform: translateX(-850px) rotate(-71.859deg);
`;

export const Ellipse6 = styled.div`
  width: 99.587px;
  height: 211.054px;
  border-radius: 747.738px;
  background: ${theme.colors.primary};

  opacity: 0.6;
  filter: blur(125px);
  position: absolute;
  top: 4680px;
  left: 50%;
  transform: translateX(-850px) rotate(21.097deg);
`;

export const BackgroundImgBox = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-1038px);
  rotate: 4deg;
  width: 1073px;
  height: 717px;
  background: no-repeat url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const BackgroundImgBox2 = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(20px, 80px);
  scale: -1 -1;
  rotate: 90deg;
  width: 1073px;
  height: 717px;
  background: no-repeat url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;
