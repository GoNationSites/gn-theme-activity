import React from 'react'
import {
  jsx,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Styled,
  Button,
  Link,
} from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function CtaWidget({
  businessName,
  phone,
  street,
  city,
  state,
  postalCode,
  country,
  orderOnlineLink,
}) {
  return (
    <Flex
      sx={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        maxWidth: '400px',
        bg: 'primary',
        alignItems: 'stretch',
      }}>
      <a
        href={`tel:${phone}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#11434a',
          borderRight: 'solid 1px white',
          width: '50%',
        }}>
        <Box p={3} sx={{ color: 'light', width: '100%', textAlign: 'center' }}>
          <FontAwesomeIcon icon={faPhone} />
        </Box>
      </a>

      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}+${postalCode}+${country}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#11434a',
          width: '50%',
        }}
        target='_blank'>
        <Box p={3} sx={{ color: 'light', width: '100%', textAlign: 'center' }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Box>
      </a>

      {orderOnlineLink ? (
        <Link
          href={`${orderOnlineLink}`}
          target='_blank'
          sx={{ flexGrow: '1', width: '100%', margin: 0 }}>
          <Button
            variant='secondary'
            sx={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              borderRadius: 0,
            }}>
            Order Online
          </Button>
        </Link>
      ) : (
        ''
      )}
    </Flex>
  )
}
