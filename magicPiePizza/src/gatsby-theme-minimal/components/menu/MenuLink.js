import React from 'react'
import { Box, Text, Link } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'

export default function MenuLink({ gonationSlug, menuOrServices }) {
  return (
    <Box variant='menu'>
      <Link
        variant='menu.link'
        target='_blank'
        // href={`https://gonation.com/place/${gonationSlug}/items`}
        href={`https://res.cloudinary.com/gonation/image/upload/v1640276356/sites/magic-5-pie-co/magic-5-pie-co-menu.pdf`}
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faMap} />
        <Text variant='menu.text'>
          See Our {menuOrServices ? menuOrServices : 'Menu'}
        </Text>
      </Link>
    </Box>
  )
}
