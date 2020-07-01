import React from 'react'
import { Text, Box, Flex } from '@theme-ui/components'
import ListBullet from '../ui/ListBullet'
const Price = ({ variants, withDollar, toSide }) => {
  const renderPrices = () => (
    <>
      {console.log('no variants')}
      {variants[0].labelTitle ? (
        <Text variant='menuItemPriceLabel'>{variants[0].labelTitle}</Text>
      ) : (
        ''
      )}
      <Box sx={{ marginBottom: 2 }}>
        <Text variant='menuItemPriceLabel'>{variants[0].label}</Text>{' '}
        <Text variant='menuItemPrice'>
          {withDollar ? '$' : ''}
          {variants[0].price}
        </Text>
      </Box>
    </>
  )
  return <Box sx={{ flexGrow: '1', marginLeft: 3 }}>{renderPrices()}</Box>
}

export default Price
