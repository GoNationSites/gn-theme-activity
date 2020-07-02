/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { jsx, Box, Image, Flex, Text, Spinner } from 'theme-ui'
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
    <Box variant='shout.container'>
      {!shout.isLoading && shout.shoutData ? (
        <Flex variant='shout.innerContainer'>
          <Box variant='shout.imageContainer'>
            <Image
              src={`${shout.shoutData.imageBaseUrl}/${shout.shoutData.shout.image.image.cloudinaryId}`}
              variant='shout.shoutImage'
            />
          </Box>

          <Box variant='shout.content'>
            <Text variant='headingLight'>
              <FontAwesomeIcon icon={faComment} /> Recent Shout
            </Text>
            <Text variant='headingLight' sx={{ fontSize: 2, margin: 0 }}>
              {shout.shoutData.shout.text}
            </Text>
          </Box>
        </Flex>
      ) : (
        <Spinner />
      )}
    </Box>
  )
}

export default Shout
