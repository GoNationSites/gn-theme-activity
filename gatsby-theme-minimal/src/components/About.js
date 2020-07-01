/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Box, Flex, Text, Styled } from 'theme-ui'

const About = ({ gonationID, description, logo }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Flex>
        <Box sx={{ flex: 1 }}>
          <Styled.h2>About us</Styled.h2>
          <Text variant='default'>{description}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default About
