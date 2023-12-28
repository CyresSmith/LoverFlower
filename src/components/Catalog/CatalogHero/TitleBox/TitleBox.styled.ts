import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div`
  position: absolute;
  left: 20px;
  bottom: 0;
  width: 920px;
  padding: 15px 20px 30px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  > p {
    color: ${theme.colors.white};
    letter-spacing: 0.56px;
    text-transform: uppercase;
    margin-left: 265px;
    width: 430px;
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.heading.desktop.l};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;

  > span {
    position: relative;
    top: -20px;
    left: 265px;
  }
`;

export const CategoriesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 59px;
`;

interface ICategory {
  selected: boolean;
}

export const Category = styled.button<ICategory>`
  display: inline-fle;
  padding: 11px 16px;
  font-size: ${theme.fontSizes.s};
  letter-spacing: 0.48px;
  text-transform: uppercase;
  border-radius: 40px;
  border: ${theme.borders.normal};
  transition: ${theme.transition.primary};
  cursor: pointer;
  ${({ selected }) =>
    `color: ${selected ? theme.colors.background : theme.colors.white};
     background-color: ${selected ? theme.colors.primary : `transparent`};
     border-color: ${selected ? theme.colors.primary : theme.colors.white};
     `}

  :hover {
    border-color: ${theme.colors.primary};
    ${({ selected }) =>
      `color: ${selected ? theme.colors.background : theme.colors.primary};
     `}
  }
`;
