import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class BookReview extends Component {
  render() {
    const {
      id,
      createdAt,
      title,
      slug,
      author,
      link,
      summary,
      body,
    } = this.props.data.contentfulBookReview
    //Loading status
    if (!this.props.data) {
      return <article>Loading...</article>
    }
    console.log(this.props.data)
    return (
      <Layout>
        <Link to="/bookreviews">Back</Link>
        <article>
          <h1>{title}</h1>
          <h2>Auhor: {author}</h2>
          <a href={link} target="_blank">
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

export default BookReview

//The slug from this page is used to retrieve the correct data
//The $slug argument is passed from the create page 'context' from gatsby-node.js
export const query = graphql`
  query BookReview($slug: String!) {
    contentfulBookReview(slug: { eq: $slug }) {
      id
      createdAt(formatString: "DD MMM YYYY")
      title
      slug
      author
      link
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
