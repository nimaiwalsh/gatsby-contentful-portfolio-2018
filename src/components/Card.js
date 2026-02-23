import React from 'react'
import { Link } from 'gatsby'

class Card extends React.Component {

  bookCard = ({ slug, title, author, summary }) => {
    const { excerpt } = summary.childMarkdownRemark

    return (
      <Link to={`/bookreviews/${slug}`} className="no-underline">
        <div className="bg-white shadow-sm border border-zinc-100 p-5 rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-zinc-900">
          <h4 className="mt-0 font-serif text-zinc-900">{title}</h4>
          <div className="text-zinc-600 text-sm mb-2">{author}</div>
          <div className="text-zinc-700">{excerpt}</div>
        </div>
      </Link>
    )
  }

  blogPostCard = ({ slug, title, body, tags, createdAt }) => {
    const { excerpt } = body.childMarkdownRemark

    return (
      <Link to={`/blog/${slug}`} className="no-underline">
        <div className="bg-white shadow-sm border border-zinc-100 p-5 rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-zinc-900">
          <h4 className="mt-0 font-serif text-zinc-900">{title}</h4>
          <div className="text-zinc-500 text-sm mb-2">{createdAt}</div>
          <div className="text-zinc-700">{excerpt}</div>
          <div className="text-zinc-400 text-xs mt-2">{tags}</div>
        </div>
      </Link>
    )
  }

  render() {
    if (this.props.bookReview) {
      return this.bookCard({ ...this.props })
    }

    if (this.props.blogPost) {
      return this.blogPostCard({ ...this.props })
    }
  }
}

export default Card
