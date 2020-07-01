import React from 'react'
import { Flex, Text } from 'theme-ui'
import GoNationMan from '../icons/GoNationMan'
export default function Footer({ businessName }) {
  return (
    <Flex
      sx={{
        backgroundColor: 'black',
        padding: 4,
        paddingBottom: 5,
        flexDirection: ['column', 'column', 'row'],
      }}>
      <Text
        variant='default'
        sx={{ flexGrow: '1', marginTop: 2, marginBottom: 2, color: 'light' }}>
        © Copyright {new Date().getFullYear()}, {businessName}
      </Text>
      <Flex sx={{ alignItems: 'center', marginTop: 2, marginBottom: 2 }}>
        <GoNationMan
          color={'#FFF'}
          height={'20px'}
          width={'20px'}
          style={{ marginRight: '10px' }}
        />
        <Text sx={{ marginBottom: 0, color: 'light' }} variant='default'>
          Local Powered By GoNation
        </Text>
      </Flex>
    </Flex>
  )
}
