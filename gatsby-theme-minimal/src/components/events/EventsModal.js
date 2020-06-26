import React from 'react'
import moment from 'moment'
import { Box, Image, Flex, Heading, Text, Button } from 'theme-ui'
export default function EventsModal({
  recurringEvent,
  modalShowing,
  closeModal,
}) {
  console.log(recurringEvent)
  const { name, starts, ends, description, imageurl } = recurringEvent
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
      {console.log(modalShowing)}
      <Box
        sx={{
          padding: 2,
          maxWidth: '767px',
          zIndex: '1000',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          color: 'black',
          backgroundColor: 'white',
          minWidth: '280px',
        }}>
        <Image
          sx={{
            maxHeight: ['250px', '350px', '500px'],
            width: '100%',
            objectFit: 'cover',
          }}
          src={imageurl}
        />
        <Text
          sx={{
            fontSize: 3,
            textTransform: 'capitalize',
          }}>
          {name}
        </Text>
        {/* 
        <Text sx={{ color: 'red' }}>{`${moment(starts).format('DD')}`}</Text>
        <Text sx={{ textTransform: 'uppercase' }}>{`${moment(starts).format(
          'MMM'
        )}`}</Text> */}

        <Text sx={{ color: 'red' }}>
          {`${moment(starts).format('DD MMM')}`} -{' '}
          {`${moment(ends).format('DD MMM')}`}
        </Text>

        <Text sx={{ color: 'red' }}>
          {`${moment(starts).format('HH:mm')}`} -{' '}
          {`${moment(ends).format('HH:mm')}`}
        </Text>

        <Text>{description}</Text>
      </Box>
    </Box>
  ) : null
}
