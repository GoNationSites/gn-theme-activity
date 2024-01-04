import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

export default function MenuLink({ gonationSlug, menuOrServices }) {
  return (
    <Box variant="menu">
      <Link
        variant="menu.link"
        target="_blank"
        href={
          'https://res.cloudinary.com/gonation/image/upload/v1704300348/gonation.data.prod/business/bzn-zz9ffngrSgSItwzvb_vx9w/pdfs/update_menu_1123.pdf'
        }
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faMap} />
        <Text variant="menu.text">See Our Menu</Text>
      </Link>
    </Box>
  );
}
