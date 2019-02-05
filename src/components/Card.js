import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import { COLOURS } from '../utils/theme'

const Card = ({ slug, title, author, createdAt, summary, ...props }) => {
  const { excerpt } = summary.childMarkdownRemark
  const linkPath = (props.bookReview) ? '/bookreviews/' : 'blog'

  return (
    <Link to={`${linkPath}${slug}`}>
    <CardWrapper>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Summary>{excerpt}</Summary>
    </CardWrapper>
    </Link>
  );
};

export default Card;

const CardWrapper = styled('div')`
  background-color: #fff;
  box-shadow: 0 3px 5px 0 rgba(0, 1, 1, 0.1);
  background-color: #fff;
  padding: 20px;
  color: ${COLOURS.black};
  a {
    text-decoration: none;
  }
`
const Title = styled('h4')`
  margin-top: 0
`
const Author = styled('div')`
`
const Summary = styled('div')`
`