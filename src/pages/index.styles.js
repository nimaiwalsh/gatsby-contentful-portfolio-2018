import styled, { keyframes } from 'react-emotion';
import { CONTAINER, PADDINGS, BREAKPOINTS } from '../utils/theme';

export const HeroSection = styled('section')`
  /*Overflow hidden is used to fit the image nicely in the header*/
  position: relative;
  overflow: hidden;
  height: 60vh;
`;

export const headerImage = {
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

export const HeaderContent = styled('div')`
  max-width: ${CONTAINER.WIDTH};
  margin: 0 auto;
  padding: 1.5rem 1rem 1.45rem;
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

export const SectionWrapper = styled('section')`
  margin: 0 auto;
  max-width: ${CONTAINER.WIDTH};
  padding: ${CONTAINER.PADDING};
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
