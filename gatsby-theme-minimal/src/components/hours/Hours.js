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
        <Flex key={'id' + Math.random().toString(16).slice(2)}>
          {timeBlock.isClosed ? <div>Closed</div> : null}
          {timeBlock.isOpen ? <div>Open 24 Hours</div> : null}
          {!timeBlock.isOpen && !timeBlock.isClosed ? (
            <Flex
              sx={{
                width: '100%',
                flexDirection: ['row', 'row', 'row', 'column'],
                marginBottom: 2,
              }}>
              <Text sx={{ flexGrow: '1' }}>{timeBlock.label}</Text>
              <Text sx={{ textAlign: 'right', width: '100%' }}>
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
    <Box sx={{ boxShadow: '0 0 12px rgba(0,0,0,.3)', padding: 4 }}>
      <Box sx={{ maxWidth: '1024px', margin: '0 auto' }}>
        <Heading
          as='h2'
          sx={{
            textAlign: ['left', 'left', 'left', 'center'],
            marginBottom: 4,
          }}>
          Our Hours
        </Heading>
        <Flex
          sx={{
            flexDirection: ['column', 'column', 'column', 'row'],
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              paddingRight: 1,
              textAlign: ['left', 'left', 'left', 'center'],
              marginBottom: 3,
            }}>
            <Heading
              as='h4'
              sx={{ marginBottom: 2, textTransform: 'uppercase' }}>
              Monday
            </Heading>
            {renderHours(monday)}
          </Box>
          <Box
            sx={{
              paddingRight: 1,
              textAlign: ['left', 'left', 'left', 'center'],
              marginBottom: 3,
            }}>
            <Heading
              as='h4'
              sx={{ marginBottom: 2, textTransform: 'uppercase' }}>
              Tuesday
            </Heading>
            {renderHours(tuesday)}
          </Box>
          <Box
            sx={{
              paddingRight: 1,
              textAlign: ['left', 'left', 'left', 'center'],
              marginBottom: 3,
            }}>
            <Heading
              as='h4'
              sx={{ marginBottom: 2, textTransform: 'uppercase' }}>
              Wednesday
            </Heading>
            {renderHours(wednesday)}
          </Box>
          <Box
            sx={{
              paddingRight: 1,
              textAlign: ['left', 'left', 'left', 'center'],
              marginBottom: 3,
            }}>
            <Heading
              as='h4'
              sx={{ marginBottom: 2, textTransform: 'uppercase' }}>
              Thursday
            </Heading>
            {renderHours(thursday)}
          </Box>
          <Box
            sx={{
              paddingRight: 1,
              textAlign: ['left', 'left', 'left', 'center'],
              marginBottom: 3,
            }}>
            <Heading
              as='h4'
              sx={{ marginBottom: 2, textTransform: 'uppercase' }}>
              Friday
            </Heading>
            {renderHours(friday)}
          </Box>
          <Box
            sx={{
              paddingRight: 1,
              textAlign: ['left', 'left', 'left', 'center'],
              marginBottom: 3,
            }}>
            <Heading
              as='h4'
              sx={{ marginBottom: 2, textTransform: 'uppercase' }}>
              Saturday
            </Heading>
            {renderHours(saturday)}
          </Box>
          <Box
            sx={{
              paddingRight: 1,
              textAlign: ['left', 'left', 'left', 'center'],
              marginBottom: 3,
            }}>
            <Heading
              as='h4'
              sx={{ marginBottom: 2, textTransform: 'uppercase' }}>
              Sunday
            </Heading>
            {renderHours(sunday)}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
