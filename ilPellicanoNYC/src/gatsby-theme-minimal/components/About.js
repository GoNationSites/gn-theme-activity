import React from 'react';
import { Box, Text, Image } from 'theme-ui';

const About = ({ description }) => (
  <Box variant='about'>
    <a href='http://Bijouxloungenyc.com'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          py: '2',
          transition: 'all ease-in-out 0.5s',
          mb: 5,
          ':hover': {
            backgroundColor: '#500f0f',
          },
        }}
      >
        <Image
          sx={{ maxWidth: '150px' }}
          src='https://res.cloudinary.com/gonation/image/upload/v1695309301/sites/il-pellicano-nyc/IMG-0269.png'
          alt='Bijoux Logo'
        />
        <Text as='p' sx={{ maxWidth: '300px', fontFamily: 'Cinzel, serif' }}>
          Located above Bijoux Lounge, the latest and most vibrant destination
          in New York City.
        </Text>
      </Box>
    </a>

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
