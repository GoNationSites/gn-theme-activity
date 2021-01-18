import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation'
import Hero from '../components/hero/hero'
import CTASection from '../components/CTASection'
export default function Home({ data }) {
  // desctructing all variables for use.
  const {
    name: businessName,
    slug,
  } = data.allGoNationBusinessData.edges[0].node
  const {
    gonationID,
    poweredID,
    seoKeywords,
    hasHeroTitle,
    hasAbout,
    hasMenu,
    hasMenuImages,
    hasShout,
    hasEvents,
    hasGallery,
    hasContact,
    orderOnlineLink,
  } = data.allGoNationData.edges[0].node
  const {
    description,
    contact,
    hours,
  } = data.allGoNationBusinessData.edges[0].node.publishableData
  const { avatar, cover } = data.allGoNationBusinessData.edges[0].node

  const {
    street,
    indicator,
    city,
    state,
    postalCode,
    country,
  } = data.allGoNationBusinessData.edges[0].node.location.address

  return (
    <>
      <Navigation
        hasAbout={hasAbout}
        hasMenu={hasMenu}
        hasMenuImages={hasMenuImages}
        hasShout={hasShout}
        hasEvents={hasEvents}
        hasGallery={hasGallery}
        hasContact={hasMenuImages}
        Logo={avatar.image.cloudinaryId}
        contact={contact}
      />

      <Hero
        businessName={businessName}
        logo={avatar.image.cloudinaryId}
        hasHeroTitle={hasHeroTitle}
        heroImage={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${cover.image.cloudinaryId}`}
      />

      <CTASection
        title={'Del Italia Experience'}
        subtitle={'Modenza Italian'}
        description={
          "best italian food in utah, fresh, fragrent and great value, don't miss out on our special deals. come see our menu now. Cheese, tomato, beef, sausage. all the good stuff."
        }
        ctaButtonText={'See Our Menu'}
        ctaLink={'menu'}
        imageLink={`https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
      />
    </>
  )
}

export const query = graphql`
  query myQueryAndMyQuery {
    allGoNationData {
      edges {
        node {
          gonationID
          poweredID
          seoKeywords
          hasHeroTitle
          hasAbout
          hasMenu
          hasMenuImages
          hasShout
          hasEvents
          hasGallery
          hasContact
          orderOnlineLink
        }
      }
    }
    allGoNationBusinessData {
      edges {
        node {
          name
          slug
          location {
            address {
              street
              indicator
              city
              state
              postalCode
              country
            }
          }
          publishableData {
            description
            contact {
              facebook
              instagram
              twitter
              phone
              url
            }
            hours {
              monday {
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
                label
                isOpen
                open
              }
              thursday {
                close
                isClosed
                isOpen
                label
                open
              }
              friday {
                close
                isClosed
                isOpen
                label
                open
              }
              saturday {
                close
                isClosed
                isOpen
                label
                open
              }
              sunday {
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
          cover {
            image {
              cloudinaryId
            }
          }
        }
      }
    }
  }
`
