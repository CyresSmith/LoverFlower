import styled from '@emotion/styled';
import theme from 'theme';

export const ProductsBox = styled.div`
  margin-top: 30px;
`;

export const CategoryPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 20px;
  gap: 30px;
`;

export const SelectedCategories = styled.ul`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Category = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${theme.colors.primary};
  fill: ${theme.colors.primary};

  :hover {
    color: ${theme.colors.white};
    fill: ${theme.colors.white};
  }

  > span {
    color: inherit;
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: 0.56px;
    text-transform: uppercase;
    transition: ${theme.transition.primary};
  }

  > svg {
    width: 14px;
    height: 14px;
    fill: inherit;
    transition: ${theme.transition.primary};
  }
`;

export const SelectBox = styled.div`
  width: 100%;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 60px;
  column-gap: 30px;
  margin-bottom: 200px;
`;

export const ProductsList = styled.ul`
  grid-column-start: 2;
  grid-column-end: 5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 60px;
  position: relative;
`;
