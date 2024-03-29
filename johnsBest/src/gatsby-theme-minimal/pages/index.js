import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { Box, Text } from "theme-ui";
import SEO from "../../../../gatsby-theme-minimal/src/components/seo";
import Shout from "../../../../gatsby-theme-minimal/src/components/Shout";
import About from "../../../../gatsby-theme-minimal/src/components/About";
import Hours from "../../../../gatsby-theme-minimal/src/components/hours/hoursOld";
import Footer from "../../../../gatsby-theme-minimal/src/components/Footer/Footer";
import CtaWidget from "../../../../gatsby-theme-minimal/src/components/ui/CtaWidget";
import Logo from "../../../../gatsby-theme-minimal/src/components/logo/Logo";
import Cover from "../../../../gatsby-theme-minimal/src/components/cover/Cover";
import ContactDetails from "../../../../gatsby-theme-minimal/src/components/contact/ContactDetails";
import SocialIcons from "../../../../gatsby-theme-minimal/src/components/contact/SocialIcons";
import ContactForm from "../../../../gatsby-theme-minimal/src/components/contact/ContactForm";
import MenuLink from "../../../../gatsby-theme-minimal/src/components/menu/MenuLink";
import OrderOnline from "../../../../gatsby-theme-minimal/src/components/ui/OrderOnline";
import getMenu from "../../../../gatsby-theme-minimal/src/helpers/getMenu";
import WidgetButton from "../components/WidgetButton";
import "../index.css";

export default function Home({ data }) {
  // ! ==========================================
  // ! === destructing all variables for use ====
  // ! ==========================================

  // ? ==========================================
  // ? =====  Data From Gatsby Config File  =====
  // ? ==========================================

  const {
    gonationID,
    poweredID,
    seoKeywords,
    // hasHeroTitle,
    hasAbout,
    hasMenu,
    // hasMenuImages,
    hasShout,
    // hasEvents,
    // hasGallery,
    hasHours,
    // hasContact,
    orderOnlineLink,
  } = data.allGoNationData.edges[0].node;

  // ? ==========================================
  // ? ======  Data From Gonation Business  =====
  // ? ==========================================

  const businessData = data.allGoNationBusinessData.edges[0].node;

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
  } = businessData;

  const { description, contact, hours } = publishableData;

  const { facebook, instagram, twitter } = contact;

  const {
    street,
    indicator,
    city,
    state,
    postalCode,
    country,
  } = location.address;

  // ? ===================================
  // ? ===========  State   ==============
  // ? ===================================

  const [menuHasItems, setMenuHasItems] = useState(false);
  const [menuOrServices, setMenuOrServices] = useState("Menu");

  // ? ====================================
  // ? =========== Functions ==============
  // ? ====================================

  const checkForMenuItems = async () => {
    const data = await getMenu(poweredID);

    if (data?.length) {
      // *maps through powered lists and checks if there is any sections to show
      const checkIfListshaveSections = data.map((poweredList) => {
        return poweredList.inventory.length ? "hasItems" : "";
      });

      setMenuOrServices(data[0].menumask);

      // *checks if any of the powered sections have something to show then it will show it.
      if (checkIfListshaveSections.some((element) => element)) {
        setMenuHasItems(true);
      }
    }
  };

  const checkHours = () => {
    const hoursArray = Object.values(hours);

    return hoursArray
      .map((dayBlock) => {
        if (dayBlock?.length > 0) {
          return dayBlock[0]?.isClosed ? false : true;
        } else {
          return false;
        }
      })
      .some((element) => element);
  };

  // ? ==========================================
  // ? ===========  Rendering JSX  ==============
  // ? ==========================================

  useEffect(() => {
    checkForMenuItems();
    checkHours();
    return () => {};
  }, []);

  return (
    <>
      <SEO
        title={businessName}
        description={description}
        keywords={seoKeywords}
      />
      <Box variant="pageContainer" className="pageContainer">
        <Box variant="column1" className="column1">
          <Logo logoImageId={avatarCloudinaryId} />

          {/* // ! Only Shows on Desktop */}
          <Box
            variant="contactInfo"
            sx={{ display: ["none", "", "", "block"] }}
            className="contactInfo"
          >
            <Text variant="contactInfo.title" as="h3">
              Contact
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

        <Box variant="column2" className="column2">
          <Cover coverImageId={coverCloudinaryId} />

          <Box variant="column2.boxesContainers" className="boxesContainers">
            {hasShout && (
              <Shout gonationID={gonationID} poweredID={poweredID} />
            )}

            {(hasMenu && menuHasItems) || orderOnlineLink ? (
              <Box variant="contentBoxesLinks" className="contentBoxesLinks">
                {hasMenu && menuHasItems ? (
                  <MenuLink
                    gonationSlug={slug}
                    menuOrServices={menuOrServices}
                  />
                ) : (
                  ""
                )}

                {orderOnlineLink && (
                  <></>
                  // <OrderOnline orderOnlineName={"Order Online"} orderOnlineLink={orderOnlineLink} />
                )}
                {/* <WidgetButton /> */}
                <OrderOnline orderOnlineName={"Order Online"} orderOnlineLink={'https://slicelife.com/restaurants/ct/norwalk/06851/john-s-best-jr-pizza/menu'} />
              </Box>
            ) : (
              ""
            )}
            {/* ? so if about setting is true and the checks if there is an about to render */}
            {hasAbout && description !== null ? (
              <About gonationID={gonationID} description={description} />
            ) : null}

            {/* // ! Only Shows on Mobile and Tablet */}
            <Box variant="contactInfo" sx={{ display: ["", "", "", "none"] }}>
              <Text variant="contactInfo.title" as="h3">
                Contact
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

            {/* * check if hours is on and also if there are any days that is it open */}
            {hasHours && checkHours() ? <Hours hours={hours} /> : ""}

            <ContactForm />
            <Footer businessName={businessName} />
          </Box>
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
  );
}

export const query = graphql`
  query toniQuery {
    allGoNationData {
      edges {
        node {
          gonationID
          poweredID
          seoKeywords
          hasAbout
          hasMenu
          hasShout
          hasHours
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
`;
