const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    text: '#fff',
    background: '#000',
    primary: '#43FFD2',
    secondary: '#7D2253',
    accent: '#D978AC',
    danger: '#FF3A44',
    success: '#31985A',
  },

  fonts: {
    body: 'Oswald, sans-serif',
    heading: 'Cormorant, serif',
  },

  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '20px',

    heading: {
      desktop: {
        s: '40px',
        m: '60px',
        l: '100px',
        xl: '200px',
      },
      mobile: {
        s: '20px',
        m: '40px',
        l: '50px',
      },
    },
  },

  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },

  lineHeights: {
    m: 1.3,
  },

  mediaBreakpoints: {
    mobile: {
      media: 'screen and (320px <= width <= 767px)',
      width: '320px',
    },
    tablet: {
      media: 'screen and (768px <= width <= 1149px)',
      width: '768px',
    },
    desktop: { media: 'screen and (1150px <= width)', width: '1150px' },
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
document.body.style.fontSize = theme.fontSizes.m;
document.body.style.color = theme.colors.text;
document.body.style.backgroundColor = theme.colors.background;
