/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Box, Text, Styled } from 'theme-ui'

const About = ({ description }) => (
  <Box sx={{ marginBottom: 4 }}>
    <Text variant='sectionHeading'>About us</Text>
    <Text
      variant='default'
      sx={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      {description}
    </Text>
  </Box>
)

export default About
