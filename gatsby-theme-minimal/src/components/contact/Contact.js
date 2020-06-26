import React from 'react'
import { Box, Image, Flex, Heading, Text, Styled } from 'theme-ui'
import SocialIcons from './SocialIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ContactForm from './ContactForm'

export default function Contact({
  goNationID,
  contact,
  address,
  businessName,
}) {
  const { facebook, instagram, phone, url } = contact

  const { street, indicator, city, state, postalCode, country } = address

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1>Contact Us</h1>

      <Text>
        <Styled.a href={`tel:${phone}`}>
          <FontAwesomeIcon icon={faPhone} />
          &nbsp;&nbsp;{phone}
        </Styled.a>
      </Text>

      <Text sx={{ color: 'black' }}>
        <Styled.a
          href={`https://www.google.com/maps/dir/?api=1&destination=${businessName}+${street}+${city}+${state}+${postalCode}+${country}`}
          target='_blank'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp;&nbsp;{street},{city},{state},{postalCode},{country}
        </Styled.a>
      </Text>

      <SocialIcons facebook={facebook} instagram={instagram} />
      <Box sx={{ marginTop: 4, marginBottom: 4 }}>
        <Heading as='h3' sx={{ textAlign: 'center', fontSize: 5 }}>
          Email Us
        </Heading>
        <Box>
          <ContactForm />
        </Box>
      </Box>
    </Flex>
  )
}
