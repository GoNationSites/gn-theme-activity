import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

export default function MenuLink({ gonationSlug, menuOrServices }) {
  return (
    <>
      <Box variant='menu' className='menu'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Link
            variant='menu.link'
            target='_blank'
            href={
              'https://res.cloudinary.com/gonation/image/upload/v1698957223/sites/bula-bbq/image.pdf'
            }
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faMap} />
            <Text variant='menu.text'>View Menu</Text>
          </Link>
        </Box>
      </Box>
    </>
  );
}
