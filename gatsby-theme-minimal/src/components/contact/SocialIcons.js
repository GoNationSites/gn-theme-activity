import React from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'
export default function SocialIcons({ instagram, facebook }) {
  return (
    <div>
      <Text>{facebook}</Text>
      <Text>{instagram}</Text>
    </div>
  )
}
