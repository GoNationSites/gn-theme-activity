/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import Shout from "../components/Shout"

export default function Home({ data }) {
  return (
    <>
      <Shout gonationID={data.testData.gonationID} />
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
