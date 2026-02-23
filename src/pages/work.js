import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import ProjectListing from '../components/ListingProject/ProjectListing'

const Work = ({ data }) => {
  return (
    <Layout>
      <FadeInUp>
        <div className="w-full">
          <section className="pb-4 relative">
            <h1>Work</h1>
            {data.contentfulLayout.modules.map(content => {
              return <ProjectListing project={content} key={content.title} />
            })}
          </section>
        </div>
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
          gatsbyImageData(width: 800, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`
