import React from 'react'
import { Flex, Text, Link } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function CtaWidget({
  // businessName,
  phone,
  street,
  city,
  state,
  postalCode,
  country,
  orderOnlineLink,
  orderOnlineName,
}) {
  return (
    <Flex variant='CTAContainer'>
      <Link
        href={`tel:${phone}`}
        variant='CTAContainer.phone'
        className='phone'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faPhone} /> <Text variant='CTAText'>Call</Text>
      </Link>

      <Link
        variant='CTAContainer.directions'
        className='directions'
        href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}+${postalCode}+${country}`}
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <Text variant='CTAText'>Directions</Text>
      </Link>

      {orderOnlineLink ? (
        <Link
          variant='CTAContainer.order'
          href={`${orderOnlineLink}`}
          target='_blank'
          rel='noreferrer'
        >
          <Text variant='CTAText'>
            {orderOnlineName ? orderOnlineName : 'Order Online'}
          </Text>
        </Link>
      ) : (
        ''
      )}
    </Flex>
  )
}
