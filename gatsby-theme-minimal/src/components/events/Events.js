/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text } from 'theme-ui'
import EventItem from './EventItem'

let axios = require('axios')
let jsonpAdapter = require('axios-jsonp')

const Events = ({ gonationID, slug }) => {
  const [recurringEvents, setRecurringEvents] = useState({
    eventsData: null,
    isLoading: true,
    modalShowing: '',
  })

  const [singleEvents, setSingleEvents] = useState({
    eventsData: null,
    isLoading: true,
    modalShowing: '',
  })

  useEffect(() => {
    // fetch recurring events
    axios({
      url: `https://data.prod.gonation.com/profile/recurringevents?profile_id=${gonationID}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        setRecurringEvents({
          ...recurringEvents,
          eventsData: res.data,
          isLoading: false,
        })
      })
      .catch(e => {
        console.log('error : ', console.e)
        setRecurringEvents({ ...recurringEvents, isLoading: false })
      })

    // fetch special events
    axios({
      url: `https://data.prod.gonation.com/profile/events?profile_id=${gonationID}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        setSingleEvents({
          ...singleEvents,
          eventsData: res.data,
          isLoading: false,
        })
      })
      .catch(e => {
        console.log('error : ', console.e)
        setSingleEvents({ ...recurringEvents, isLoading: false })
      })
  }, [])

  const closeModal = () => {
    // maybe refactor at some point to recieve a type and then close the right one instead of close all
    setSingleEvents({ ...singleEvents, modalShowing: '' })
    setRecurringEvents({ ...recurringEvents, modalShowing: '' })
  }

  return (
    <Box>
      {!recurringEvents.isLoading &&
      recurringEvents.eventsData &&
      recurringEvents.eventsData.events.length ? (
        // ========== Start RECURRINGS EVENTS JSX ==============
        <Box variant='page.section'>
          <Text variant='sectionHeading'>Recurring Events</Text>
          <Flex variant='event.eventsContainer'>
            {recurringEvents.eventsData.events.map(event => {
              return (
                <EventItem
                  key={event._id}
                  event={event}
                  setEvents={setRecurringEvents}
                  closeModal={closeModal}
                  state={recurringEvents}
                  slug={slug}
                />
              )
            })}
          </Flex>
        </Box>
      ) : (
        ''
      )}

      {!singleEvents.isLoading &&
      singleEvents.eventsData &&
      singleEvents.eventsData.events.length ? (
        // ========== END OF RECURRINGS EVENTS JSX ============

        // ======= Start of Single Events  =======
        <Box variant='page.section'>
          <Text variant='sectionHeading'>Special Events</Text>
          <Flex variant='event.eventsContainer'>
            {singleEvents.eventsData.events.map(event => {
              return (
                <EventItem
                  key={event._id}
                  event={event}
                  setEvents={setRecurringEvents}
                  closeModal={closeModal}
                  state={recurringEvents}
                  slug={slug}
                />
              )
            })}
          </Flex>
        </Box>
      ) : (
        // ========== END OF RECURRINGS EVENTS JSX ============

        ''
      )}
    </Box>
  )
}

export default Events
