import React, { useEffect, useState } from 'react'
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
    <Flex variant='CTAContainer'>
      <Link href={`tel:${phone}`} variant='CTAContainer.phone'>
        <FontAwesomeIcon icon={faPhone} /> <Text variant='CTAText'>Call</Text>
      </Link>

      <Link
        variant='CTAContainer.directions'
        href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}+${postalCode}+${country}`}
        target='_blank'>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <Text variant='CTAText'>Directions</Text>
      </Link>

      {orderOnlineLink ? (
        <Link
          variant='CTAContainer.order'
          href={`${orderOnlineLink}`}
          target='_blank'>
          <Text variant='CTAText'>Order Online</Text>
        </Link>
      ) : (
        ''
      )}
    </Flex>
  )
}
