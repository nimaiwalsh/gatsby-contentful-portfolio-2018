import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import FadeInUp from '../components/FadeInUp';
import ProjectListing from '../components/ProjectListing/ProjectListing';

const Work = ({ data }) => {
  return (
    <Layout>
      <FadeInUp>
        <section>
          <h1>Work</h1>
          {data.contentfulLayout.contentModules.map(content => {
            return <ProjectListing project={content} key={content.title} />;
          })}
        </section>
      </FadeInUp>
    </Layout>
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
