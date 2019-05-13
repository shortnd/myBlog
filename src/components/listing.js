import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const LISTING_QUERY = graphql`
query BlogPostsListing {
  allMarkdownRemark(limit: 10, sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          slug
        }
      }
    }
  }
}

`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <time>{node.frontmatter.date}</time>
          <p>
            {node.excerpt}
          </p>
          <Link to={`/posts${node.fields.slug}`}>Read More</Link>
        </article>
      ))
    )}/>
)

export default Listing