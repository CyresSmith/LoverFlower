import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import theme from 'theme';

export const Section = styled.section`
  padding: 100px 0;
  position: relative;
  max-width: 1440px;
  min-height: 900px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;
  position: relative;

  @media ${theme.mediaBreakpoints.mobile.media} {
    width: ${theme.mediaBreakpoints.mobile.width};
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: ${theme.mediaBreakpoints.tablet.width};
    padding: 0 20px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: ${theme.mediaBreakpoints.desktop.width};
    padding: 0 20px;
  }
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.heading.desktop.l};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.accent};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 1.2px;
  text-decoration-line: underline;
  text-transform: uppercase;
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.white};
  }
`;

// export const Backdrop = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: rgba(23, 61, 51, 0.25);
//   backdrop-filter: blur(2px);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 10;
//   opacity: ${p => (p.isMenuOpen ? '1' : '0')};
//   transition: ${theme.transition.primary};
//   transition-property: opacity, visibility;
//   visibility: ${p => (p.isMenuOpen ? 'visible' : 'hidden')};
// `;
