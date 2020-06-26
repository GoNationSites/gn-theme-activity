import React from 'react'
import { Flex, Box, Heading } from 'theme-ui'

export default function GalleryAlbums({ galleryData, setGalleryData }) {
  return (
    <Flex sx={{ width: '100%', flexWrap: 'wrap' }}>
      {galleryData.albums.items.map(album => {
        const { id, name } = album.album
        const { images } = album

        return (
          <Box
            sx={{
              width: ['100%', '48%', '24%'],
              textAlign: 'center',
              margin: '1%',
              height: '300px',
              display: 'flex',
              cursor: 'pointer',
            }}
            key={id}
            onClick={() =>
              setGalleryData({ ...galleryData, albumOpenID: album.album.id })
            }>
            <div
              style={{
                backgroundImage: `url('https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${images[0].cloudinaryId}')`,
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
              }}>
              <Heading sx={{ color: 'white' }}>{name}</Heading>
            </div>
          </Box>
        )
      })}
    </Flex>
  )
}
