import React from 'react';
import { Box, Text } from 'theme-ui';

const About = ({ description }) => (
  <Box variant='about' className='about'>
    {description && (
      <>
        <Text as='h3' variant='about.title' className='about-title'>
          About us
        </Text>
        <Text as='p' variant='about.text' className='about-text'>
          {description}
        </Text>
      </>
    )}
  </Box>
);

export default About;
