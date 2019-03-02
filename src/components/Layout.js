import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'

import { CONTAINER } from '../utils/theme'
import Header from './Header'
import Footer from './Footer'

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
        <Global styles={globalStyles} />
        <Helmet
          title="Nimai Walsh"
          meta={[
            {
              name: 'description',
              content:
                'Discover the personal web space of Nimai Walsh. Nimai is a Web Developer, traveler, writer and student from Brisbane, Australia specialising in HTML, CSS, JavaScript, React and Redux',
            },
            {
              name: 'keywords',
              content:
                'self improvement, travel, react, redux, html, css, javascript, web, web developer, developer, front-end, gatsby',
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

const LayoutWrapper = styled.div`
  position: relative;
  /* Padding same width as fixed Header */
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 100vh;
`

const ContentWrapper = styled('main')`
  display: block;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  min-height: 35rem;
  max-width: ${CONTAINER.WIDTH};
  padding: 0 1rem;
  flex: 1 1 auto;

  ul, ol {
    margin-left: 1.78rem;
  }
`
