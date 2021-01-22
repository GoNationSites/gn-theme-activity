import React from 'react'
import { Box, Text } from 'theme-ui'

const About = ({ description }) => (
  <Box variant='about'>
    {description && (
      <>
        <Text as='h3' variant='about.title'>
          About us
        </Text>
        <Text as='p' variant='about.text'>
          {description}
        </Text>
      </>
    )}
  </Box>
)

export default About
