import React from 'react'
import moment from 'moment'
import { Box, Image, Flex, Heading, Text, Button } from 'theme-ui'
import EventDate from './EventDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlassCheers,
  faCalendarWeek,
  faClock,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons'

export default function EventsModal({ event, modalShowing, closeModal, slug }) {
  const { _id, name, starts, ends, description, imageurl } = event

  return modalShowing ? (
    <Box variant='event.modalContainer'>
      <Box variant='event.modalBackground' onClick={() => closeModal()} />
      <Box variant='event.modal'>
        <Image variant='event.modalImage' src={imageurl} alt='event' />

        <Box variant='event.modalContentContainer'>
          <Text variant='event.modalEventName'>
            <FontAwesomeIcon icon={faGlassCheers} /> {name}
          </Text>

          <Flex variant='event.modalEventDate'>
            <FontAwesomeIcon
              style={{
                marginRight: '10px',
                marginLeft: '2px',
                fontSize: '22px',
              }}
              icon={faCalendarWeek}
            />

            <EventDate
              date={starts}
              dateColor={'secondary'}
              monthColor={'white'}
            />
            <Heading
              as='h4'
              sx={{ marginRight: 2, marginLeft: 2, color: 'light' }}>
              -
            </Heading>
            <EventDate
              date={ends}
              dateColor={'secondary'}
              monthColor={'white'}
            />
          </Flex>

          <Text variant='default' sx={{ color: 'white', marginBottom: 4 }}>
            <FontAwesomeIcon
              style={{ marginRight: '10px', fontSize: '22px' }}
              icon={faClock}
            />
            {`${moment(starts).format('HH:mm')}`} -{' '}
            {`${moment(ends).format('HH:mm')}`}
          </Text>

          <Flex sx={{ marginBottom: 2 }}>
            <FontAwesomeIcon
              style={{
                marginRight: '14px',
                fontSize: '22px',
                marginLeft: '2px',
              }}
              icon={faClipboard}
            />
            <Text variant='default' sx={{ color: 'white' }}>
              {description.substring(0, 150)}...
            </Text>
          </Flex>

          <a
            href={`https://www.gonation.com/place/${slug}/events/${_id}`}
            rel='noreferrer'>
            <Button variant='secondary'>See Full Details</Button>
          </a>
        </Box>
      </Box>
    </Box>
  ) : (
    ''
  )
}
