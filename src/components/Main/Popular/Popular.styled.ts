import styled from '@emotion/styled';
import theme from 'theme';

export const SectionTitle = styled.h2`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.heading.desktop.l};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;

  > span {
    margin-left: 380px;
    position: relative;
    top: -20px;
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: 0.4px;
  text-align: center;
  margin-bottom: 86px;
`;
