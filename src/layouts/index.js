import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { LayoutWrapper, ContentWrapper } from './index.styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import globalStyles from '../utils/globalstyles';
//CSS Theme for PrismJS code blocks
import '../utils/prismjs-theme/prism.css';
// //Web Animations API Polyfill - makes web animations work across all browsers
let animationpoly;
if (typeof document !== 'undefined')
  animationpoly = require('web-animations-js');

//Wrapper template to wrap all pages
//location prop comes from gatsby's router
const TemplateWrapper = ({ children, data, location }) => (
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
    <Header data={data} location={location} />
    <ContentWrapper>
      {children()}
    </ContentWrapper>
    <Footer />
  </LayoutWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query HeaderMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;
