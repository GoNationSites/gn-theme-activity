/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Text, Box, Flex } from '@theme-ui/components'
import React, { useState } from 'react'
import MenuItem from './menuItem'
// import { checkPropTypes } from 'prop-types'

const AllIn = ({ menuData, setModalActive, onBackClick, hasMenuImages }) => {
  const [withDollar, setWithDollar] = useState(false)

  // Takes Nested sections and and gets the nested child items and child sections
  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ('item' in curr) {
          acc.childItems.push(curr)
        } else if ('section' in curr) {
          acc.childSections.push(curr)
        }
        return acc
      },
      { childItems: [], childSections: [] }
    )
  }

  // Recursively loop through menus and nested menus
  const renderMenu = (menu, nested, idx) => {
    const { section } = menu
    const parsedSection = splitSectionChildren(menu)
    console.log(parsedSection)
    return (
      <Box>
        {/* header with section name and description */}

        <Box sx={{ marginBottom: '5' }}>
          <Text variant='headingMenuSection' sx={{ textAlign: 'center' }}>
            {section.name}
          </Text>

          <Flex
            sx={{ flexWrap: 'wrap' }}
            className='columns is-multiline columns__menu-item is-marginless'>
            {parsedSection.childItems.map(({ item }) => {
              return (
                <MenuItem
                  type={'default'}
                  withDollar={withDollar}
                  item={item}
                  hasMenuImages={hasMenuImages}
                />
              )
            })}
          </Flex>
        </Box>
        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) =>
          renderMenu(childSection, true, idx)
        )}
      </Box>
    )
  }
  return (
    <Box sx={{ border: '2px solid black', padding: [2, 3] }}>
      {onBackClick ? (
        <a
          className='back-to-menu-btn button is-dark'
          onClick={() => onBackClick()}>
          Back To Menu
        </a>
      ) : (
        ''
      )}

      {menuData.map(item => {
        return renderMenu(item)
      })}
    </Box>
  )
}

export default AllIn
