import React from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'
import SocialIcons from './SocialIcons'
export default function Contact({ contact }) {
  const { facebook, instagram, phone, url } = contact

  return (
    <Box>
      <h1>Contact</h1>
      <p>{phone}</p>
      <p>{url}</p>
      <SocialIcons facebook={facebook} instagram={instagram} />
    </Box>
  )
}
