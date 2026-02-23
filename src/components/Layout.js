import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'

import { CONTAINER } from '../utils/theme'
import Header from './Header'
import Footer from './Footer'

// eslint-disable-next-line
import globalStyles from '../utils/globalstyles'
// CSS Theme for PrismJS code blocks
import '../utils/prismjs-theme/prism.css'

// Wrapper template to wrap all pages
const Layout = ({ children }) => (
  <LayoutWrapper>
    <Global styles={globalStyles} />
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </LayoutWrapper>
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
