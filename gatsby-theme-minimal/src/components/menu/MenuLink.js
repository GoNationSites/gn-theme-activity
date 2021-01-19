import React from 'react'
import { jsx, Box, Image, Flex, Heading, Text, Styled, Link } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'

export default function MenuLink({ gonationSlug }) {
  return (
    <Box variant='menu'>
      <Link
        variant='menu.link'
        target='_blank'
        href={`https://gonation.com/place/${gonationSlug}/items`}>
        <FontAwesomeIcon icon={faMap} />
        <Text variant='menu.text'>See Our Menu</Text>
      </Link>
    </Box>
  )
}
