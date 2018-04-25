import React from 'react';
import PostListing from '../components/Posts/PostListing';

const Journal = ({ data }) => {
  return (
    <div>
      <h1>My Journal</h1>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <PostListing post={node} key={node.id} />
      ))}
    </div>
  );
};

export default Journal;

export const query = graphql`
  query PostList {
    allContentfulBlogPost {
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
