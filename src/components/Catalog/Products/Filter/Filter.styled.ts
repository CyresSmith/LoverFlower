import styled from '@emotion/styled';
import theme from 'theme';

export const FilterBox = styled.ul`
  width: 100%;
  padding: 20px 16px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  align-content: start;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export const FilterSection = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterTitle = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.56px;
  text-transform: uppercase;
`;
