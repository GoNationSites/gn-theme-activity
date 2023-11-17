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
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        a: {
          height: 'auto',
        },
        width: '100%',
      }}
    >
      <Link
        variant='menu.link'
        target='_blank'
        href={`https://res.cloudinary.com/gonation/image/upload/v1700237838/sites/antonio-italian-bistro/menu.pdf`}
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faMap} />
        <Text variant='menu.text'>
          See Our {menuOrServices ? menuOrServices : 'Menu'}
        </Text>
      </Link>
      <Link
        variant='menu.link'
        target='_blank'
        href={`https://tables.toasttab.com/restaurants/d47d60d0-237b-4dd5-94a4-38eee906a089/findTime `}
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faMap} />
        <Text variant='menu.text'>Reservations</Text>
      </Link>
    </Box>
  );
}
