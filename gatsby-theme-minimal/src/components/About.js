/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'

const About = ({ gonationID, description, logo }) => {
  return (
    <Box>
      <Flex sx={{ boxShadow: '0 0 12px rgba(0,0,0,.3)', padding: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Heading as='h2'>About us</Heading>
          <Text>{description}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default About
