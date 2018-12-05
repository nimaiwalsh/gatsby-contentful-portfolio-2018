import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { LayoutWrapper, ContentWrapper } from './Layout.styles'
import Header from './Header/Header'
import Footer from './Footer/Footer'

// eslint-disable-next-line
import globalStyles from '../utils/globalstyles'

//CSS Theme for PrismJS code blocks
import '../utils/prismjs-theme/prism.css'

// //Web Animations API Polyfill - makes web animations work across all browsers
// eslint-disable-next-line
let animationpoly
if (typeof document !== 'undefined')
  animationpoly = require('web-animations-js')

//Wrapper template to wrap all pages
//location prop comes from gatsby's router
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
