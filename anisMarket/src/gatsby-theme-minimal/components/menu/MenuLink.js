import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

export default function MenuLink({ gonationSlug, menuOrServices }) {
  return (
    <Box variant='menu' className='menu'>
      <Link
        variant='menu.link'
        target='_blank'
        href={
          'https://res.cloudinary.com/gonation/image/upload/v1698330378/sites/anis-table/ATM_THANKSGIVING_MENU_2023.pdf'
        }
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faMap} />
        <Text variant='menu.text'>Thanksgiving Menu</Text>
      </Link>
    </Box>
  );
}
