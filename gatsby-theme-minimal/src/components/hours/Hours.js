import React from 'react'
import { Box, Image, Flex, Heading, Text, Styled } from 'theme-ui'
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

  // put all variables into an array for looping through
  const daysOfWeek = [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  ]

  // no day name in the object that coems through. needed to renfder text of the day.
  const dayOfTheWeekText = [
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
        <Flex key={'id' + Math.random().toString(16).slice(2)}>
          {timeBlock.isClosed ? <div>Closed</div> : null}
          {timeBlock.isOpen ? <div>Open 24 Hours</div> : null}
          {!timeBlock.isOpen && !timeBlock.isClosed ? (
            <Flex
              sx={{
                width: '100%',
                flexDirection: ['row', 'row', 'row'],
                marginBottom: 0,
              }}>
              <Text
                variant='light'
                sx={{ flexGrow: '1', marginBottom: 0, fontSize: 1 }}>
                {timeBlock.label}
              </Text>
              <Text
                variant='light'
                sx={{
                  textAlign: 'right',
                  width: '100%',
                  marginBottom: 0,
                  fontSize: 1,
                }}>
                {moment(timeBlock.open, 'h:mm a').format('h:mm a')}-
                {moment(timeBlock.close, 'h:mm a').format('h:mm a')}
              </Text>
            </Flex>
          ) : (
            'Unknown'
          )}
        </Flex>
      )
    })

  return (
    <Box sx={{ maxWidth: '300px', width: '100%' }}>
      <Text
        variant='h2'
        sx={{
          textAlign: ['center', 'center', 'left'],
          marginBottom: 2,
          color: 'light',
        }}>
        {' '}
        Our Hours
      </Text>
      <Flex
        sx={{
          flexDirection: ['column'],
          justifyContent: 'space-between',
        }}>
        {daysOfWeek.map((day, index) => {
          return (
            <Box
              sx={{
                padding: 1,
                textAlign: ['left', 'left', 'left'],
                marginBottom: 2,
              }}>
              <Text
                variant='headingLight'
                sx={{
                  marginBottom: 1,
                  textTransform: 'uppercase',
                  fontSize: 2,
                }}>
                {dayOfTheWeekText[index]}
              </Text>
              {renderHours(day)}
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
