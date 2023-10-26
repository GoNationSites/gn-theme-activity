import React from 'react';
import { Box, Text } from 'theme-ui';

const About = () => (
  <Box variant='about' className='about'>
    <Text as='h3' variant='about.title'>
      About us
    </Text>
    <Text as='p' variant='about.text'>
      <strong style={{ letterSpacing: '-1px', fontSize: '1.3rem' }}>
        {' '}
        Chef Ani Robaina of Ani’s Table Distinctive Food & Catering
      </strong>
      <br />
      <br />
      <strong style={{ letterSpacing: '-1px', fontSize: '1.3rem' }}>
        Takes Over DiFiore Ravioli Shop in Rocky Hill, CT
      </strong>
      <br />
      <strong style={{ letterSpacing: '-1px', fontSize: '1.3rem' }}>
        {' '}
        Ani’s Table & Marketplace Set to Open in July, 2023
      </strong>
      <br />
      <br />
      June 14, 2021, Rocky Hill, CT: An exciting culinary experience is set to
      debut in the Greater Hartford area this July with the opening of Ani’s
      Table & Marketplace. Located at 397 Cromwell Avenue in Rocky Hill, CT,
      Chef Ani Robaina has taken over the DiFiore Ravioli Shop, a beloved
      family-owned and operated Italian market for over 40 years, known for its
      homemade ravioli.
      <br />
      <br />
      In a statement released by the DiFiore Family this week, “We started
      looking for that right someone to take over the Rocky Hill store who would
      put their own specialty food business in place and continue to sell our
      DiFiore Ravioli Shop products. Chef Ani has already cemented her
      reputation as a world-class caterer across the state of Connecticut. Ani’s
      Table & Marketplace will be transitioning our well-known and loved space
      to her own.”
      <br />
      <br />
      Food enthusiasts can look forward to a welcoming market filled with Chef
      Ani’s scratch-prepared foods including a variety of sauces, seasonal soups
      and salads, Chef Ani’s signature international fare, locally sourced
      produce, and artisan products such as DiFiore Ravioli! Customers will
      enjoy the new coffee and espresso bar featuring Chef Ani’s proprietary
      coffee blends and fresh bakery items. Whether it’s breakfast on the move,
      a leisurely lunch on the patio, dinner meals to go, or the makings of a
      fabulous party, Ani’s Table & Marketplace is poised to become a culinary
      oasis within the charming Rocky Hill community. Contact Ani’s Table &
      Marketplace for all of your corporate and private catering needs or book
      an event in the marketplace for a truly unique experience.
      <br />
      <br />
      “We are thrilled to begin this next chapter of Ani’s Table and create a
      Marketplace that provides food that comforts you and perhaps makes your
      life a little easier, “says Chef Ani Robaina, “Thank you to the DiFiore
      Family for trusting us to create a fresh new culinary concept in this
      location that their family and their customers hold so dear. We can’t wait
      to show you what we have cookin’ for Ani’s Table & Marketplace.”
      <img
        style={{ width: '100%' }}
        src='https://res.cloudinary.com/gonation/image/upload/v1687286949/2._Logo_Icons_outlined.png'
      />
    </Text>
  </Box>
);

export default About;
