import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import '../styles/global.css'
// CSS Theme for PrismJS code blocks
import '../utils/prismjs-theme/prism.css'

const Layout = ({ children }) => (
  <div className="relative pt-[72px] flex flex-col flex-auto min-h-screen">
    <Header />
    <main className="flex-auto w-full max-w-container mx-auto px-4 min-h-[35rem]">
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
