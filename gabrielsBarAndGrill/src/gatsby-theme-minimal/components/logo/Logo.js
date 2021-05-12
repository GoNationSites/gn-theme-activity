import React, { useEffect, useState, useRef } from 'react'
import { Image, Heading } from 'theme-ui'

export default function Logo({ logoImageId }) {
  const [scrolled, SetScrolled] = useState(false)

  const scrollRef = useRef()
  scrollRef.current = scrolled

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70
      if (scrollRef.current !== show) {
        SetScrolled(show)
      }
    }

    document.addEventListener('scroll', handleScroll)
  }, [])

  const defaultLogoURL = 'gonation.data.prod/default/img-bzn-avatar-full.png'

  return (
    <>
      {logoImageId !== defaultLogoURL ? (
        <Image
          src={`https://res.cloudinary.com/gonation/${logoImageId}`}
          variant={`logo.${!scrolled ? 'logo' : 'logoScrolled'}`}
          alt='brand'
        />
      ) : (
        <Heading as='h1' sx={{ padding: ['1.5rem 1rem', '', '3rem 1rem'] }}>
          Gabriel's Bar & Grill
        </Heading>
      )}
    </>
  )
}
