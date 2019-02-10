import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'
import { CONTAINER, COLOURS } from '../utils/theme';

export const HeroSection = styled.section`
  /*This section makes image full width while a child of fixed width container*/
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  /*-----*/
  overflow: hidden;
  height: 20rem;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & .header-image-overlay,
  & .header-image {
    position: inherit;
    top: inherit;
    left: inherit;
    width: inherit;
    height: inherit;
  }

  & .gatsby-image-outer-wrapper {
    height: 100%;
  }

  & .header-image-overlay {
    background-image: linear-gradient(
      to right bottom,
      rgba(${COLOURS.primaryRGB}, 0.9),
      rgba(0, 0, 0, 0.8)
    );
  }
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeaderContent = styled.div`
  max-width: ${CONTAINER.WIDTH};
  padding: 1.5rem 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
  color: #ffffff;

  span {
    opacity: 0;
    animation: ${fadein} 3s ease both;
    animation-delay: 1s;
  }

  h1 {
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0;
    animation: ${fadein} 3s ease both;
    animation-delay: 1.5s;
    color: ${COLOURS.secondary};
  }
`;