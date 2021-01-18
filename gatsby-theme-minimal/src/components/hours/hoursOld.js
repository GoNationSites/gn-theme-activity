import React from 'react'
import { Box, Flex, Text } from 'theme-ui'
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
        <Flex
          key={'id' + Math.random().toString(16).slice(2)}
          sx={
            day.length === 1 && day[0].label === null
              ? { width: 'unset', flexGrow: '1' }
              : { width: '100%', flexGrow: '1' }
            // if there is only one timeblock and no label this style keeps the single timeblock on one line with the day
            // if there is a label we need to render it on a new line
          }>
          {/* if the business is closed render this */}
          {timeBlock.isClosed ? (
            <Text
              variant='light'
              sx={{
                flexGrow: '1',
                marginBottom: 0,
                fontSize: 1,
                textAlign: 'right',
              }}>
              Closed
            </Text>
          ) : null}

          {/* if open is true. render open 24 hours */}
          {timeBlock.isOpen ? (
            <Text
              variant='light'
              sx={{
                flexGrow: '1',
                marginBottom: 0,
                fontSize: 1,
                textAlign: 'right',
              }}>
              Open 24 Hours
            </Text>
          ) : null}

          {/* anything else render all hours and labels */}
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
                  marginBottom: 0,
                  fontSize: 1,
                }}>
                {moment(timeBlock.open, 'h:mm a').format('h:mm a')}-
                {moment(timeBlock.close, 'h:mm a').format('h:mm a')}
              </Text>
            </Flex>
          ) : (
            ''
          )}
        </Flex>
      )
    })

  return (
    <Box sx={{ width: '100%' }}>
      {console.log(hours)}
      <Text
        variant='h2'
        sx={{
          textAlign: ['center', 'center', 'left'],
          marginBottom: 2,
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
              key={index}
              sx={{
                padding: 1,
                textAlign: ['left', 'left', 'left'],
                marginBottom: 2,
                display: 'flex',
                flexWrap: 'wrap',
              }}>
              <Text
                // variant='headingLight'
                sx={{
                  marginBottom: 1,
                  textTransform: 'uppercase',
                  fontSize: 2,
                }}>
                {dayOfTheWeekText[index]}
              </Text>
              {console.log(day)}

              {day.length === 0 ? (
                <Text
                  sx={{
                    flexGrow: '1',
                    marginBottom: 0,
                    fontSize: 1,
                    textAlign: 'right',
                  }}>
                  Closed
                </Text>
              ) : (
                renderHours(day)
              )}
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
