import React from 'react'
import { Link } from 'gatsby'

const BookListing = ({ book }) => {
  return (
    <article>
      <div>
        <div className="bg-zinc-900 -skew-x-6 mt-14 mb-7 flex justify-between items-center">
          <h3 className="skew-x-6 px-2 py-1 m-0 tracking-tight">
            <Link to={`/bookreviews/${book.slug}`} className="text-primary hover:text-teal-300 no-underline">{book.title}</Link>
          </h3>
          <span className="pr-8 font-sans text-white text-sm">— {book.createdAt}</span>
        </div>
      </div>
      <p>{book.summary.childMarkdownRemark.excerpt}</p>
    </article>
  )
}

export default BookListing
