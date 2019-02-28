import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { COLOURS } from '../utils/theme'

class Card extends React.Component {
  
  bookCard = ({ slug, title, author, summary }) => {
    const { excerpt } = summary.childMarkdownRemark
  
    return (
      <Link to={`/bookreviews/${slug}`}>
      <CardWrapper>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Summary>{excerpt}</Summary>
      </CardWrapper>
      </Link>
    );
  };
  
  blogPostCard = ({ slug, title, body, tags, createdAt }) => {
    const { excerpt } = body.childMarkdownRemark
  
    return (
      <Link to={`/blog/${slug}`}>
      <CardWrapper>
        <Title>{title}</Title>
        <div>{createdAt}</div>
        <Summary>{excerpt}</Summary>
        <div>{tags}</div>
      </CardWrapper>
      </Link>
    );
  };

  render() {
    if (this.props.bookReview) {
      return this.bookCard({ ...this.props })
    }

    if (this.props.blogPost) {
      return this.blogPostCard({ ...this.props })
    }
  }

}

export default Card;

const CardWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 5px 0 rgba(0, 1, 1, 0.1);
  background-color: #fff;
  padding: 20px;
  color: ${COLOURS.black};
  a {
    text-decoration: none;
  }
`
const Title = styled.h4`
  margin-top: 0;
`
const Author = styled.div`
`
const Summary = styled.div`
`