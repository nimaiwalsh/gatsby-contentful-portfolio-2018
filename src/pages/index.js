import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import QuoteListing from '../components/QuoteListing'
import CardList from '../components/CardList'
import Card from '../components/Card'

const IndexPage = ({ data }) => {
  const bookReviews = data.allContentfulBookReview.edges
  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <div className="w-full">
        {/* Hero Section — full-width bleed from constrained container */}
        <section className="relative w-screen -mx-4 overflow-hidden h-[30rem]">
          <div className="absolute top-0 left-0 w-full h-full">
            <GatsbyImage
              className="!absolute !top-0 !left-0 !w-full !h-full"
              image={getImage(data.headerImage)}
              alt="hero"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/90 to-black/80" />
          </div>
          <div className="relative z-10 max-w-container mx-auto px-6 h-full flex items-center text-white">
            <div>
              <h1
                className="font-semibold mt-0 text-secondary-highlight"
                style={{ animation: 'fadein 3s ease both', animationDelay: '1s', opacity: 0 }}
              >
                Nimai Walsh
              </h1>
              <span
                className="block"
                style={{ animation: 'fadein 3s ease both', animationDelay: '1.5s', opacity: 0 }}
              >
                Welcome to my personal web presence. I am a Web Developer,
                Traveller and student of life.
              </span>
            </div>
          </div>
        </section>

        <FadeInUp>
          <div>
            <section className="pb-4 relative">
              <QuoteListing quotes={data.allContentfulQuotes.edges} />
            </section>
            <section className="pb-4 relative">
              <h2>Recent books</h2>
              <CardList>
                {bookReviews.map(({ node }) => (
                  <Card key={node.id} {...node} bookReview />
                ))}
              </CardList>
            </section>
            <section className="pb-4 relative">
              <h2>Recent posts</h2>
              <CardList>
                {blogPosts.map(({ node }) => (
                  <Card key={node.id} {...node} blogPost />
                ))}
              </CardList>
            </section>
          </div>
        </FadeInUp>
      </div>
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
