import React from 'react';
import { Box, Text } from 'theme-ui';
import moment from 'moment';
export default function EventDate({ date, dateColor, monthColor, style }) {
  return (
    <Box variant="event.eventItemDateContainer">
      <Text
        as="span"
        variant="event.eventMonth"
        sx={{
          color: monthColor ? monthColor : '',
          marginRight: '2px',
        }}
      >
        {`${moment(date).format('MMM')}`}
      </Text>

      <Text
        as="span"
        variant="event.eventDate"
        sx={{
          color: dateColor ? dateColor : 'primary',
        }}
      >
        {`${moment(date).format('DD')}`}
      </Text>
    </Box>
  );
}
