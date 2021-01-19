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
  const daysOfWeek = Object.values(hours)
  // [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

  // no day name in the object that coems through. needed to renfder text of the day.
  const dayOfTheWeekText = Object.keys(hours)
  // ['monday','tuesday','wednesday','thursday','friday','saturday','sunday',]

  const renderHours = day =>
    day.map(timeBlock => {
      return (
        <Flex
          key={'id' + Math.random().toString(16).slice(2)}
          variant='hours.timeBlocksContainer'
          sx={
            day.length === 1 && day[0].label === null
              ? { width: 'unset', flexGrow: '1' }
              : { width: '100%', flexGrow: '1' }
            // if there is only one timeblock and no label this style keeps the single timeblock on one line with the day
            // if there is a label we need to render it on a new line
          }>
          {/* if the business is closed render this */}
          {timeBlock.isClosed && <Text variant='hours.closed'>Closed</Text>}

          {/* if open is true. render open 24 hours */}
          {timeBlock.isOpen && (
            <Text variant='hours.open24'>Open 24 Hours</Text>
          )}

          {/* anything else render all hours and labels */}
          {!timeBlock.isOpen && !timeBlock.isClosed ? (
            <Flex variant='hours.timeBlock'>
              <Text variant='hours.timeBlockLabel'>{timeBlock.label}</Text>
              <Text variant='hours.time'>
                {moment(timeBlock.open, 'h:mm a').format('h:mm a')} -
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
    <Box variant='hours.container'>
      {console.log(hours)}
      <Text as='h3' variant='hours.title'>
        Our Hours
      </Text>

      <Flex variant='hours.hoursContainer'>
        {daysOfWeek.map((day, index) => {
          return (
            <Box key={index} variant='hours.dayContainer'>
              <Text variant='hours.dayOfTheWeek'>
                {dayOfTheWeekText[index]}
              </Text>
              {/* // ? if there are no hours then assume the venue is closed */}
              {day.length === 0 ? (
                <Text variant='hours.closed'>Closed</Text>
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
