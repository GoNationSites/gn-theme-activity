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
    <Box
      variant='menu'
      sx={{
        a: {
          border: 'solid 1px',
          borderColor: 'primary',
          borderRadius: '20px',
          margin: '0.25rem',
        },
      }}
    >
      <Link
        variant='menu.link'
        target='_blank'
        href={`https://res.cloudinary.com/gonation/image/upload/v${number}/sites/papas-place/menu.pdf`}
        rel='noreferrer'
      >
        <Text variant='menu.text'>Menu</Text>
      </Link>
    </Box>
  );
}
