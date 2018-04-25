import React from 'react';
import Link from 'gatsby-link';

const PostListing = ({ post }) => {
  return (
    <article>
      <h3><Link to={`/journal/${post.slug}`}>{post.title}</Link></h3>
      <span>{post.createdAt}</span>
      <p>{post.body.childMarkdownRemark.excerpt}</p>
    </article>
  )
}

export default PostListing;