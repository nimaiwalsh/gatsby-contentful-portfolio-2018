import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'react-emotion';
import Img from 'gatsby-image';
import { CONTAINER } from '../utils/theme';

const HeroSection = styled('section')`
  //Overflow hidden is used to fit the image nicely in the header
  position: relative;
  overflow: hidden;
  height: 60vh;
`;
const headerImage = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HeaderContent = styled('div')`
  max-width: ${CONTAINER.WIDTH};
  margin: 0 auto;
  padding: 1.5rem 1.0875rem 1.45rem;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
  color: #ffffff;

  div {
    text-align
  }

  span {
    opacity: 0;
    animation: ${fadein} 3s ease both;
    animation-delay: 1s;
  }

  h1 {
    opacity: 0;
    animation: ${fadein} 3s ease both;
    animation-delay: 1.5s;
    color: #94E0D1;
  }
`;

const Content = styled('section')`
  margin: 0 auto;
  max-width: ${CONTAINER.WIDTH};
  padding: 1.5rem 1.0875rem 1.45rem;
`;

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
    <Content>
      <h1>Hello people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>{data.site.siteMetadata.desc}</p>
    </Content>
  </div>
);

export default IndexPage;
