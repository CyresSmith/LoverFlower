const theme = {
  colors: {
    white: '#fff',
    black: '#000000',
    text: '#173D33',
    background: '#F3F5FA',
    accent: {
      regular: '#97D28B',
      dark: '#173D33',
      light: '#DCEFD8',
    },
    primary: {
      regular: '#BDBDBD',
      light: '#EAEDF1',
      dark: '#292D32',
    },
    danger: '#D28B8B',
  },

  fonts: {
    body: 'Fira Sans, sans-serif',
    heading: 'Oswald, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
    max: '164px',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },

  lineHeights: {
    s: 1.12,
    m: 1.25,
    l: 1.5,
  },

  mediaBreakpoints: {
    mobile: {
      media: 'screen and (360px <= width <= 767px)',
      width: '360px',
    },
    tablet: {
      media: 'screen and (768px <= width <= 1279px)',
      width: '768px',
    },
    desktop: { media: 'screen and (1280px <= width)', width: '1280px' },
  },

  borders: {
    normal: '1px solid',
  },

  radii: {
    round: '50%',
  },

  transition: {
    primary: 'all 300ms cubic-bezier(0.47,0.01,0.61,0.99)',
  },
};

export default theme;

document.body.style.fontFamily = theme.fonts.body;
document.body.style.fontSize = theme.fontSizes.s;
document.body.style.color = theme.colors.text;
document.body.style.backgroundColor = theme.colors.background;
