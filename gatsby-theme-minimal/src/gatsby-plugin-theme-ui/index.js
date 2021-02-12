import colors from './colors'

export default {
  // ======== base styles ========
  colors: {
    ...colors,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['480px', '768px', '1024px', '1500px', '2000px'],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Lato, sans-serif',
    monospace: 'Menlo, monospace',
    /* fontOptions 
    /* font-family: 'Roboto', sans-serif;
    /* font-family: 'Lato', sans-serif;
    /* font-family: 'Merriweather', serif; 
    /* font-family: 'Playfair Display', serif; 
    */
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
      textAlign: 'center',
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
      textAlign: 'center',
    },
    h2: {
      color: 'text',
      marginTop: 0,
      fontFamily: 'heading',
      marginBottom: 3,
      fontSize: 5,
      textAlign: 'center',
    },
    businessHeading: {
      color: 'light',
      fontFamily: 'heading',
      fontSize: 6,
      textAlign: 'center',
    },
    sectionHeading: {
      textAlign: 'center',
      fontSize: '2rem',
      textTransform: 'uppercase',
      // borderBottom: '2px solid',
      borderColor: 'text',
      margin: '0rem auto 1rem',
      width: 'fit-content',
    },
  },

  boxStyles: {
    shadowBox: {
      boxShadow: ['', '', '', '1px 0 7px rgba(0,0,0,.2)'],
      borderRadius: ['', '', '', '10px'],
    },
    borderBox: {
      border: 'solid 1px #EEEEEE',
    },
  },

  styles: {
    root: {
      fontFamily: 'body',
      backgroundColor: ['', '', '', '#f7f7f7'],
      h1: {
        color: 'light',
        fontFamily: 'heading',
        fontSize: 6,
        marginY: 3,
        textAlign: 'center',
      },
      h2: {
        color: 'text',
        marginTop: 0,
        fontFamily: 'heading',
        marginBottom: 3,
        fontSize: [5, 5, 6],
        textAlign: 'center',
      },
      h3: {
        color: 'text',
        marginTop: 0,
        fontFamily: 'heading',
        marginBottom: 3,
        fontSize: [5, 5, 6],
        textAlign: 'center',
      },
      h4: {
        color: 'text',
        marginTop: 0,
        fontFamily: 'heading',
        marginBottom: 3,
        textAlign: 'center',
      },
      a: {
        color: 'text',
        textDecoration: 'none',
      },
    },
    spinner: {
      color: 'primary',
    },
  },

  // button styles
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
        filter: 'brightness(75%)',
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
        filter: 'brightness(75%)',
        borderColor: 'secondary',
      },
    },
  },

  // ? ============================
  // ? =====  custom styling  =====
  // ? ============================

  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  // ? ===================
  // ? ===== Layout ======
  // ? ===================

  // high level styles
  pageContainer: {
    display: 'flex',
    flexDirection: ['column', '', '', 'row'],
  },

  column1: {
    width: ['', '', '', '20%'],
    position: ['', '', '', 'fixed'],
    // borderRight: ['', '', '', '1px solid black'],
    boxShadow: ['', '', '', '1px 0 7px rgba(0,0,0,.2)'],
    height: ['', '', '', '100vh'],
    textAlign: ['', '', '', 'center'],
    display: ['', '', '', 'flex'],
    flexDirection: ['', '', '', 'column'],
    justifyContent: 'space-between',
    backgroundColor: ['', '', '', 'white'],
  },

  column2: {
    display: ['', '', '', 'flex'],
    flexWrap: 'wrap',
    width: ['', '', '', '80%'],
    padding: ['', '', '', '0rem', '0rem'],
    marginLeft: ['', '', '', '20%'],
    boxesContainers: {
      display: ['', '', '', 'flex'],
      flexWrap: 'wrap',
      backgroundColor: ['background', '', '', 'transparent'],
      position: ['absolute', '', '', 'static'],
      width: '100%',
    },
  },

  // ? =================
  // ? ===== Logo ======
  // ? =================

  logo: {
    logo: {
      position: ['fixed', '', '', 'static'],
      height: ['100%', '', '', 'unset'],
      maxHeight: ['150px', '', '', 'unset'],
      margin: ['0 auto', '', '', '5rem 0rem 0'],
      left: '50%',
      top: '20%',
      transform: ['translate(-50%,-50%)', '', '', 'none'],
      transition: 'all ease-in-out 0.2s',
      zIndex: '0',
    },
    logoScrolled: {
      variant: 'logo.logo',
      position: ['fixed', '', '', 'static'],
      height: ['100%', '', '', 'unset'],
      maxHeight: ['150px', '', '', 'unset'],
      margin: ['0 auto', '', '', '5rem 0rem 0'],
      transform: ['translate(-50%,-50%)', '', '', 'none'],
      // top: '0%',
      // maxHeight: ['75px', '', '', '150px'],
      // display: ['none', '', '', 'block'],
    },
  },

  // ? =================
  // ? ===== Cover =====
  // ? =================

  cover: {
    backgroundSize: 'cover',
    backgroundAttachment: ['initial', '', '', 'unset'],
    backgroundPosition: 'center center',
    backgroundRepeat: ' no-repeat',
    height: ['100vh', '', '', '60vh'],
    width: ['100%', '', '', ''],
  },

  // ? =================
  // ? ===== Shout =====
  // ? =================

  shout: {
    container: {
      // boxShadow: ['', '', '', '1px 0 7px rgba(0,0,0,.2)'],
      border: ['', '', '', 'solid 1px #EEEEEE'],
      borderRadius: ['', '', '', '10px'],
      width: ['100%', '', '', 'calc(50% - 1rem)'],
      position: ['absolute', '', '', 'static'],
      transform: ['translateY(-100%)', '', '', 'unset'],
      bg: ['secondary', '', '', 'white'],
      margin: ['-50px auto 20px', '', '', '0.5rem'],
      padding: 3,
      transition: 'all ease-in-out 0.2s',
    },
    containerScrolled: {
      variant: 'shout.container',
      margin: '0px',
    },
    innerContainer: {
      alignItems: 'stretch',
      height: '100%',
    },
    imageContainer: {
      display: 'flex',
      width: '40%',
      height: ['130px', '', '', 'auto'],
    },
    shoutImage: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: '5px',
    },
    content: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: ['0rem 0.75rem', '', '', '2rem 1rem 2rem 2rem'],
    },

    title: {
      variant: 'text.headingLight',
      fontSize: '16px',
      color: ['light', '', '', 'text'],
    },

    text: {
      variant: 'text.headingLight',
      color: ['light', '', '', 'text'],
      fontSize: ['18px', '', '', '1.5rem'],
      fontWeight: '400',
      lineHeight: '1.3',
    },
  },

  // ? ===============================
  // ? ===== Contact Information =====
  // ? ===============================

  contactInfo: {
    padding: '2rem 1rem',
    title: {
      variant: 'text.sectionHeading',
      fontSize: ['1.5rem', '', '', '1.5rem'],
      textAlign: ['center', '', '', 'left'],
      margin: ['0 auto 1rem', '', '', '1rem 0rem'],
      fontWeight: '500',
      display: ['', '', '', 'none'],
    },
  },

  // ? ===============================
  // ? ===== Business Name/Title =====
  // ? ===============================

  businessName: {
    variant: 'text.headingLight',
    position: 'absolute',
    top: '50%',
    textAlign: 'center',
    width: '100%',
    padding: '1rem',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    textTransform: 'uppercase',
  },

  // ? ===========================
  // ? ===== Contact Details =====
  // ? ===========================

  contactDetails: {
    padding: ['1rem', '', '', '1rem 0rem'],
    fontSize: ['1.5rem', '', '', '1.2rem', '1.3rem'],
    textAlign: ['center', '', '', 'left'],
    borderBottom: ['', '', '', '2px solid #EEEEEE'],
    marginBottom: ['', '', '', '1rem'],
    phone: {
      svg: {
        marginRight: '0.5rem',
        fontSize: '1.4rem',
      },
      marginBottom: '1rem',
    },
    directions: {
      a: {
        display: ['inline', '', '', 'flex'],
        flexWrap: 'nowrap',
        justifyContent: ['center', '', '', 'flex-start'],
        alignItems: 'baseline',
        lineHeight: '1.7',
        flexDirection: 'row',
      },
      svg: {
        marginRight: '0.75rem',
        fontSize: '1.5rem',
      },
      div: { display: ['inline', '', '', 'flex'] },
    },
  },

  // ? ===========================
  // ? ====== Social Icons =======
  // ? ===========================

  socialIcons: {
    display: 'flex',
    flexDirection: ['row', '', '', 'column'],
    flexWrap: 'wrap',
    justifyContent: 'center',
    link: {
      textDecoration: 'none',
      textAlign: 'center',
      margin: '0.5rem',
      display: ['', '', '', 'flex'],
      alignItems: 'center',
      svg: {
        path: {
          fill: 'secondary',
        },
      },
    },
    text: {
      marginLeft: ['', '', '', '0.5rem'],
      color: 'text',
      textDecoration: 'none',
    },
  },

  // ? ===========================
  // ? ====== Contact Form =======
  // ? ===========================

  // form styles
  contactForm: {
    flexGrow: '1',
    backgroundColor: ['', '', '', 'white'],
    flexDirection: 'column',
    padding: '2rem 1rem 2rem',
    width: ['calc(100% - 1rem)', 'calc(75% - 1rem)', 'calc(50% - 1rem)'],
    border: ['', '', '', 'solid 1px #EEEEEE'],
    borderRadius: ['', '', '', '10px'],
    margin: ['0 auto', '', '', '0.5rem'],

    title: {
      fontWeight: '500',
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      textAlign: 'center',
      // borderBottom: '2px solid',
      width: 'fit-content',
      margin: '0 auto 1.5rem',
    },

    label: {
      fontSize: 1,
      fontWeight: 'bold',
      fontFamily: 'heading',
      color: 'text',
      marginBottom: 1,
    },

    input: {
      borderColor: '#c4c4c4',
      padding: '1rem 1.5rem',
      maxWidth: '400px',
      margin: '0rem auto 1rem',
      borderRadius: ['', '', '', '12px'],
      '::placeholder': {
        fontSize: '1rem',
        fontFamily: 'Roboto',
      },
    },
    select: {
      borderColor: 'text',
    },
    textarea: {
      borderColor: '#c4c4c4',
      resize: 'vertical',
      padding: '1rem 1.5rem',
      maxWidth: '400px',
      margin: '0rem auto 1rem',
      borderRadius: ['', '', '', '12px'],
      '::placeholder': {
        fontSize: '0.8rem',
        fontFamily: 'Roboto',
      },
    },
    slider: {
      bg: 'muted',
    },
  },

  // ? ===========================
  // ? ========= Hours ===========
  // ? ===========================

  hours: {
    container: {
      backgroundColor: ['', '', '', 'white'],
      border: ['', '', '', 'solid 1px #EEEEEE'],
      borderRadius: ['', '', '', '10px'],
      flexDirection: 'column',
      flexGrow: '1',
      width: ['calc(100% - 1rem)', 'calc(75% - 1rem)', 'calc(50% - 1rem)'],
      padding: [2, 2, 2, 4],
      // border: ['', '', '', 'solid 1px black'],
      margin: ['0 auto', '', '', '0.5rem'],
    },
    title: {
      variant: 'text.sectionHeading',
      fontSize: '1.5rem',
      fontWeight: '500',
    },
    hoursContainer: {
      flexDirection: ['column'],
      justifyContent: 'space-between',
      maxWidth: '410px',
      margin: '1.5rem auto 0rem',
    },
    dayContainer: {
      textAlign: ['left', 'left', 'left'],
      marginBottom: 2,
      display: 'flex',
      flexWrap: 'wrap',
    },
    dayOfTheWeek: {
      marginBottom: 1,
      textTransform: 'uppercase',
      fontSize: 2,
    },

    timeBlocksContainer: {},
    timeBlock: {
      width: '100%',
      flexDirection: ['row', 'row', 'row'],
      marginBottom: 0,
    },

    timeBlockLabel: {
      flexGrow: '1',
      marginBottom: 0,
      fontSize: 1,
    },
    time: {
      textAlign: 'right',
      marginBottom: 0,
      fontSize: 1,
    },
    closed: {
      width: 'unset',
      flexGrow: '1',
      marginBottom: 0,
      fontSize: 1,
      textAlign: 'right',
    },
    open24: {
      flexGrow: '1',
      marginBottom: 0,
      fontSize: 1,
      textAlign: 'right',
    },
  },

  // ? ====================================
  // ? ====== Menu and Online Order =======
  // ? ====================================

  contentBoxesLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: ['100%', '', '', '50%'],
    padding: ['2rem 1rem', '', '', '0rem'],
    svg: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    a: {
      padding: '1rem',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '1.5rem',
      backgroundColor: ['', '', '', 'white'],
      ':hover': {
        bg: 'secondary',
        color: 'light',
        borderRadius: ['', '', '', '10px'],
      },
    },
  },

  onlineOrder: {
    width: 'calc(50% - 1rem)',
    border: ['', '', '', 'solid 1px #EEEEEE'],
    borderRadius: ['', '', '', '10px'],
    margin: '0.5rem',
    flexGrow: '1',
  },

  menu: {
    width: 'calc(50% - 1rem)',
    // border: 'solid 1px black',
    border: ['', '', '', 'solid 1px #EEEEEE'],
    borderRadius: ['', '', '', '10px'],
    margin: '0.5rem',
    flexGrow: '1',
  },

  // ? ===========================
  // ? ========== About ==========
  // ? ===========================

  about: {
    backgroundColor: ['', '', '', 'white'],
    order: ['', '', '', ''],
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: ['991px', '', '', 'unset'],
    margin: ['0 auto', '', '', '0.5rem'],
    padding: '2rem 1rem 2rem',
    border: ['', '', '', 'solid 1px #EEEEEE'],
    borderRadius: ['', '', '', '10px'],
    width: ['100%', '', '', 'calc(50% - 1rem)'],
    title: {
      variant: 'text.sectionHeading',
      fontSize: '1.5rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
    },
    text: {
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      whiteSpace: 'pre-wrap',
      padding: '1rem',
      lineHeight: '1.5',
      fontSize: '18px',
      opacity: '0.9',
    },
  },

  // ? ===========================
  // ? ======= CTA Widget ========
  // ? ===========================

  CTAContainer: {
    display: ['', '', '', 'none'],
    position: 'fixed',
    flexWrap: 'wrap',
    bottom: '0',
    left: '0',
    width: '100%',
    bg: 'primary',
    alignItems: 'stretch',
    borderTop: '1px solid white',
    svg: {
      marginRight: '0.5rem',
    },
    phone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'primary',
      width: '50%',
      color: 'light',
      textAlign: 'center',
      padding: 3,
      borderRight: 'solid 1px white',
      flexGrow: '1',
    },
    directions: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'primary',
      width: '50%',
      padding: 3,
      color: 'light',
      textAlign: 'center',
      flexGrow: '1',
    },
    order: {
      width: '100%',
      margin: 0,
      padding: '1rem',
      textAlign: 'center',
      color: 'light',
      background: 'primary',
      borderTop: '1px solid white',
      borderRadius: 0,
      flexGrow: '1',
    },
    CTAText: {},
  },

  // ? ===========================
  // ? ========= Footer ==========
  // ? ===========================

  // Footer Styles

  footer: {
    order: '9',
    backgroundColor: '#737373',
    padding: ['20px 1rem 120px', '', '', '1rem'],
    flexDirection: ['column', 'column', 'row'],
    alignItems: 'center',
    marginTop: '1rem',
    width: '100%',

    heading: {
      marginTop: 0,
      fontFamily: 'heading',
      marginBottom: 3,
      fontSize: 5,
      color: 'light',
      textAlign: ['center', 'center', 'left'],
    },
  },
}

