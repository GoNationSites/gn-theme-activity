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
            color={'#ff6347'} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
            height={'30px'}
            width={'30px'}
            style={{ margin: '10px' }}
          />
        </a>
        <a href={instagram} target='_blank'>
          <Instagram
            color={'#ff6347'} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
            height={'30px'}
            width={'30px'}
            style={{ margin: '10px' }}
          />
        </a>
      </Text>
    </div>
  )
}
