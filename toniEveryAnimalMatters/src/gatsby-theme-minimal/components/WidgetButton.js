import React, { useEffect } from 'react'
import { Box, Heading, Text, Button } from 'theme-ui'

export default function WidgetButton() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'https://www.convergepay.com/hosted-payments/buy_button_script/4f3262644c587937536d652b436d35675a6d4d4f6e6741414158332b52743046'
    // script.async = true;
    document.getElementById('scriptWidget').appendChild(script)

    return () => {}
  }, [])

  return (
    <Box sx={styles.container}>
      <Box sx={styles.textContent}>
        <Heading as='h1'>Make A Donation</Heading>
      </Box>
      <div id='scriptWidget'>
        <Button disabled sx={styles.buyButton}>
          Donate Now
        </Button>
      </div>
    </Box>
  )
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
}
