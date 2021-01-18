import React from 'react'
import { Image, Flex, Styled } from 'theme-ui'
export default function hero({ businessName, logo, hasHeroTitle, coverImage }) {
  return (
    <Flex
      variant='hero.container'
      sx={{
        background: '',
        backgroundImage: `linear-gradient(45deg, black, transparent) url('https://res.cloudinary.com/gonation/${coverImage}') no-repeat`,
        backgroundSize: 'cover',
      }}>
      <Image
        src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${logo}`}
        variant='hero.logo'
      />
      {hasHeroTitle ? (
        <Styled.h1 style={{ textAlign: 'center' }}>{businessName}</Styled.h1>
      ) : (
        ''
      )}
    </Flex>
  )
}
