import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
    <Box variant="contactDetails" className="contactDetails">
      <Text variant="contactDetails.phone" className="phone">
        <Link href={`tel:${phone}`} rel="noreferrer">
          <FontAwesomeIcon icon={faPhone} />
          {phone} <span>PLEASE TEXT</span>
        </Link>
      </Text>

      <Text variant="contactDetails.directions" className="directions">
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}+${postalCode}+${country}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <Text variant="contactDetails.directions">
            {street},<br></br>
            {city}, {state}, {postalCode}
          </Text>
        </Link>
      </Text>
    </Box>
  );
}
