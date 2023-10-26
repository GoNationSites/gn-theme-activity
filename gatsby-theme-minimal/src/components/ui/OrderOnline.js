import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export default function OrderOnline({ orderOnlineLink, orderOnlineName }) {
  return (
    <Box variant='onlineOrder'>
      <Link
        variant='onlineOrder.link'
        href={`${orderOnlineLink}`}
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faTruck} />
        <Text variant='onlineOrder.text'>
          {orderOnlineName ? orderOnlineName : 'Online Ordering'}
        </Text>
      </Link>
    </Box>
  );
}
