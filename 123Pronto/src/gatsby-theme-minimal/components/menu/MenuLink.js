import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

export default function MenuLink({ gonationSlug, menuOrServices }) {
  return (
    <Box
      variant='menu'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        py: '0.5rem',
        a: {
          border: 'solid 1px',
          borderRadius: '10px',
          m: '0.5rem',
        },
      }}
    >
      <Link
        variant='menu.link'
        target='_blank'
        href={
          'https://res.cloudinary.com/gonation/image/upload/v1700673958/sites/123pronto/catering_menu.pdf'
        }
        rel='noreferrer'
      >
        <Text variant='menu.text'>Catering Menu</Text>
      </Link>
      <Link
        variant='menu.link'
        target='_blank'
        href='https://res.cloudinary.com/gonation/image/upload/v1700674152/sites/123pronto/entree_list.pdf'
        rel='noreferrer'
      >
        <Text variant='menu.text'>Entree List</Text>
      </Link>
    </Box>
  );
}
