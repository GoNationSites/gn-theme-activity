import React from 'react'
import { Image, Flex, Styled } from 'theme-ui'
export default function hero({ businessName, logo }) {
  return (
    <Flex variant='hero.container'>
      <Image
        src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${logo}`}
        variant='hero.logo'
      />
      <Styled.h1 style={{ textAlign: 'center' }}>{businessName}</Styled.h1>
    </Flex>
  )
}
