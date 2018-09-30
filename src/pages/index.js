import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import FadeInUp from '../components/FadeInUp';
import {
  HeroSection,
  BackgroundImage,
  HeaderContent,
  SectionWrapper,
  Box,
} from '../pages-styles/index.styles';

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      <HeroSection>
        <BackgroundImage>
          <Img className='header-image' fluid={data.headerImage.childImageSharp.fluid} />
          <div className='header-image-overlay' />
        </BackgroundImage>
        <HeaderContent>
          <div>
            <span>Hello beautiful earth</span>
            <h1>Nimai Walsh - Web Developer</h1>
          </div>
        </HeaderContent>
      </HeroSection>
      <FadeInUp>
        <SectionWrapper>
            <Box className="work">Work</Box>
            <Box className="journal">Journal</Box>
            <Box className="contact">Contact</Box>
            <Box className="about">About</Box>
        </SectionWrapper>
      </FadeInUp>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    headerImage: 	file(relativePath:{regex: "/hero-image.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
	  }
  }
`;
