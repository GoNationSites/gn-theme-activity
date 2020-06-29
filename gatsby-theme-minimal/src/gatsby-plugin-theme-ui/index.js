export default {
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#3c7780',
    secondary: '#ff6347',
    light: '#FFF',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
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
      fontSize: 2,
      fontFamily: 'body',
      marginBottom: 3,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      marginBottom: '3',
    },
    light: {
      color: 'light',
      fontSize: 2,
      fontFamily: 'body',
      marginBottom: 3,
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'capitalize',
      color: 'text',
      fontSize: 3,
      marginBottom: 3,
    },
    headingLight: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'capitalize',
      color: 'light',
      fontSize: 3,
      marginBottom: 3,
    },
    h1: {
      color: 'light',
      fontFamily: 'heading',
      fontSize: 6,
    },
    h2: {
      color: 'text',
      marginTop: 0,
      fontFamily: 'heading',
      marginBottom: 3,
      fontSize: 5,
    },
  },
  styles: {
    h1: {
      color: 'light',
      fontFamily: 'heading',
      fontSize: 6,
      marginY: 3,
    },
    h2: {
      color: 'text',
      marginTop: 0,
      fontFamily: 'heading',
      marginBottom: 3,
      fontSize: 5,
    },
    a: {
      color: 'light',
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
      color: 'light',
      bg: 'primary',
      cursor: 'pointer',
      borderColor: 'primary',
      borderWidth: '1px',
      borderStyle: 'solid',
      '&:hover': {
        bg: 'light',
        color: 'text',
        borderColor: 'text',
      },
    },
    secondary: {
      color: 'light',
      bg: 'secondary',
      cursor: 'pointer',
      borderColor: 'secondary',
      borderWidth: '1px',
      borderStyle: 'solid',
      '&:hover': {
        bg: 'light',
        color: 'text',
        borderColor: 'secondary',
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'light',
      marginBottom: 1,
    },
    input: {
      borderColor: 'light',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'light',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'light',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },

  breakpoints: ['480px', '768px', '1024px', '1500px', '2000px'],
}
