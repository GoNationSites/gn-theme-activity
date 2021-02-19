import React from 'react'
import { Flex } from 'theme-ui'
export default function Cover({ coverImageId }) {
  return (
    <Flex
      variant='cover'
      title='main cover'
      ariaLabel='main cover'
      sx={{
        backgroundImage: `linear-gradient(45deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url('https://res.cloudinary.com/gonation/${coverImageId}')`,
      }}></Flex>
  )
}
