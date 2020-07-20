const crypto = require('crypto')
const fetch = require('node-fetch')

// to prevent failures on build for empty fields or non existant data.
// we explicitly declare the scheme before hand and give it the option of null using the !!
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
  type goNationBusinessData implements Node @dontInfer{
    name: String
    slug: String
    publishableData: publishableData
    avatar: avatar
    location: location
  }

  type business {
    name: String
    slug: String
  }
  type location {
    address: address
  }

  type address {
    street: String
    indicator: String
    city: String
    state: String
    postalCode: String
    country: String
  }

  type publishableData {
    description: String
    contact: contact
    hours: hours
  }

  type hours {
    monday: [timeBlocks!]!
    tuesday: [timeBlocks!]!
    wednesday: [timeBlocks!]!
    thursday: [timeBlocks!]!
    friday: [timeBlocks!]!
    saturday: [timeBlocks!]!
    sunday: [timeBlocks!]!
  }


  type timeBlocks {
    close: String
    isClosed: Boolean
    isOpen: Boolean
    label: String
    open: String
  }

  type contact {
    facebook: String
    instagram: String
    twitter: String
    phone: String
    url: String
  }

  type avatar {
    image: image
  }

  type image {
    cloudinaryId: String
  }
`

  createTypes(typeDefs)
}

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  {
    gonationID,
    poweredID,
    seoKeywords,
    hasAbout,
    hasMenu,
    hasMenuImages,
    hasShout,
    hasEvents,
    hasGallery,
    hasContact,
    orderOnlineLink,
  }
) => {
  const { createNode } = actions

  const testNode = {
    // Required Fields
    id: `gallery-`,
    parent: `__SOURCE__`,
    internal: {
      type: 'goNationData',
    },
    gonationID,
    poweredID,
    seoKeywords,
    hasAbout,
    hasMenu,
    hasMenuImages,
    hasShout,
    hasEvents,
    hasGallery,
    hasContact,
    orderOnlineLink,
  }
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(testNode))
    .digest('hex')
  testNode.internal.contentDigest = contentDigest
  createNode(testNode)

  // ============================

  //   gets the business data by id from gonation and creates a graphql node to source from
  await fetch(
    `https://www.gonation.com/api/proxy/v2/businesses/${gonationID}`,
    {
      mode: 'cors',
      Accept: 'application/json',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const { business: businessData } = data
      // creates the graphql schema
      const goNationBusinessDataNode = {
        id: createNodeId(`goNationBusinessData`),
        parent: '__SOURCE__',
        children: [],
        internal: {
          type: `goNationBusinessData`,
          // mediaType: `text/html`,
          content: JSON.stringify(businessData),
          contentDigest: createContentDigest(businessData),
        },
      }
      const node = Object.assign({}, businessData, goNationBusinessDataNode)
      createNode(node)
    })
    .catch(e => {
      console.log('error : ', console.e)
    })
}
