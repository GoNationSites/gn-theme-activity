import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

export default function MenuLink({ gonationSlug, menuOrServices }) {
  return (
    <>
      <Box variant="menu" className="menu">
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
            variant="menu.link"
            target="_blank"
            href={
              'https://res.cloudinary.com/gonation/image/upload/v1701461195/gonation.data.prod/business/bzn-LUeON2KmS7Cj1QgkyMt7IA/pdfs/AT_M_Christmas_2023.pdf'
            }
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMap} />
            <Text variant="menu.text">Christmas Menu</Text>
          </Link>

          <Link
            variant="menu.link"
            target="_blank"
            href={
              'https://res.cloudinary.com/gonation/image/upload/v1698942705/sites/anis-table/holiday-dessert-menu.pdf'
            }
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMap} />
            <Text variant="menu.text">Holiday Dessert Menu</Text>
          </Link>
        </Box>
      </Box>
    </>
  );
}
