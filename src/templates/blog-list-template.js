import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import PostListing from '../components/PostListing'
import Pagination from '../components/Pagination'

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <FadeInUp>
        <div className="w-full">
          <section className="pb-4 relative">
            <h1>Blog</h1>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <PostListing post={node} key={node.id} />
            ))}
          </section>
          <Pagination pageContext={pageContext} />
        </div>
      </FadeInUp>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query PostList2($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { createdAt: DESC }
      limit: $limit,
      skip: $skip,
    ) {
      totalCount
      edges {
        node {
          id
          createdAt(formatString: "DD MMM YYYY")
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
