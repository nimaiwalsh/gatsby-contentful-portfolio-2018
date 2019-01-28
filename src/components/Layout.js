import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { CONTAINER } from '../utils/theme'
import Header from './Header/Header'
import Footer from './Footer/Footer'

// eslint-disable-next-line
import globalStyles from '../utils/globalstyles'
// CSS Theme for PrismJS code blocks
import '../utils/prismjs-theme/prism.css'

// Wrapper template to wrap all pages
// location prop comes from gatsby's router
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutWrapper>
        <Helmet
          title="Nimai Walsh - Web Developer"
          meta={[
            {
              name: 'description',
              content:
                'Discover the Portfolio and Blog of Nimai Walsh. Nimai is a Web Developer from Brisbane, Australia specialising in HTML, CSS, JavaScript, React and Redux',
            },
            {
              name: 'keywords',
              content:
                'react, redux, html, css, javascript, web, web developer, developer, front-end, gatsby',
            },
          ]}
        />
        <Header data={data} />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const LayoutWrapper = styled('div')`
  position: relative;
`

const ContentWrapper = styled('main')`
  margin: 0 auto;
  height: 100%;
  min-height: 50rem;
  max-width: ${CONTAINER.WIDTH};
  padding: 0 1rem;

  ul, ol {
    margin-left: 1.78rem;
  }
`
