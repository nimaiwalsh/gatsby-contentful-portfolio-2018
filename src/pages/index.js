import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import QuoteListing from '../components/QuoteListing'
import CardList from '../components/CardList'
import Card from '../components/Card'
import { PageWrapper, Section } from '../components/styles/StyledComponents'
import {
  HeroSection,
  BackgroundImage,
  HeaderContent,
} from '../pages-styles/index.styles'

const IndexPage = ({ data }) => {
  const bookReviews = data.allContentfulBookReview.edges
  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <PageWrapper>
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
              <h1>Nimai Walsh</h1>
              <span>
                Welcome to my personal web presence. I am a Web Developer,
                Traveller and student of life.
              </span>
            </div>
          </HeaderContent>
        </HeroSection>
        <FadeInUp>
          <div>
            <Section>
              <QuoteListing quotes={data.allContentfulQuotes.edges} />
            </Section>
            <Section>
              <h2>Recent books</h2>
              <CardList>
                {bookReviews.map(({ node }) => (
                  <Card key={node.id} {...node} bookReview />
                ))}
              </CardList>
            </Section>
            <Section>
              <h2>Recent posts</h2>
              <CardList>
                {blogPosts.map(({ node }) => (
                  <Card key={node.id} {...node} blogPost />
                ))}
              </CardList>
            </Section>
          </div>
        </FadeInUp>
      </PageWrapper>
    </Layout>
  )
}

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
    allContentfulBookReview(
      sort: { fields: createdAt, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          createdAt(formatString: "DD MMM YYYY")
          title
          slug
          author
          summary {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }, limit: 3) {
      edges {
        node {
          id
          createdAt(formatString: "DD MMM YYYY")
          title
          slug
          body {
            childMarkdownRemark {
              excerpt(truncate: true)
            }
          }
          tags
        }
      }
    }
  }
`
