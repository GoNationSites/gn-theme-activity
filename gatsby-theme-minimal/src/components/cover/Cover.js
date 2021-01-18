import React from 'react'
import { Image, Flex, Styled } from 'theme-ui'
export default function Cover({ coverImageId }) {
  return (
    <Flex
      variant='cover'
      sx={{
        backgroundImage: `linear-gradient(45deg, rgb(0 0 0 / 25%), rgb(0 0 0 / 25%)), url('https://res.cloudinary.com/gonation/${coverImageId}')`,
      }}></Flex>
  )
}
