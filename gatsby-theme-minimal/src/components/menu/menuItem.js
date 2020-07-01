import React from 'react'
import { Image, Box, Flex, Text } from '@theme-ui/components'
import Price from './price'
import PriceWithVariants from './PriceWithVariants'
import camera from '../images/camera.svg'

const MenuItem = ({ item, type, withDollar, hasMenuImages }) => {
  const getMenuItemType = () => {
    switch (type) {
      case 'someCase':
        console.log('someCase selected')
      default:
        return defaultType()
    }
  }

  const defaultType = () => (
    <Flex sx={{ marginBottom: 3 }}>
      {hasMenuImages ? (
        item.photo_id ? (
          <Image
            sx={{ maxWidth: '30%', objectFit: 'cover' }}
            src={item.imageUrl}
            alt='Camera Icon'
          />
        ) : (
          <Image
            sx={{
              maxWidth: '30%',
              objectFit: 'contain',
              objectPosition: 'top',
            }}
            src={camera}
            alt='Camera Icon'
          />
        )
      ) : (
        ''
      )}
      <Box sx={{ padding: 2, flexGrow: '1' }}>
        {item.variants.length && item.variants[0].label === '' ? (
          <Flex>
            <Text variant='menuItemName'>{item.name}</Text>
            <Price withDollar={withDollar} variants={item.variants} toSide />
          </Flex>
        ) : (
          <Box>
            <Text variant='menuItemName'>{item.name}</Text>
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              toSide
            />
          </Box>
        )}
        <Text variant='menuItemDescription'>{item.desc}</Text>
      </Box>
    </Flex>
  )

  return (
    <Box
      sx={{ width: ['100%', '100%', '50%'] }}
      className={`menu-item ${item.photo_id ? 'item-has-img' : ''}`}>
      {getMenuItemType()}
    </Box>
  )
}

export default MenuItem
