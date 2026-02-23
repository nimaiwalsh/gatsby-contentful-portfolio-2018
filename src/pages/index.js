import React from 'react'
import { graphql, Link } from 'gatsby'
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
        <section className="relative w-screen ml-[calc(50%-50vw)] overflow-hidden h-[44rem]">
          <div className="absolute top-0 left-0 w-full h-full">
            <GatsbyImage
              className="!absolute !top-0 !left-0 !w-full !h-full"
              image={getImage(data.headerImage)}
              alt="hero"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-900/85 via-primary/30 to-zinc-900/90" />
          </div>
          <div className="relative z-10 max-w-container mx-auto px-6 h-full flex items-center text-white">
            <div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-tight text-white mt-0"
              >
                Nimai Walsh
              </h1>
              <div className="w-16 h-1 bg-secondary my-6" />
              <p
                className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed mb-8 font-light"
              >
                Father, investor, and Android mobile developer. Here I write about tech, the books I'm reading, and ideas worth sharing.
              </p>
              <div
                className="flex gap-4"
              >
                <Link
                  to="/blog"
                  className="inline-block px-6 py-3 border-2 border-white text-white font-semibold text-sm tracking-wide rounded-lg no-underline hover:bg-white/10 transition-colors"
                >
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FadeInUp>
          <div>
            <section className="pb-4 relative">
              <QuoteListing quotes={data.allContentfulQuotes.edges} />
            </section>
            <section className="pb-4 relative">
              <p className="eyebrow">Latest Reads</p>
              <h2 className="mt-1 mb-0">Recent books</h2>
              <CardList>
                {bookReviews.map(({ node }) => (
                  <Card key={node.id} {...node} bookReview />
                ))}
              </CardList>
            </section>
            <section className="pb-4 relative">
              <p className="eyebrow">Latest Posts</p>
              <h2 className="mt-1 mb-0">Recent posts</h2>
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
