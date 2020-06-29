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
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
      }}>
      <div
        onClick={() => closeModal()}
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
      <Box
        sx={{
          padding: 0,
          maxWidth: '767px',
          zIndex: '1000',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          color: 'black',
          backgroundColor: 'primary',
          minWidth: '280px',
          border: 'solid 6px white',
        }}>
        <Image
          sx={{
            maxHeight: ['175px', '250px', '500px'],
            width: '100%',
            objectFit: 'cover',
          }}
          src={imageurl}
        />
        <Box sx={{ padding: 3, color: 'white' }}>
          <Text
            variant='heading'
            sx={{
              color: 'white',
            }}>
            <FontAwesomeIcon icon={faGlassCheers} /> {name}
          </Text>

          <Flex sx={{ alignItems: 'center', marginBottom: 3 }}>
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

          <a href={`https://www.gonation.com/place/${slug}/events/${_id}`}>
            <Button variant='secondary'>See Full Details</Button>
          </a>
        </Box>
      </Box>
    </Box>
  ) : null
}
