/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react'
import { jsx, Box, Image, Flex, Text, Spinner } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
let axios = require('axios')
let jsonpAdapter = require('axios-jsonp')

const Shout = ({ gonationID, poweredID }) => {
  const [shout, setShout] = useState({
    shoutData: null,
    isLoading: true,
  })
  const [scrolled, SetScrolled] = useState(false)

  const scrollRef = useRef()
  scrollRef.current = scrolled

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70
      if (scrollRef.current !== show) {
        SetScrolled(show)
      }
    }

    document.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/shoutsnew/${poweredID}`,
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
    <>
      {!shout.isLoading && shout.shoutData ? (
        <Box variant={`shout.${!scrolled ? 'container' : 'containerScrolled'}`}>
          <Flex variant='shout.innerContainer'>
            {console.log(shout)}
            <Box variant='shout.imageContainer'>
              <Image
                src={`${shout.shoutData.imageBaseUrl}/${shout.shoutData.shout.image.image.cloudinaryId}`}
                variant='shout.shoutImage'
              />
            </Box>

            <Box variant='shout.content'>
              <Text variant='shout.title'>
                <FontAwesomeIcon icon={faComment} /> Recent Shout
              </Text>
              <Text variant='shout.text' sx={{ fontSize: 2, margin: 0 }}>
                {shout.shoutData.shout.text}
              </Text>
            </Box>
          </Flex>
        </Box>
      ) : (
        ''
      )}
    </>
  )
}

export default Shout
