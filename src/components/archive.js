import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
  allMarkdownRemark(limit:5, sort: {
    order:DESC,
    fields:[frontmatter___path]
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h2>Archive</h2>
          <ul>
            {allMarkdownRemark.edges.map((edge) => (
              <li key={edge.node.id}>
                <Link to={`/posts/${edge.node.frontmatter.path}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </>
    )}
    ></StaticQuery>
)

export default Archive