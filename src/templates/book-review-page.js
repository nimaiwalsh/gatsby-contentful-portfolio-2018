import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'

class BookReview extends Component {
  render() {
    const {
      createdAt,
      title,
      author,
      link,
      isbn,
      summary,
      body,
    } = this.props.data.contentfulBookReview
    //Loading status
    if (!this.props.data) {
      return <article>Loading...</article>
    }

    return (
      <Layout>
        <Link to="/bookreviews">Back</Link>
        <article>
          <img alt="book cover" src={`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} />
          <h1>{title}</h1>
          <h2>Auhor: {author}</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View on amazon
          </a>

          <h3>Summary</h3>
          <div>{summary.summary}</div>

          <h3>Notes</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />

          <div>
            <p>Posted with love on{' '}<time>{createdAt}</time></p>
          </div>
        </article>
      </Layout>
    )
  }
}

BookReview.propTypes = {
  data: PropTypes.node,
}

export default BookReview

// The slug from this page is used to retrieve the correct data
// The $slug argument is passed from the create page 'context' from gatsby-node.js
export const query = graphql`
  query BookReview($slug: String!) {
    contentfulBookReview(slug: { eq: $slug }) {
      id
      createdAt(formatString: "DD MMM YYYY")
      title
      slug
      author
      link
      isbn
      summary {
        summary
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
