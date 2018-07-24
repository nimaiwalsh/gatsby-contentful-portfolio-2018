import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'react-emotion';
import Img from 'gatsby-image';
import { HeroSection, HeaderContent, SectionWrapper, Box} from './index.styles'

const headerImage = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const IndexPage = ({ data }) => (
  <div>
    <HeroSection>
      <HeaderContent>
        <div>
          <span>Hello beautiful earth</span>
          <h1>Nimai Walsh - Web Developer</h1>
        </div>
      </HeaderContent>
      <Img style={headerImage} sizes={data.headerImage.sizes} />
    </HeroSection>
    <SectionWrapper>
      <Box className="work">Work</Box>
      <Box className="journal">Journal</Box>
      <Box className="contact">Contact</Box>
      <Box className="about">About</Box>
    </SectionWrapper>
  </div>
);

export default IndexPage;