// ! ===========================
// ! ===== Archived Styles =====
// ! ===========================

// // HERO Styles
// hero: {
//   container: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '60vh',
//     bg: 'primary',
//   },
// },
// // Gallery Styles
// gallery: {
//   albumsContainer: {
//     width: '100%',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   albumsCTA: {
//     width: ['100%', '48%', '24%'],
//     margin: [0, '1%'],
//     marginBottom: ['1%'],
//     height: '300px',
//     cursor: 'pointer',
//     backgroundSize: 'cover',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   albumTitle: {
//     color: 'white',
//     textShadow: '2px 2px black',
//     fontSize: 5,
//   },
//   albumContainer: {
//     flexWrap: 'wrap',
//     alignItems: 'stretch',
//     margin: '1rem auto',
//     justifyContent: 'center',
//   },
//   albumImage: {
//     width: ['50%', '33%', '25%', '20%'],
//     objectFit: 'cover',
//     height: '200px',
//     padding: 1,
//   },
// },

// // Events Styles

// event: {
//   eventsContainer: {
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   },
//   eventItemContainer: {
//     margin: ['1%'],
//     width: ['48%', '31%', '23%', '18%'],
//     flexDirection: 'column',
//   },
//   eventItemImage: {
//     minHeight: '250px',
//     maxHeight: '300px',
//     objectFit: 'cover',
//   },
//   eventItemContent: {
//     flexGrow: '1',
//     paddingTop: 2,
//     paddingBottom: 2,
//     flexDirection: ['column', 'row'],
//   },
//   eventItemTitle: {
//     fontSize: 3,
//     textTransform: 'capitalize',
//     textAlign: 'left',
//     fontWeight: 'bolder',
//     fontFamily: 'heading',
//   },
//   eventItemDateContainer: {
//     textAlign: ['left', 'center'],
//     maxWidth: '50px',
//     maxHeight: '50px',
//     minWidth: 'unset',
//     marginRight: [0, 1],
//   },
//   eventDate: {
//     fontSize: 3,
//     color: 'primary',
//     fontWeight: 'bolder',
//     width: '100%',
//     marginBottom: 0,
//     fontFamily: 'body',
//   },
//   eventMonth: {
//     textTransform: 'uppercase',
//     marginBottom: 0,
//     width: '100%',
//     fontFamily: 'body',
//   },
//   modalContainer: {
//     position: 'fixed',
//     top: '0',
//     bottom: '0',
//     left: '0',
//     right: '0',
//   },
//   modalBackground: {
//     position: 'absolute',
//     top: '0',
//     bottom: '0',
//     left: '0',
//     right: '0',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modal: {
//     padding: 0,
//     maxWidth: '767px',
//     zIndex: '1000',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%,-50%)',
//     color: 'black',
//     backgroundColor: 'primary',
//     minWidth: '280px',
//     border: 'solid 6px white',
//   },
//   modalImage: {
//     maxHeight: ['175px', '250px', '500px'],
//     width: '100%',
//     objectFit: 'cover',
//   },

