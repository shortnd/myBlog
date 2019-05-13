import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default class freeformLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <>
        <Layout>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </Layout>
      </>
    )
  }
}

export const query = graphql`
  query FreeFormPostQuery($slug: String!) {
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
