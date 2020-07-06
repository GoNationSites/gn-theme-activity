import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Spinner } from 'theme-ui'
import GalleryAlbums from './GalleryAlbums'
import Album from './Album'

export default function Gallery({ gonationID }) {
  const [galleryData, setGalleryData] = useState({
    albums: null,
    isLoading: true,
    albumOpenID: '',
  })

  // fetch data from gonation and sets it to component state.
  const fetchData = async () => {
    await fetch(
      `https://www.gonation.com/api/proxy/v2/businesses/${gonationID}/albums`,
      {
        mode: 'cors',
        Accept: 'application/json',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(data =>
        setGalleryData({ ...galleryData, albums: data, isLoading: false })
      )
      .catch(e => {
        console.log('error : ', console.e)
        setGalleryData({ ...galleryData, isLoading: false })
      })
  }

  // back button to return to album view
  const backToAlbumView = () =>
    setGalleryData({ ...galleryData, albumOpenID: '' })

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  return (
    <>
      {/*  if data has arrived then load else show loading*/}
      {!galleryData.isLoading ? (
        <>
          {galleryData.albums.items.length ? (
            <Box variant='page.section'>
              <Text variant='sectionHeading'>Our Gallery</Text>
              <Flex>
                {/*  if No album is open, load the grid of albums. if one is open load that album */}
                {!galleryData.albumOpenID ? (
                  <GalleryAlbums
                    galleryData={galleryData}
                    setGalleryData={setGalleryData}
                  />
                ) : (
                  <Album
                    albumOpenID={galleryData.albumOpenID}
                    backToAlbumView={backToAlbumView}
                  />
                )}
              </Flex>
            </Box>
          ) : (
            ''
          )}
        </>
      ) : (
        <Box variant='spinnerContainer'>
          <Spinner />
        </Box>
      )}
    </>
  )
}
