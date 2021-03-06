import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
      timeToRead
    }
  }
`
