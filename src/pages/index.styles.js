import styled, { keyframes } from 'react-emotion';
import { CONTAINER, PADDINGS, BREAKPOINTS, COLOURS } from '../utils/theme';

export const HeroSection = styled('section')`
  /*This section makes image full width while a children of fixed width container*/
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

export const BackgroundImage = styled('div')`
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

export const HeaderContent = styled('div')`
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

export const SectionWrapper = styled('section')`
  margin: 0 auto;
  height: 100%;
  max-width: ${CONTAINER.WIDTH};
  padding: 2rem 0;
  display: grid;
  grid-gap: ${PADDINGS.M};
  grid-template-columns: 1fr 1fr 1fr;

  .work {
    grid-column: 1 / span 2;
  }

  .journal {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  .contact {
    grid-column: 1;
    grid-row: 2;
  }

  .about {
    grid-column: 2;
    grid-row: 2;
  }

  @media (max-width: ${BREAKPOINTS.TABLETMAX}) {
    grid-template-columns: 1fr 1fr;

    .work {
      grid-column: 1 / span 2;
    }

    .journal {
      grid-column: 1;
      grid-row: 2 / span 2;
    }

    .contact {
      grid-column: 2;
      grid-row: 2;
    }

    .about {
      grid-column: 2;
      grid-row: 3;
    }
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: 1fr;

    .work {
      grid-column: 1;
      grid-row: 1;
    }

    .journal {
      grid-column: 1;
      grid-row: 2;
    }

    .contact {
      grid-column: 1;
      grid-row: 3;
    }

    .about {
      grid-column: 1;
      grid-row: 4;
    }
  }
`;

export const Box = styled('div')`
  background-color: #fff;
  font-size: 150%;
  box-shadow: 0 3px 5px 0 rgba(0, 1, 1, 0.1);
  background-color: #fff;
  padding: 20px;
`;
