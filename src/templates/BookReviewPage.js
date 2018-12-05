import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class BookReview extends Component {
  render() {
    const { data } = this.props
    //Loading status
    if (!data) {
      return <article>Loading...</article>
    }
    console.log(data)
    return (
      <Layout>
        <Link to="/blog">Back</Link>
        <article>
          Book Review
        </article>
      </Layout>
    )
  }
}

export default BookReview

//The slug from this page is used to retrieve the correct data
//The $slug argument is passed from the create page 'context' from gatsby-node.js
export const query = graphql`
  query BookReview($slug: String!) {
    contentfulBookReview(slug: { eq: $slug }) {
      id
      createdAt
      title
      slug
      author
      link
      summary {
        summary
      }
      body {
        body
      }
    }
  }
`