//   modalContentContainer: {
//     padding: 3,
//     color: 'white',
//   },

//   modalEventName: {
//     fontFamily: 'heading',
//     fontWeight: 'heading',
//     lineHeight: 'heading',
//     textTransform: 'capitalize',
//     color: 'text',
//     fontSize: 3,
//     marginBottom: 3,
//     color: 'white',
//     textAlign: 'left',
//   },
//   modalEventDate: {
//     alignItems: 'center',
//     marginBottom: 3,
//   },
// },

// // Menu Styles
// menu: {
//   container: { border: '2px solid black', padding: [2, 3] },
//   sectionTitle: {
//     color: 'primary',
//     marginTop: 0,
//     fontFamily: 'heading',
//     marginBottom: 3,
//     fontSize: [5, 5, 6],
//     textAlign: 'center',
//   },
//   sectionDescription: {
//     textAlign: 'center',
//     fontFamily: 'heading',
//     maxWidth: '500px',
//     margin: '1.75rem auto',
//     fontWeight: 'bold',
//   },
//   sectionContainer: {
//     alignItems: 'stretch',
//     flexWrap: 'wrap',
//   },
//   menuItemContainer: {
//     width: ['100%', '100%', '50%'],
//     marginBottom: 3,
//   },
//   menuItemInnerContainer: {
//     marginBottom: 3,
//     height: '100%',
//   },
//   menuItemImage: {
//     maxWidth: '30%',
//     objectFit: 'cover',
//   },
//   menuItemDefaultImage: {
//     maxWidth: '30%',
//     objectFit: 'contain',
//     objectPosition: 'top',
//   },
//   menuItemContentContainer: {
//     padding: 2,
//     flexGrow: '1',
//   },
//   menuPriceContainer: {
//     flexGrow: '1',
//     marginLeft: 3,
//     marginBottom: 2,
//   },

