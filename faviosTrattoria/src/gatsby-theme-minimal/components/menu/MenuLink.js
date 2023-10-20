import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

export default function MenuLink({ gonationSlug, menuOrServices }) {
  const characters = '0123456789';
  const number = (Math.random() * characters.length)
    .toString()
    .replace('.', '');

  return (
    <Box variant='menu'>
      <Link
        variant='menu.link'
        target='_blank'
        href={`https://res.cloudinary.com/gonation/image/upload/v${number}/sites/favios-trattoria/lunch-menu.pdf`}
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faMap} />
        <Text variant='menu.text'>Lunch Menu</Text>
      </Link>
      <Link
        variant='menu.link'
        target='_blank'
        href={`https://res.cloudinary.com/gonation/image/upload/v${number}/sites/favios-trattoria/dinner-menu.pdf`}
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faMap} />
        <Text variant='menu.text'>Dinner Menu</Text>
      </Link>
    </Box>
  );
}
