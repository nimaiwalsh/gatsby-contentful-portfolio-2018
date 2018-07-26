import React from 'react';
import PostListing from '../components/PostListing/PostListing';
import FadeInUp from '../components/FadeInUp';

const Blog = ({ data }) => {
  return (
    <FadeInUp>
      <div>
        <h1>Blog</h1>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <PostListing post={node} key={node.id} />
        ))}
      </div>
    </FadeInUp>
  );
};

export default Blog;

export const query = graphql`
  query PostList {
    allContentfulBlogPost(sort: {fields: [createdAt], order: DESC},) {
      totalCount
      edges {
        node {
          id
          createdAt(formatString: "DD MMM YYYY")
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
