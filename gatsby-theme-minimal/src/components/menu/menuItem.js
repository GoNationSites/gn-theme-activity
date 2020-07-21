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
    <Flex variant='menu.menuItemInnerContainer'>
      {hasMenuImages ? (
        item.photo_id ? (
          <Image
            variant='menu.menuItemImage'
            src={item.imageUrl}
            alt='menu item'
          />
        ) : (
          ''
          // <Image
          //   variant='menu.menuItemDefaultImage'
          //   src={camera}
          //   alt='default menu item'
          // />
        )
      ) : (
        ''
      )}
      <Box variant='menu.menuItemContentContainer'>
        {/* if the variant length is one and no label then render without variants or if there are no variants */}
        {(item.variants.length === 1 && item.variants[0].label === '') ||
        item.variants.length === 0 ? (
          <Box>
            <Flex>
              <Text variant='menu.menuItemName'>{item.name}</Text>
              {/* if there is no variants then no price exists */}
              {item.variants.length !== 0 ? (
                <Price
                  withDollar={withDollar}
                  variants={item.variants}
                  toSide
                />
              ) : (
                ''
              )}
            </Flex>
            <Text variant='menu.menuItemDescription'>{item.desc}</Text>
          </Box>
        ) : (
          <Box>
            <Flex>
              <Text variant='menu.menuItemName'>{item.name}</Text>

              <Text variant='menu.menuItemPrice'>
                {/* if the first variant doesn't have a label then render it as a main overall price */}
                {item.variants[0].label === '' && item.variants[0].price
                  ? item.variants[0].price
                  : ''}
              </Text>
            </Flex>
            <Text variant='menu.menuItemDescription'>{item.desc}</Text>
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              toSide
            />
          </Box>
        )}
      </Box>
    </Flex>
  )

  return (
    <Box
      variant='menu.menuItemContainer'
      className={`menu-item ${item.photo_id ? 'item-has-img' : ''}`}>
      {getMenuItemType()}
    </Box>
  )
}

export default MenuItem
