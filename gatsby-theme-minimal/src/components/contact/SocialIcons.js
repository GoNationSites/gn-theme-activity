import React from 'react'
import { Box, Image, Flex, Heading, Text } from 'theme-ui'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
export default function SocialIcons({ instagram, facebook }) {
  return (
    <div>
      <Text>
        <a href={facebook} target='_blank'>
          <Facebook
            color={'black'}
            height={'30px'}
            width={'30px'}
            style={{ margin: '10px' }}
          />
        </a>
        <a href={instagram} target='_blank'>
          <Instagram
            color={'black'}
            height={'30px'}
            width={'30px'}
            style={{ margin: '10px' }}
          />
        </a>
      </Text>
    </div>
  )
}
