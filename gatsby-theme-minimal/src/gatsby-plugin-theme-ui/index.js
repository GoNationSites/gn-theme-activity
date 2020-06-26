export default {
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#3c7780',
    secondary: '#ff6347',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Lato, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    default: {
      color: 'text',
      fontSize: 3,
      fontFamily: 'body',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'text',
      marginBottom: '2',
    },
  },
  styles: {
    h1: {
      color: 'white',
      fontFamily: 'heading',
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      marginTop: [0],
      marginBottom: [2],
    },
    a: {
      color: 'unset',
      marginTop: 1,
      marginBottom: 1,
      display: 'inline-block',
      textDecoration: 'none',
    },
    p: {},
  },
  buttons: {
    primary: {
      // you can reference other values defined in the theme
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  breakpoints: ['480px', '768px', '1024px', '1500px', '2000px'],
}
