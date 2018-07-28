import React from 'react';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import FadeInUp from '../components/FadeInUp';

const Work = ({ data }) => {
  return (
    <FadeInUp>
      <section>
        <h1>Work</h1>
        {data.contentfulLayout.contentModules.map(content => {
          return <ProjectListing project={content} key={content.title} />;
        })}
      </section>
    </FadeInUp>
  );
};

export default Work;

/*Import all the work projects from the Work contentful layout*/
export const query = graphql`
  query queryWorkList {
    contentfulLayout(title: { eq: "Work" }) {
      title
      contentModules {
        title
        description {
          description
        }
        builtWith
        linkToWork
        type
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
`;
