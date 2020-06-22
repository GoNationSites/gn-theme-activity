import React from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'

export default function Album({ images, backToAlbumView }) {
  return (
    <div>
      <button
        onClick={() => {
          backToAlbumView()
        }}>
        Back to Albums
      </button>
      {console.log(images)}

      {images.map(image => (
        <Image
          src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${image.cloudinaryId}`}
        />
      ))}
    </div>
  )
}
