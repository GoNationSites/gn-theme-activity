import React from 'react'
import { Box, Text } from 'theme-ui'
import moment from 'moment'
export default function EventDate({ date, dateColor, monthColor, style }) {
  return (
    <Box variant='event.eventItemDateContainer'>
      <Text
        variant='event.eventDate'
        sx={{
          color: dateColor ? dateColor : 'primary',
        }}>
        {`${moment(date).format('DD')}`}
      </Text>
      <Text
        variant='event.eventMonth'
        sx={{
          color: monthColor ? monthColor : '',
        }}>
        {`${moment(date).format('MMM')}`}
      </Text>
    </Box>
  )
}
