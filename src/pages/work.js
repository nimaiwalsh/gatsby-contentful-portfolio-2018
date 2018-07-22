import React from 'react';
import ProjectListing from '../components/Projects/ProjectListing';

const Work = ({ data }) => {
  return (
    <div>
      <h1>Work</h1>
      {data.allContentfulWork.edges.map(({ node }) => {
        return <ProjectListing project={node} key={node.id} />;
      })}
    </div>
  );
};

export default Work;

export const query = graphql`
  query queryWorkList {
    allContentfulWork {
      edges {
        node {
          id
          title
          description {
            description
          }
          builtWith
          type
          linkToWork
          featureImage {
            sizes {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`;
