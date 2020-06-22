/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import Shout from '../components/Shout'
import About from '../components/About'
import Gallery from '../components/gallery/Gallery'
import Hours from '../components/hours/Hours'
import Contact from '../components/contact/Contact'
export default function Home({ data }) {
  // desctructing all variables for use.
  const {
    gonationID,
    hasAbout,
    hasMenu,
    hasShout,
    hasEvents,
    hasGallery,
    hasHours,
    hasContact,
  } = data.allGoNationData.edges[0].node
  const {
    description,
    contact,
    hours,
  } = data.allGoNationBusinessData.edges[0].node.publishableData
  const { avatar } = data.allGoNationBusinessData.edges[0].node

  return (
    <>
      <div sx={{ backgroundColor: 'primary', padding: [1, 4] }}>
        {hasAbout ? (
          <About
            gonationID={gonationID}
            description={description}
            logo={avatar.image.cloudinaryId}
          />
        ) : null}
        {hasShout ? <Shout gonationID={gonationID} /> : null}

        {hasGallery ? <Gallery gonationID={gonationID} /> : null}

        {hasHours ? <Hours hours={hours} /> : null}

        {hasContact ? (
          <Contact gonationID={gonationID} contact={contact} />
        ) : null}
      </div>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allGoNationData {
      edges {
        node {
          gonationID
          hasAbout
          hasMenu
          hasShout
          hasEvents
          hasGallery
          hasHours
          hasContact
        }
      }
    }
    allGoNationBusinessData {
      edges {
        node {
          publishableData {
            description
            contact {
              facebook
              instagram
              phone
              url
            }
            hours {
              friday {
                close
                isClosed
                isOpen
                label
                open
              }
              monday {
                close
                isClosed
                isOpen
                label
                open
              }
              saturday {
                close
                isClosed
                label
                isOpen
                open
              }
              sunday {
                close
                isClosed
                isOpen
                label
                open
              }
              thursday {
                close
                isClosed
                isOpen
                label
                open
              }
              tuesday {
                close
                isClosed
                isOpen
                label
                open
              }
              wednesday {
                close
                isClosed
                isOpen
                label
                open
              }
            }
          }
          avatar {
            image {
              cloudinaryId
            }
          }
        }
      }
    }
  }
`
