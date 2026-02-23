import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import BookListing from '../components/BookListing'
import Pagination from '../components/Pagination'

const BookReviews = ({ data, pageContext }) => {

  return (
    <Layout>
      <FadeInUp>
        <div className="w-full">
          <section className="pb-4 relative">
            <h1>Book reviews</h1>
            {data.allContentfulBookReview.edges.map(({node}) => (
              <BookListing book={node} key={node.id}/>
            ))}

            <Pagination pageContext={pageContext}/>
          </section>
        </div>
      </FadeInUp>
    </Layout>
  )
}

export default BookReviews

export const query = graphql`
  query BookReviewList($skip: Int!, $limit: Int!) {
    allContentfulBookReview(
      sort: { createdAt: DESC },
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          createdAt(formatString: "DD MMM YYYY")
          title
          slug
          author
          summary {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
