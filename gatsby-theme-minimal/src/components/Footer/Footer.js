import React from 'react'
import { Flex, Text } from 'theme-ui'
import GoNationPoweredBy from '../icons/GoNationPoweredBy'

export default function Footer({ businessName }) {
  return (
    <Flex variant='footer'>
      <Text
        variant='default'
        sx={{ flexGrow: '1', marginTop: 2, marginBottom: 2, color: 'light' }}>
        © Copyright {new Date().getFullYear()}, {businessName}
      </Text>
      <a
        href='https://www.gonation.com/'
        target='_blank'
        rel='noreferrer'
        ariaLabel='GoNation'>
        <Flex sx={{ alignItems: 'center', marginTop: 2, marginBottom: 2 }}>
          <GoNationPoweredBy />
        </Flex>
      </a>
    </Flex>
  )
}
