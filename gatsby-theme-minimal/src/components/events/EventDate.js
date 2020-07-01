import React from 'react'
import { Box, Text } from 'theme-ui'
import moment from 'moment'
export default function EventDate({ date, dateColor, monthColor, style }) {
  return (
    <Box
      style={style ? style : { margin: '0' }}
      sx={{
        textAlign: ['left', 'center'],
        maxWidth: '50px',
        maxHeight: '50px',
        minWidth: 'unset',
      }}>
      <Text
        variant='default'
        sx={{
          fontSize: 3,
          color: dateColor ? dateColor : 'primary',
          fontWeight: 'bolder',
          width: '100%',
          marginBottom: 0,
        }}>
        {`${moment(date).format('DD')}`}
      </Text>
      <Text
        variant='default'
        sx={{
          textTransform: 'uppercase',
          color: monthColor ? monthColor : '',
          marginBottom: 0,
        }}>
        {`${moment(date).format('MMM')}`}
      </Text>
    </Box>
  )
}
