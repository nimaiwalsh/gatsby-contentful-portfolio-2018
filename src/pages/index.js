import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import QuoteListing from '../components/QuoteListing'
import { Row } from '../utils/StyledComponents'
import {
  HeroSection,
  BackgroundImage,
  HeaderContent,
  SectionWrapper,
  Box,
} from '../pages-styles/index.styles'

const IndexPage = ({ data }) => (
  <Layout>
    <HeroSection>
      <BackgroundImage>
        <Img
          className="header-image"
          fluid={data.headerImage.childImageSharp.fluid}
        />
        <div className="header-image-overlay" />
      </BackgroundImage>
      <HeaderContent>
        <div>
          <span>Hello beautiful earth</span>
          <h1>Nimai Walsh - Web Developer</h1>
        </div>
      </HeaderContent>
    </HeroSection>
    <FadeInUp>
      <div>
        <Row>
          <QuoteListing quotes={data.allContentfulQuotes.edges} />
        </Row>
        <SectionWrapper>
          <Box className="work">Work</Box>
          <Box className="journal">Journal</Box>
          <Box className="contact">Contact</Box>
          <Box className="about">About</Box>
        </SectionWrapper>
      </div>
    </FadeInUp>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageData {
    site {
      siteMetadata {
        title
        desc
      }
    }
    headerImage: file(relativePath: { regex: "/hero-image.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allContentfulQuotes {
      edges {
        node {
          quote {
            quote
          }
          author
        }
      }
    }
  }
`
