import React from 'react'
import { Box, Text, Link, Heading } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function ContactDetails({
  street,
  // indicator,
  city,
  state,
  postalCode,
  country,
  phone,
}) {
  return (
    <Box variant='contactDetails' className='contactDetails'>
      <Heading>{city}</Heading>
      <Text variant='contactDetails.phone' className='phone'>
        <Link href={`tel:${phone}`} rel='noreferrer'>
          <FontAwesomeIcon icon={faPhone} />
          {phone}
        </Link>
      </Text>

      <Text variant='contactDetails.directions' className='directions'>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}+${postalCode}+${country}`}
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <Text variant='contactDetails.directions'>
            {street},<br></br>
            {city}, {state}, {postalCode}
          </Text>
        </Link>
      </Text>
      <br></br>
      {/* =================================================== */}
      <Heading>{'Wallingford'}</Heading>
      <Text variant='contactDetails.phone' className='phone'>
        <Link href={`tel:(203) 626-5190`} rel='noreferrer'>
          <FontAwesomeIcon icon={faPhone} />
          (203) 626-5190
        </Link>
      </Text>

      <Text variant='contactDetails.directions' className='directions'>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=181 North St+Wallingford+ct+06492+United States`}
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <Text variant='contactDetails.directions'>
            181 North St, Wallingford, CT 06492, United States
          </Text>
        </Link>
      </Text>
    </Box>
  )
}
