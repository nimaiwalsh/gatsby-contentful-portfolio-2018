import React from 'react'
import { Link } from 'gatsby'

import { ButtonNext, ButtonPrevious } from '../components/styles/StyledComponents'

const Pagination = ({ pageContext }) => {

  const pageNumbers = pageContext.numBookreviewPages ? pageContext.numBookreviewPages : pageContext.numBlogPages
  const path = pageContext.slug

  const { currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === pageNumbers
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <div>
      {!isFirst && (
        <ButtonPrevious to={`bookreviews/${prevPage}`}>
          ← Previous Page
        </ButtonPrevious>
      )}

      {!isLast && (
        <ButtonNext to={`bookreviews/${nextPage}`}>Next Page →</ButtonNext>
      )}

      {Array.from({ length: pageNumbers }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/${path}/${i === 0 ? '' : i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  )
}

export default Pagination
