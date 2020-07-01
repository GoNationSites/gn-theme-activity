/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Styled } from 'theme-ui'
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
    // maybe refactor at some point to recieve a type and then close the right one
    setSingleEvents({ ...singleEvents, modalShowing: '' })
    setRecurringEvents({ ...recurringEvents, modalShowing: '' })
  }

  return (
    <Box>
      {!recurringEvents.isLoading && recurringEvents.eventsData ? (
        // ========== Start RECURRINGS EVENTS JSX ==============
        <Box sx={{ marginBottom: 4 }}>
          <Styled.h2>Recurring Events</Styled.h2>

          <Flex sx={{ flexWrap: 'wrap' }}>
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

      {!singleEvents.isLoading && singleEvents.eventsData ? (
        // ========== END OF RECURRINGS EVENTS JSX ============

        // ======= Start of Single Events  =======
        <Box sx={{ marginBottom: 4 }}>
          <Styled.h2>Special Events</Styled.h2>

          <Flex sx={{ flexWrap: 'wrap' }}>
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

// <Box
//   key={recurringEvent._id}
//   sx={{
//     margin: ['1%'],
//     width: ['48%', '32%', '23%', '20%'],
//     display: 'flex',
//     flexDirection: 'column',
//   }}>
//   <Image src={imageurl} />
//   <Flex
//     sx={{
//       flexGrow: '1',
//       paddingTop: 2,
//       paddingBottom: 2,
//       flexDirection: ['column', 'row'],
//     }}>
//     <Box
//       sx={{
//         textAlign: ['left', 'center'],
//         maxWidth: '50px',
//         width: '40%',
//         paddingRight: 2,
//         marginBottom: [2, 0],
//       }}>
//       <Text
//         sx={{
//           fontSize: 3,
//           color: 'primary',
//           fontWeight: 'bolder',
//           width: '100%',
//         }}>
//         {`${moment(starts).format('DD')}`}
//       </Text>
//       <Text sx={{ textTransform: 'uppercase' }}>
//         {`${moment(starts).format('MMM')}`}
//       </Text>
//     </Box>
//     <Box>
//       <Text
//         sx={{
//           fontSize: 3,
//           textTransform: 'capitalize',
//         }}>
//         {name}
//       </Text>
//     </Box>
//   </Flex>
//   <Button
//     onClick={() => {
//       setEvents({ ...events, modalShowing: recurringEvent._id })
//     }}
//     sx={{ marginTop: 3, cursor: 'pointer' }}>
//     See More
//   </Button>

//   <EventsModal
//     slug={slug}
//     recurringEvent={recurringEvent}
//     modalShowing={recurringEvent._id === events.modalShowing}
//     closeModal={closeModal}
//   />
// </Box>
