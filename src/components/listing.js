import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

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

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, .05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: .8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <Post key={node.id}>
          <h2>
            <Link to={`/posts${node.fields.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>{node.frontmatter.date}</p>
          <p>
            {node.excerpt}
          </p>
          <Link className="read-more" to={`/posts${node.fields.slug}`}>Read More</Link>
        </Post>
      ))
    )}/>
)

export default Listing