import React from 'react'

export default function GalleryAlbums({ galleryData, setGalleryData }) {
  return (
    <div>
      {galleryData.albums.items.map(album => {
        const { id, name } = album.album
        const { images } = album

        return (
          <div
            key={id}
            onClick={() =>
              setGalleryData({ ...galleryData, albumOpen: images })
            }>
            {name}
          </div>
        )
      })}
    </div>
  )
}
