import React from 'react'
import { Text, Box, Link } from 'theme-ui'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
import GoNationMan from '../icons/GoNationMan'

export default function SocialIcons({
  instagram,
  facebook,
  twitter,
  gonationSlug,
}) {
  return (
    <Box variant='socialIcons' className='socialIcons'>
      {facebook ? (
        <Link
          variant='socialIcons.link'
          href={facebook}
          target='_blank'
          rel='noreferrer'
        >
          <Facebook height={'30px'} width={'30px'} />
          <Text variant='socialIcons.text' className='socialIconText'>
            Facebook
          </Text>
        </Link>
      ) : (
        ''
      )}
      {instagram ? (
        <Link
          variant='socialIcons.link'
          href={instagram}
          target='_blank'
          rel='noreferrer'
        >
          <Instagram height={'30px'} width={'30px'} />
          <Text variant='socialIcons.text' className='socialIconText'>
            Instagram
          </Text>
        </Link>
      ) : (
        ''
      )}
      {twitter ? (
        <Link
          variant='socialIcons.link'
          href={twitter}
          target='_blank'
          rel='noreferrer'
        >
          <Twitter height={'30px'} width={'30px'} />
          <Text variant='socialIcons.text' className='socialIconText'>
            Twitter
          </Text>
        </Link>
      ) : (
        ''
      )}

      {gonationSlug ? (
        <Link
          variant='socialIcons.link'
          href={`https://www.gonation.com/place/${gonationSlug}/pulse`}
          target='_blank'
          rel='noreferrer'
        >
          <GoNationMan height={'30px'} width={'30px'} />
          <Text variant='socialIcons.text' className='socialIconText'>
            GoNation
          </Text>
        </Link>
      ) : (
        ''
      )}
    </Box>
  )
}
