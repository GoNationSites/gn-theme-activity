/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useEffect, useState } from "react"
import { Box, Image, Flex, Heading, Text } from "theme-ui"
let axios = require("axios")
let jsonpAdapter = require("axios-jsonp")

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
        console.log("error : ", console.e)
        setShout({ ...shout, isLoading: false })
      })
  }, [])
  return (
    <Box p={3} bg="background">
      {!shout.isLoading ? (
        <Flex
          sx={{ boxShadow: "0 0 12px rgba(0,0,0,.3)", padding: 3 }}>
          <Box
            sx={{
              width: "25%",
            }}>
            <Image
              src={`${shout.shoutData.imageBaseUrl}/${shout.shoutData.shout.image.image.cloudinaryId}`}
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Box sx={{ flex: 1, paddingX: 2 }}>
            <Heading as="h2">Recent Shout</Heading>
            <Text>{shout.shoutData.shout.text}</Text>
          </Box>
        </Flex>
      ) : (
          <p>loading...</p>
        )}
    </Box>
  )
}

export default Shout
