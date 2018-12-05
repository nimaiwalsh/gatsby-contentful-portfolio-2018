import React from 'react'
import { Link } from 'gatsby'
import ArticleContainer from './PostListing-styles'

const PostListing = ({ post }) => {
  return (
    <ArticleContainer>
      <div className="title-container">
        <div className="title-wrapper">
          <h3 className="title">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <span className="date">— {post.createdAt}</span>
        </div>
      </div>
      <p className="short-description">
        {post.body.childMarkdownRemark.excerpt}
      </p>
    </ArticleContainer>
  )
}

export default PostListing
