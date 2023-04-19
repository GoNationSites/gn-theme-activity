import React, { useEffect } from 'react';
import { Box, Heading, Text, Button } from 'theme-ui';

export default function WidgetButton() {
  return (
    <Box sx={styles.container}>
      <a
        href="https://res.cloudinary.com/gonation/image/upload/v1681824786/sites/taste-of-tijuana/taste_of_tijuana.pdf"
        target="_blank"
      >
        Menu asdfasd
      </a>
    </Box>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '0.5rem',
    borderRadius: '10px',
    border: 'solid 1px #EEEEEE',
    // minHeight: '85vh',
    padding: '2rem',
    width: 'calc(100% - 1rem)',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    h1: {
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: ['2.5rem', '', '3rem'],
      marginBottom: '1rem',
    },
    h3: {
      marginBottom: '1rem',
    },
    p: {
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
  },
  buyButton: {
    padding: '1rem 2rem',
    backgroundColor: 'secondary',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
};
