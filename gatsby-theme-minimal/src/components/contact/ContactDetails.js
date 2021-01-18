import React from 'react'
import { Box, Flex, Text, Styled, Link } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function ContactDetails({
  street,
  indicator,
  city,
  state,
  postalCode,
  country,
  phone,
}) {
  return (
    <Box variant='contactDetails'>
      <Text variant='contactDetails.phone'>
        <Link href={`tel:${phone}`}>
          <FontAwesomeIcon icon={faPhone} />
          &nbsp;&nbsp;{phone}
        </Link>
      </Text>

      <Text variant='contactDetails.directions'>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}+${postalCode}+${country}`}
          target='_blank'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp;&nbsp;{street}, {city}, {state}, {postalCode}, {country}
        </Link>
      </Text>
    </Box>
  )
}
