import React from 'react'
import { Box, Flex, Text, Styled } from 'theme-ui'
import SocialIcons from './SocialIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ContactForm from './ContactForm'
import Hours from '../hours/Hours'

export default function Contact({
  goNationID,
  contact,
  address,
  businessName,
  hours,
}) {
  const { facebook, instagram, phone, url } = contact

  const { street, indicator, city, state, postalCode, country } = address

  return (
    <Box sx={{ bg: 'primary', padding: 4 }}>
      <Flex
        sx={{
          justifyContent: ['center', 'center', 'center', 'space-between'],
          flexDirection: ['column', 'column', 'column', 'row'],
          alignItems: 'center',
          maxWidth: '1024px',
          margin: '0 auto',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: ['center', 'center', 'center', 'flex-start'],
            padding: 3,
          }}>
          <Text variant='h2' sx={{ color: 'light' }}>
            Contact Us
          </Text>

          <Text variant='default'>
            <Styled.a href={`tel:${phone}`}>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;&nbsp;{phone}
            </Styled.a>
          </Text>

          <Text variant='default'>
            <Styled.a
              href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}+${postalCode}+${country}`}
              target='_blank'>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              &nbsp;&nbsp;{street}, {city}, {state}, {postalCode}, {country}
            </Styled.a>
          </Text>

          <SocialIcons facebook={facebook} instagram={instagram} />
        </Box>

        <Box sx={{ marginTop: 3, marginBottom: 5, minWidth: '280px' }}>
          <Text
            variant='h2'
            sx={{ color: 'light', textAlign: ['center', 'center', 'left'] }}>
            Email Us
          </Text>
          <Box>
            <ContactForm />
          </Box>
        </Box>

        <Hours hours={hours} />
      </Flex>
    </Box>
  )
}
