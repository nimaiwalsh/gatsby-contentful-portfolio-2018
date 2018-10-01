import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class PostPage extends Component {
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
          <h1>{data.contentfulBlogPost.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
            }}
          />
          <div>
            <p>
              Posted with love on{' '}
              <time>{data.contentfulBlogPost.createdAt}</time>
            </p>
          </div>
        </article>
      </Layout>
    )
  }
}

export default PostPage

//The slug from this page is used to retrieve the correct data
//The $slug argument is passed from the create page 'context' from gatsby-node.js
export const query = graphql`
  query BlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      createdAt(formatString: "DD MMM YYYY")
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
