import React from 'react'
import { jsx, Box, Image, Flex, Heading, Text, Styled, Button } from 'theme-ui'
export default function hero({ businessName, logo }) {
  return (
    <Flex
      bg='primary'
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
      }}>
      <Image
        src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${logo}`}
        sx={{
          height: '100%',
          maxHeight: '150px',
          margin: '0 auto',
        }}
      />
      <Styled.h1>{businessName}</Styled.h1>

      {/* <Button variant='secondary' sx={{ marginBottom: '75px', bg: 'red' }}>
        Order Online
      </Button> */}
    </Flex>
  )
}
