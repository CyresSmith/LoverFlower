import styled from '@emotion/styled';
import { IPosition } from 'components/Shared/types';
import theme from 'theme';

export const Paragraph = styled.p`
  width: 540px;
  margin: 0 0 0 70px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.light};
  line-height: 1.3;
  letter-spacing: 0.85px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
`;

interface IItem extends IPosition {
  width: number;
}

export const Item = styled.li<IItem>`
  position: absolute;
  padding: 30px 50px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  ${({ width }) => `width: ${width}px;`};
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

  > h3 {
    max-width: 271px;
    margin-bottom: 10px;
    font-size: 30px;
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeights.bold};
    line-height: normal;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  > ul {
    margin: 0 0 24px 23px;
    list-style: disc;

    li {
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.xl};
      letter-spacing: 0.72px;
      text-transform: uppercase;
    }
  }

  > a {
    display: block;
    width: 120px;
    margin-left: auto;
  }
`;
