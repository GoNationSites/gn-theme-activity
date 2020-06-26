import React from 'react'
import { jsx, Box, Image, Flex, Heading, Text, Styled } from 'theme-ui'
import GoNationMan from '../icons/GoNationMan'
export default function Footer({ businessName }) {
  return (
    <Flex
      sx={{
        backgroundColor: 'black',
        padding: 4,
        color: 'white',
        flexDirection: ['column', 'column', 'row'],
      }}>
      <Text sx={{ flexGrow: '1', marginTop: 2, marginBottom: 2 }}>
        © Copyright {new Date().getFullYear()}, {businessName}
      </Text>
      <Flex sx={{ alignItems: 'center', marginTop: 2, marginBottom: 2 }}>
        <GoNationMan
          color={'#FFF'}
          height={'20px'}
          width={'20px'}
          style={{ marginRight: '10px' }}
        />
        Local Powered By GoNation
      </Flex>
    </Flex>
  )
}
