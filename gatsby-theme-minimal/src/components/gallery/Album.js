import React, { useState, useEffect } from 'react'
import { Box, Image, Flex, Button } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

export default function Album({ albumOpenID, backToAlbumView }) {
  const [albumData, setAlbumData] = useState({
    albums: null,
    isLoading: true,
  })

  const fetchData = async () => {
    await fetch(
      `https://www.gonation.com/api/proxy/v2/albums/${albumOpenID}/images`,
      {
        mode: 'cors',
        Accept: 'application/json',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAlbumData({ ...albumData, albums: data, isLoading: false })
      })
      .catch(e => {
        console.log('error : ', console.e)
        setAlbumData({ ...albumData, isLoading: false })
      })
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        variant='primary'
        onClick={() => {
          backToAlbumView()
        }}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back to Albums
      </Button>
      <Flex
        sx={{
          flexWrap: 'wrap',
          alignItems: 'stretch',
          margin: '1rem auto',
        }}>
        {console.log(albumData)}
        {!albumData.isLoading
          ? albumData.albums.items.map(image => (
              <Image
                sx={{
                  width: ['50%', '33%', '25%', '20%', '12.5%'],
                  objectFit: 'cover',
                  height: '200px',
                }}
                key={image.cloudinaryId}
                src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${image.cloudinaryId}`}
              />
            ))
          : 'Loading...'}
      </Flex>
    </Box>
  )
}
