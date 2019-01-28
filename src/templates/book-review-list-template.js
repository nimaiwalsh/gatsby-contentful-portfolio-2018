import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BookListing from '../components/ListingBook/BookListing'
import FadeInUp from '../components/FadeInUp'
import Pagination from '../components/Pagination'

const BookReviews = ({ data, pageContext }) => {

  return (
    <Layout>
      <FadeInUp>
        <section>
          <h1>Book reviews</h1>
          {data.allContentfulBookReview.edges.map(({node}) => (
            <BookListing book={node} key={node.id}/>
          ))}
          
          <Pagination pageContext={pageContext}/>
        </section>
      </FadeInUp>
    </Layout>
  )
}

export default BookReviews

export const query = graphql`
  query BookReviewList($skip: Int!, $limit: Int!) {
    allContentfulBookReview(
      sort: { fields: [createdAt], order: DESC },
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
