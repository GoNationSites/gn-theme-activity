import React from 'react'
import { Flex, Text } from 'theme-ui'
import GoNationMan from '../icons/GoNationMan'
import GoNationPoweredBy from '../icons/GoNationPoweredBy'
export default function Footer({ businessName }) {
  return (
    <Flex variant='footer'>
      <Text
        variant='default'
        sx={{ flexGrow: '1', marginTop: 2, marginBottom: 2, color: 'light' }}>
        © Copyright {new Date().getFullYear()}, {businessName}
      </Text>
      <a href='https://www.gonation.com/' target='_blank'>
        <Flex sx={{ alignItems: 'center', marginTop: 2, marginBottom: 2 }}>
          <GoNationPoweredBy />
          {/* <GoNationMan
            color={'#FFF'}
            height={'20px'}
            width={'20px'}
            style={{ marginRight: '10px' }}
          />
          <Text sx={{ marginBottom: 0, color: 'light' }} variant='default'>
            Local Powered By GoNation
          </Text> */}
        </Flex>
      </a>
    </Flex>
  )
}
