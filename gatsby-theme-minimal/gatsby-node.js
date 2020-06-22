const crypto = require('crypto')
const fetch = require('node-fetch')

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  {
    gonationID,
    hasAbout,
    hasMenu,
    hasShout,
    hasEvents,
    hasGallery,
    hasHours,
    hasContact,
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
    hasAbout,
    hasMenu,
    hasShout,
    hasEvents,
    hasGallery,
    hasHours,
    hasContact,
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