//   headingMenuSection: {
//     textAlign: 'center',
//     fontSize: 5,
//     fontFamily: 'heading',
//     fontWeight: 'bolder',
//     marginBottom: 4,
//   },
//   menuItemName: {
//     fontSize: 3,
//     fontFamily: 'heading',
//     fontWeight: 'bolder',
//     marginBottom: 2,
//   },
//   menuItemDescription: {
//     fontSize: 2,
//     marginBottom: 3,
//     fontFamily: 'heading',
//   },

//   menuItemPriceLabel: {
//     fontSize: 2,
//     fontFamily: 'heading',
//   },
//   menuItemPrice: {
//     fontSize: 3,
//     fontFamily: 'heading',
//     fontWeight: 'bolder',
//     color: 'primary',
//     flexGrow: '1',
//     textAlign: 'right',
//   },
//   menuItemPriceVariants: {
//     fontSize: 2,
//     fontFamily: 'heading',
//     fontWeight: 'bolder',
//     color: 'primary',
//   },
// },

// Hours

// hours: {
//   container: {
//     flexDirection: 'column',
//     color: 'white',
//     fontFamily: 'heading',
//     flexGrow: '1',
//     width: '100%',
//     maxWidth: '400px',
//     padding: [2, 2, 2, 4],
//   },

//   labelHeading: {
//     fontFamily: 'heading',
//     fontWeight: 'heading',
//     fontSize: 3,
//     marginBottom: 3,
//     marginBottom: 1,
//     textTransform: 'uppercase',
//     fontSize: 2,
//   },
//   hoursEntry: {
//     width: '100%',
//     flexDirection: ['row', 'row', 'row'],
//     marginBottom: 0,
//   },
//   dayLabel: {
//     flexGrow: '1',
//     marginBottom: 0,
//     fontSize: 1,
//     textTransform: 'uppercase',
//   },
//   timeLabel: {
//     textAlign: 'right',
//     marginBottom: 0,
//     fontSize: 1,
//   },
// },
