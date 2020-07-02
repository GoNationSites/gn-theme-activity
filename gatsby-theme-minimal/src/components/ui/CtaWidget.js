import React from 'react'
import { jsx, Box, Image, Flex, Heading, Text, Styled, Button } from 'theme-ui'
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
        right: '0',
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
        }}>
        <Box px={3} sx={{ color: 'light' }}>
          <FontAwesomeIcon icon={faPhone} />
        </Box>
      </a>

      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${businessName}+${street}+${city}+${state}+${postalCode}+${country}`}
        style={{ display: 'flex', alignItems: 'center', background: '#11434a' }}
        target='_blank'>
        <Box px={3} sx={{ color: 'light' }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Box>
      </a>

      {orderOnlineLink ? (
        <Box sx={{ flexGrow: '1' }}>
          <a href={`${orderOnlineLink}`} target='_blank'>
            <Button variant='secondary' sx={{ width: '100%' }}>
              Order Online
            </Button>
          </a>
        </Box>
      ) : (
        ''
      )}
    </Flex>
  )
}
