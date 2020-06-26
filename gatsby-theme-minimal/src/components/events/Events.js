/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { Box, Image, Flex, Heading, Text, Button } from 'theme-ui'
import moment from 'moment'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons'
import EventsModal from './EventsModal'

let axios = require('axios')
let jsonpAdapter = require('axios-jsonp')

const Events = ({ gonationID }) => {
  const [events, setEvents] = useState({
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
        setEvents({ ...events, eventsData: res.data, isLoading: false })
      })
      .catch(e => {
        console.log('error : ', console.e)
        setEvents({ ...events, isLoading: false })
      })
  }, [])

  const closeModal = () => {
    console.log('close hit')
    setEvents({ ...events, modalShowing: '' })
  }

  return (
    <Box>
      {!events.isLoading && events.eventsData ? (
        <Box p={3} sx={{ boxShadow: '0 0 12px rgba(0,0,0,.3)' }}>
          {console.log(events.eventsData)}
          <h1>Events</h1>
          <Flex sx={{ flexWrap: 'wrap' }}>
            {events.eventsData.events.map(recurringEvent => {
              console.log(recurringEvent)
              const {
                name,
                starts,
                ends,
                description,
                imageurl,
              } = recurringEvent
              return (
                <Box
                  key={recurringEvent._id}
                  sx={{
                    margin: ['1%'],
                    width: ['48%', '32%', '23%', '20%'],
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Image src={imageurl} />
                  <Flex
                    sx={{
                      flexGrow: '1',
                      paddingTop: 2,
                      paddingBottom: 2,
                      flexDirection: ['column', 'row'],
                    }}>
                    <Box
                      sx={{
                        textAlign: ['left', 'center'],
                        maxWidth: '50px',
                        width: '40%',
                        paddingRight: 2,
                        marginBottom: [2, 0],
                      }}>
                      <Text
                        sx={{
                          fontSize: 3,
                          color: 'primary',
                          fontWeight: 'bolder',
                          width: '100%',
                        }}>
                        {`${moment(starts).format('DD')}`}
                      </Text>
                      <Text sx={{ textTransform: 'uppercase' }}>
                        {`${moment(starts).format('MMM')}`}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        sx={{
                          fontSize: 3,
                          textTransform: 'capitalize',
                        }}>
                        {name}
                      </Text>
                      {/* <Text>{description}</Text> */}
                    </Box>
                  </Flex>
                  <Button
                    onClick={() => {
                      setEvents({ ...events, modalShowing: recurringEvent._id })
                    }}
                    sx={{ marginTop: 3, cursor: 'pointer' }}>
                    See More
                  </Button>

                  <EventsModal
                    recurringEvent={recurringEvent}
                    modalShowing={recurringEvent._id === events.modalShowing}
                    closeModal={closeModal}
                  />
                </Box>
              )
            })}
          </Flex>
        </Box>
      ) : (
        ''
      )}
    </Box>
  )
}

export default Events
