/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { Box, Image, Flex, Heading, Text, Button } from 'theme-ui'
import moment from 'moment'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons'
import EventsModal from './EventsModal'
import EventDate from './EventDate'

export default function EventItem({
  event,
  setEvents,
  closeModal,
  state,
  slug,
}) {
  const { _id, name, starts, ends, description, imageurl } = event

  return (
    <Box
      key={_id}
      sx={{
        margin: ['1%'],
        width: ['48%', '31%', '23%', '18%'],
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Image
        sx={{ minHeight: '250px', maxHeight: '300px', objectFit: 'cover' }}
        src={imageurl}
      />
      <Flex
        sx={{
          flexGrow: '1',
          paddingTop: 2,
          paddingBottom: 2,
          flexDirection: ['column', 'row'],
        }}>
        <EventDate date={starts} style={{ marginRight: '5px' }} />
        <Box>
          <Text
            variant='heading'
            sx={{
              fontSize: 3,
              textTransform: 'capitalize',
            }}>
            {name}
          </Text>
        </Box>
      </Flex>
      <Button
        onClick={() => {
          setEvents({ ...state, modalShowing: _id })
        }}
        sx={{ marginTop: 3, cursor: 'pointer' }}>
        See More
      </Button>

      <EventsModal
        slug={slug}
        event={event}
        modalShowing={_id === state.modalShowing}
        closeModal={closeModal}
      />
    </Box>
  )
}
