import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const CTASection = ({
  title,
  subtitle,
  description,
  ctaButtonText,
  ctaLink,
  imageLink,
}) => {
  return (
    <Container>
      <TextColumn>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <Link to={ctaLink}>
          <Button>{ctaButtonText}</Button>
        </Link>
      </TextColumn>
      <ImageColumn>
        <SectionImage src={imageLink} />
      </ImageColumn>
    </Container>
  )
}

export default CTASection

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  padding: 1rem;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
    padding: 0;
  }
`

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  @media (min-width: 767px) {
    max-width: 50%;
    padding: 2rem;
    margin-bottom: 0;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.5rem;
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.h3`
  margin: 0 0 1.5rem;
`

const Description = styled.p`
  margin: 0 0 1rem;
  max-width: 650px;
  font-size: 1.1rem;
`

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media (min-width: 767px) {
    min-width: 40%;
  }
`

const SectionImage = styled.img`
  margin: 0;
  height: 100%;
  width: 100%;
  margin-top: 0;
  object-fit: cover;
`
const Button = styled.button`
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  background: none;
  border: solid 1px black;
`
