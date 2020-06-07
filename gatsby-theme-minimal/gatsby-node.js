const crypto = require("crypto")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { gonationID }
) => {
  const { createNode } = actions

  {
    const testNode = {
      // Required Fields
      id: `gallery-`,
      parent: `__SOURCE__`,
      internal: {
        type: "TestData",
      },
      gonationID,
    }
    const contentDigest = crypto
      .createHash("md5")
      .update(JSON.stringify(testNode))
      .digest("hex")
    testNode.internal.contentDigest = contentDigest
    createNode(testNode)
  }
}
