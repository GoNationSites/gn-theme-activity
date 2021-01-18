import React from 'react'
import Navigation from '../components/Navigation'
import MenuV1 from '../components/menus-v1/Menu'
import MenuV2 from '../components/menus-v2/Menu'
export default function menu({ data }) {
  const { poweredID, hasMenu, menuVersion } = data.allGoNationData.edges[0].node

  const checkForVersion = version => {
    switch (version) {
      case 'v1':
        return (
          <MenuV1
            id={poweredID}
            poweredListID={'powered-list-1'}
            mode={'cellsThenAllInOnce'}
          />
        )

      case 'v2':
        return (
          <MenuV2
            id={poweredID}
            poweredListID={'powered-list-1'}
            mode={'cellsThenAllInOnce'}
          />
        )

      default:
        break
    }
  }

  return <div>{checkForVersion(menuVersion)}</div>
}

export const query = graphql`
  query myQuery {
    allGoNationData {
      edges {
        node {
          gonationID
          poweredID
          seoKeywords
          hasHeroTitle
          hasAbout
          hasMenu
          menuVersion
          hasMenuImages
          hasShout
          hasEvents
          hasGallery
          hasContact
          orderOnlineLink
        }
      }
    }
  }
`
