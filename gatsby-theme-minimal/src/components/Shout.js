/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
let axios = require('axios')
let jsonpAdapter = require('axios-jsonp')

const Shout = ({ gonationID }) => {
  const [shout, setShout] = useState({
    shoutData: null,
    isLoading: true,
  })

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/shoutsnew/${gonationID}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        setShout({ ...shout, shoutData: res.data, isLoading: false })
      })
      .catch(e => {
        console.log('error : ', console.e)
        setShout({ ...shout, isLoading: false })
      })
  }, [])
  return (
    <Box
      sx={{
        marginBottom: 4,
        maxWidth: '600px',
        margin: '-50px auto 20px',
        bg: 'secondary',
        borderRadius: ['0px', '0px', '10px'],
        padding: 2,
      }}>
      {!shout.isLoading && shout.shoutData ? (
        <Flex sx={{ alignItems: 'stretch' }}>
          <Box
            sx={{
              display: 'flex',
              width: '25%',
            }}>
            <Image
              src={`${shout.shoutData.imageBaseUrl}/${shout.shoutData.shout.image.image.cloudinaryId}`}
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingX: 3,
            }}>
            <Text variant='headingLight'>
              <FontAwesomeIcon icon={faComment} /> Recent Shout
            </Text>
            <Text variant='headingLight' sx={{ fontSize: 2, margin: 0 }}>
              {shout.shoutData.shout.text}
            </Text>
          </Box>
        </Flex>
      ) : (
        ''
      )}
    </Box>
  )
}

export default Shout
