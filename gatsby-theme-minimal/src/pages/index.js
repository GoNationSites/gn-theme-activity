/** @jsx jsx */
import React from 'react'
import '../index.css'
import { graphql } from 'gatsby'
import { jsx, Box, Image, Flex, Heading, Text, Styled, Link } from 'theme-ui'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import Shout from '../components/Shout'
import About from '../components/About'
import Hours from '../components/hours/hoursOld'
import Contact from '../components/contact/Contact'
import Footer from '../components/Footer/Footer'
import CtaWidget from '../components/ui/CtaWidget'
import Logo from '../components/logo/Logo'
import Cover from '../components/cover/Cover'
import ContactDetails from '../components/contact/ContactDetails'
import SocialIcons from '../components/contact/SocialIcons'
import ContactForm from '../components/contact/ContactForm'
import MenuLink from '../components/menu/MenuLink'
import OrderOnline from '../components/ui/OrderOnline'

export default function Home({ data }) {
  // ! destructing all variables for use.
  // ? ==========================================
  // ? =====  Data From Gatsby Config File  =====
  // ? ==========================================

  const {
    gonationID,
    poweredID,
    seoKeywords,
    hasHeroTitle,
    hasAbout,
    // hasMenu,
    // hasMenuImages,
    hasShout,
    // hasEvents,
    // hasGallery,
    hasContact,
    orderOnlineLink,
  } = data.allGoNationData.edges[0].node

  // ? ==========================================
  // ? ======  Data From Gonation Business  =====
  // ? ==========================================

  const businessData = data.allGoNationBusinessData.edges[0].node

  const {
    name: businessName,
    slug,
    avatar: {
      image: { cloudinaryId: avatarCloudinaryId },
    },
    cover: {
      image: { cloudinaryId: coverCloudinaryId },
    },
    location,
    publishableData,
  } = businessData

  const { description, contact, hours } = publishableData

  const { facebook, instagram, twitter } = contact

  const {
    street,
    indicator,
    city,
    state,
    postalCode,
    country,
  } = location.address

  // ? ==========================================
  // ? ===========  Rendering JSX  ==============
  // ? ==========================================

  return (
    <>
      <SEO
        title={businessName}
        description={description}
        keywords={seoKeywords}
      />

      {console.log(data.allGoNationBusinessData.edges[0].node)}

      <Box variant='pageContainer'>
        <Box variant='column1'>
          <Logo logoImageId={avatarCloudinaryId} />

          {/* // ! Only Shows on Desktop */}
          <Box
            variant='contactInfo'
            sx={{ display: ['none', '', '', 'block'] }}>
            <Text variant='contactInfo.title' as='h3'>
              Contact Us
            </Text>

            <ContactDetails
              street={street}
              indicator={indicator}
              city={city}
              state={state}
              postalCode={postalCode}
              country={country}
              phone={contact.phone}
            />

            <SocialIcons
              facebook={facebook}
              instagram={instagram}
              twitter={twitter}
              gonationSlug={slug}
            />
          </Box>
          {/* // ! ================================ */}
        </Box>

        <Box variant='column2'>
          <Cover coverImageId={coverCloudinaryId} />

          {hasShout ? (
            <Shout gonationID={gonationID} poweredID={poweredID} />
          ) : null}

          <Box variant='contentBoxesLinks'>
            <MenuLink gonationSlug={slug} />

            {orderOnlineLink && (
              <OrderOnline orderOnlineLink={orderOnlineLink} />
            )}
          </Box>

          {hasAbout ? (
            <About gonationID={gonationID} description={description} />
          ) : null}

          {/* // ! Only Shows on Mobile and Tablet */}
          <Box variant='contactInfo' sx={{ display: ['', '', '', 'none'] }}>
            <Text variant='contactInfo.title' as='h3'>
              Contact Us
            </Text>

            <ContactDetails
              street={street}
              indicator={indicator}
              city={city}
              state={state}
              postalCode={postalCode}
              country={country}
              phone={contact.phone}
            />

            <SocialIcons
              facebook={facebook}
              instagram={instagram}
              twitter={twitter}
              gonationSlug={slug}
            />
          </Box>
          {/* // ! ================================ */}

          <ContactForm />

          <Hours hours={hours} />

          <Footer businessName={businessName} />
        </Box>
      </Box>

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

{
  /* {hasEvents ? (
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
        )} */
}

{
  /* {hasGallery ? <Gallery gonationID={gonationID} /> : null} */
}
