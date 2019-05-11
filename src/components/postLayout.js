import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from "gatsby";

export default class postLayout extends Component {
  render() {
    return (
      <Layout>
        <h1>Post Layout</h1>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: {
      path:{
        eq: "post-3"
      }
    }) {
      frontmatter {
        title
        path
      }
      html
      timeToRead
    }
  }
`
