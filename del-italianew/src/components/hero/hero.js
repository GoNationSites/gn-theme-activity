import React from 'react'
import styled from 'styled-components'
export default function hero({ businessName, logo, hasHeroTitle, heroImage }) {
  return (
    <Container heroImage={heroImage}>
      <Logo
        src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${logo}`}
      />
      {hasHeroTitle ? <Title>{businessName}</Title> : ''}
    </Container>
  )
}

const Container = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: lightgrey;
  background-image:url("${props => (props.heroImage ? props.heroImage : '')}");
  background-size:cover;
  background-position:center;
`
const Logo = styled.img`
  height: 100%;
  max-height: 150px;
  margin: 0 auto;
`
const Title = styled.h1`
  text-align: center;
`
