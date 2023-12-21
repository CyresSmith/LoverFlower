import styled from '@emotion/styled';
import theme from 'theme';

export const Section = styled.section`
  padding: 100px 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;

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
