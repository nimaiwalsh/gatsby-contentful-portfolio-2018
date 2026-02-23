import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
            <GatsbyImage
              className="header-image"
              image={getImage(data.headerImage)}
              alt="hero"
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

export const Head = () => (
  <>
    <title>Nimai Walsh</title>
    <meta
      name="description"
      content="Discover the personal web space of Nimai Walsh. Nimai is a Web Developer, traveler, writer and student from Brisbane, Australia specialising in HTML, CSS, JavaScript, React and Redux"
    />
    <meta
      name="keywords"
      content="self improvement, travel, react, redux, html, css, javascript, web, web developer, developer, front-end, gatsby"
    />
  </>
)

export const query = graphql`
  query IndexPageData {
    headerImage: file(relativePath: { regex: "/hero-image.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
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
      sort: { createdAt: DESC }
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
    allContentfulBlogPost(sort: { createdAt: DESC }, limit: 3) {
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
