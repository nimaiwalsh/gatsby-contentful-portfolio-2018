import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import { PageWrapper, Section } from '../components/styles/StyledComponents'
import ProjectListing from '../components/ListingProject/ProjectListing'

const Work = ({ data }) => {
  return (
    <Layout>
      <FadeInUp>
        <PageWrapper>
          <Section>
            <h1>Work</h1>
            {data.contentfulLayout.modules.map(content => {
              return <ProjectListing project={content} key={content.title} />
            })}
          </Section>
        </PageWrapper>
      </FadeInUp>
    </Layout>
  )
}

export default Work

/*Import all the work projects from the Work contentful layout*/
export const query = graphql`
  query queryWorkList {
    contentfulLayout(title: { eq: "Work" }) {
      title
      modules {
        title
        description {
          description
        }
        builtWith
        linkToWork
        type
        featureImage {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
