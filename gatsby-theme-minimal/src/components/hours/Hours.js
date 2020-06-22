import React from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'
import moment from 'moment'

export default function hours({ hours }) {
  const {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  } = hours

  const dayOfTheWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]

  const renderHours = day =>
    day.map(timeBlock => {
      return (
        <div key={'id' + Math.random().toString(16).slice(2)}>
          {timeBlock.isClosed ? <div>Closed</div> : null}
          {timeBlock.isOpen ? <div>Open 24 Hours</div> : null}
          {!timeBlock.isOpen && !timeBlock.isClosed
            ? `${moment(timeBlock.open, 'h:mm a').format('h:mm a')} | ${moment(
                timeBlock.close,
                'h:mm a'
              ).format('h:mm a')}`
            : 'Unknown'}
        </div>
      )
    })

  return (
    <Box>
      <h1>Our Hours</h1>
      <h4>Monday</h4>
      {renderHours(monday)}
      <h4>Tuesday</h4>
      {renderHours(tuesday)}
      <h4>Wednesday</h4>
      {renderHours(wednesday)}
      <h4>Thursday</h4>
      {renderHours(thursday)}
      <h4>Friday</h4>
      {renderHours(friday)}
      <h4>Saturday</h4>
      {renderHours(saturday)}
      <h4>Sunday</h4>
      {renderHours(sunday)}
    </Box>
  )
}
