/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'

const About = ({ gonationID, description, logo }) => {

  return (
    <Box p={3} bg='background'>

        <Flex sx={{ boxShadow: '0 0 12px rgba(0,0,0,.3)', padding: 3 }}>
          <Box
            sx={{
              width: '100%',
            }}>
            <Image
              src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${logo}`}
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
  
        </Flex>
        <Flex sx={{ boxShadow: '0 0 12px rgba(0,0,0,.3)', padding: 3 }}>
        <Box sx={{ flex: 1, paddingX: 2 }}>
            <Heading as='h2'>About us</Heading>
            <Text>{description}</Text>
          </Box>
          </Flex>
    </Box>
  )
}

export default About
