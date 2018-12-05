import React from 'react'
import { Link } from 'gatsby'

import ArticleContainer from './BookListing-styles'

const BookListing = ({ book }) => {
  return (
    <ArticleContainer>
      <div className="title-container">
        <div className="title-wrapper">
          <h3 className="title">
            <Link to={`/bookreviews/${book.slug}`}>{book.title}</Link>
          </h3>
          <span className="date">— {book.createdAt}</span>
        </div>
      </div>
      <p className="short-description">
        {book.summary.childMarkdownRemark.excerpt}
      </p>
    </ArticleContainer>
  )
}

export default BookListing
