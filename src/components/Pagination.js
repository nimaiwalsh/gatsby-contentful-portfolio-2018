import React from 'react'
import { Link } from 'gatsby'

import { ButtonNext, ButtonPrevious } from '../utils/StyledComponents' 

const Pagination = ({ pageContext }) => {

  const { currentPage, numBookreviewPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numBookreviewPages
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

      {Array.from({ length: numBookreviewPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/bookreviews/${i === 0 ? '' : i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  )
}

export default Pagination
