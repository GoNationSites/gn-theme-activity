/** @jsx jsx */
import React from 'react'
import '../index.css'
import { graphql } from 'gatsby'
import { jsx, Box, Image, Flex, Heading, Text, Styled } from 'theme-ui'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import Shout from '../components/Shout'
import About from '../components/About'
import Gallery from '../components/gallery/Gallery'
import Events from '../components/events/Events'
import Hours from '../components/hours/Hours'
import Contact from '../components/contact/Contact'
import Footer from '../components/Footer/Footer'
import CtaWidget from '../components/ui/CtaWidget'
import Menus from '../components/menu/Menus'

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
  const { avatar } = data.allGoNationBusinessData.edges[0].node

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
      <SEO
        title={businessName}
        description={description}
        keywords={seoKeywords}
      />
      <Hero
        hasHeroTitle={hasHeroTitle}
        logo={avatar.image.cloudinaryId}
        businessName={businessName}
      />

      {hasShout ? (
        <Shout gonationID={gonationID} poweredID={poweredID} />
      ) : null}

      <Box
        p={3}
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxWidth: '991px',
          margin: '0 auto',
        }}>
        {hasAbout ? (
          <About gonationID={gonationID} description={description} />
        ) : null}

        {hasEvents ? (
          <Events gonationID={gonationID} slug={slug} poweredID={poweredID} />
        ) : null}

        {hasMenu ? (
          <Menus
            gonationID={gonationID}
            hasMenuImages={hasMenuImages}
            poweredID={poweredID}
          />
        ) : (
          ''
        )}

        {hasGallery ? <Gallery gonationID={gonationID} /> : null}
      </Box>
      {hasContact ? (
        <Contact
          gonationID={gonationID}
          contact={contact}
          street={street}
          indicator={indicator}
          city={city}
          state={state}
          postalCode={postalCode}
          country={country}
          address={data.allGoNationBusinessData.edges[0].node.location.address}
          businessName={businessName}
          hours={hours}
        />
      ) : null}

      <Footer businessName={businessName} />
      <CtaWidget
        businessName={businessName}
        phone={contact.phone}
        street={street}
        city={city}
        state={state}
        postalCode={postalCode}
        country={country}
        orderOnlineLink={orderOnlineLink}
      />
    </>
  )
}

export const query = graphql`
  query MyQuery {
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
        }
      }
    }
  }
`
