import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { COLOURS } from '../utils/theme'

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

const ArticleContainer = styled('article')`
  .title-wrapper {
    background-color: ${COLOURS.black};
    transform: skewX(-10deg);
    margin-top: 3.56rem;
    margin-bottom: 1.78rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    padding: .4rem;
    margin: 0;
    letter-spacing: -0.09rem;
    transform: skewX(10deg);
  }

  .title a {
    /* color: ${COLOURS.secondaryHighlight}; */
    color: ${COLOURS.primary};
  }

  .title a:hover {
    color: ${COLOURS.secondaryHighlight};
  }

  .date {
    padding-right: 2rem;
    font-family: 'Open Sans';
    color: #FFF;
  }
`