import React from 'react'
import { Flex, Box, Heading } from 'theme-ui'

export default function GalleryAlbums({ galleryData, setGalleryData }) {
  return (
    <Flex variant='gallery.albumsContainer'>
      {galleryData.albums.items.map(album => {
        const { id, name } = album.album
        const { images } = album

        return (
          <Flex
            variant='gallery.albumsCTA'
            sx={{
              backgroundImage: `url('https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${images[0].cloudinaryId}')`,
            }}
            ariaLabel='section'
            key={id}
            onClick={() => setGalleryData({ ...galleryData, albumOpenID: id })}>
            <Heading variant='gallery.albumTitle'>{name}</Heading>
          </Flex>
        )
      })}
    </Flex>
  )
}
