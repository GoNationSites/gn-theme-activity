/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import Shout from "../components/Shout"

export default function Home({ data }) {
  return (
    <>
      <div sx={{ backgroundColor: 'primary', padding: [1, 4] }}>
        <Shout gonationID={data.testData.gonationID} />
      </div>

    </>
  )
}

export const query = graphql`
  query MainQuery {
    testData {
      gonationID
    }
  }
`
