import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import theme from 'theme';
import { ICard } from './Card';

export const CardBox = styled.div`
  position: relative;
  width: 100%;
`;

export const LinkBox = styled(Link)`
  :hover {
    img {
      transform: scale(1.05);
    }
  }
`;

interface IBadge {
  type: 'new' | 'sale' | null;
}

export const Badge = styled.div<IBadge>`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  ${({ type }) => {
    switch (type) {
      case 'new':
        return `background-color: ${theme.colors.accent}`;
      case 'sale':
        return `background-color: ${theme.colors.success}`;
      default:
        return `top: 0;`;
    }
  }};

  > span {
    color: ${theme.colors.background};
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeights.light};
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }
`;

export const ImageBox = styled.div<ICard>`
  position: relative;
  width: 100%;
  ${({ big }) => `height: ${big ? `450` : `355`}px;`}
  margin-bottom: 10px;
  overflow: hidden;

  > img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${theme.transition.primary};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(211, 211, 211, 0.5);
`;

export const CardTitle = styled.h5`
  height: 30px;
  width: 100%;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.regular};
  letter-spacing: 0.8px;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.56px;
  text-transform: uppercase;
  margin-bottom: 20px;

  > span {
    color: #939393;
    font-weight: ${theme.fontWeights.light};
    text-decoration: line-through;
    margin-left: 10px;
  }
`;
