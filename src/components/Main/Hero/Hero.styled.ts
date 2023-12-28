import styled from '@emotion/styled';
import theme from 'theme';

export const HeroSection = styled.section`
  width: 100%;
  height: 1244px;
  overflow: hidden;
`;

export const HeadingBox = styled.div`
  position: absolute;
  top: 488px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.fontSizes.xxl};
    font-style: normal;
    font-weight: ${theme.fontWeights.regular};
    line-height: normal;
    letter-spacing: 0.4px;
    margin-bottom: 47px;
  }
`;
