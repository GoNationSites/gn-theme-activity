import React from 'react'
import { Text } from 'theme-ui'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
export default function SocialIcons({ instagram, facebook, twitter }) {
  return (
    <div>
      {facebook ? (
        <a href={facebook} target='_blank'>
          <Facebook height={'30px'} width={'30px'} style={{ margin: '10px' }} />
        </a>
      ) : (
        ''
      )}
      {instagram ? (
        <a href={instagram} target='_blank'>
          <Instagram
            height={'30px'}
            width={'30px'}
            style={{ margin: '10px' }}
          />
        </a>
      ) : (
        ''
      )}
      {twitter ? (
        <a href={twitter} target='_blank'>
          <Twitter
            color={'#ff6347'} // these colours are currently hard coded outside of theme ui. will need to bring them in as icons instead of svgs.
            height={'30px'}
            width={'30px'}
            style={{ margin: '10px' }}
          />
        </a>
      ) : (
        ''
      )}
    </div>
  )
}
