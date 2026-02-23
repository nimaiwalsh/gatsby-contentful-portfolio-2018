import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import { PageWrapper, Section } from '../components/styles/StyledComponents'
import PostListing from '../components/PostListing'
import Pagination from '../components/Pagination'

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <FadeInUp>
        <PageWrapper>
          <Section>
            <h1>Blog</h1>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <PostListing post={node} key={node.id} />
            ))}
          </Section>
          <Pagination pageContext={ pageContext } />
        </PageWrapper>
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
