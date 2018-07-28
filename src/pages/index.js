import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'react-emotion';
import FadeInUp from '../components/FadeInUp';
import {
  HeroSection,
  BackgroundImage,
  HeaderContent,
  SectionWrapper,
  Box,
} from '../pages-styles/index.styles';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => (
  <div>
    <HeroSection>
      <BackgroundImage>
        <Img className='header-image' sizes={data.headerImage.sizes} />
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
    headerImage: imageSharp(id: { regex: "/hero-image.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
