/** @jsx jsx */
import React from 'react'
import { jsx, Box, Image, Flex, Text, Button } from 'theme-ui'
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
    <Flex key={_id} variant='event.eventItemContainer'>
      <Image variant='event.eventItemImage' src={imageurl} />
      <Flex variant='event.eventItemContent'>
        <EventDate date={starts} />
        <Box>
          <Text variant='event.eventItemTitle'>{name}</Text>
        </Box>
      </Flex>
      <Button
        variant='primary'
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
    </Flex>
  )
}
