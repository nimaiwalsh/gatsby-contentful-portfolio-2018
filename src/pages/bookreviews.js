import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BookListing from '../components/ListingBook/BookListing'
import FadeInUp from '../components/FadeInUp'

const BookReviews = ({ data }) => {
  return (
    <Layout>
      <FadeInUp>
        <section>
          <h1>Book reviews</h1>
          {data.allContentfulBookReview.edges.map(({node}) => (
            <BookListing book={node} key={node.id}/>
          ))}
        </section>
      </FadeInUp>
    </Layout>
  )
}

export default BookReviews

export const query = graphql`
  query BookList {
    allContentfulBookReview {
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
