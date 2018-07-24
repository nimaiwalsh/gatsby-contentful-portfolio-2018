import { css } from 'react-emotion';
import { CONTAINER, COLOURS } from '../../utils/theme';

export const styles = css`
  padding: 2rem 0;
  background-color: #111;
  display: flex;
  justify-content: center;
  font-size: .7rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;

  & .container {
    padding: ${CONTAINER.PADDING};
    max-width: ${CONTAINER.WIDTH};
    width: 100%;
  }

  & .details {
    display: flex;
    justify-content: space-between;
    color: rgba(${COLOURS.whiteRGB}, .8);
    & p {
      margin-bottom: .5rem;
    }

    & a {
      text-decoration: none;
    }

    & a:hover, a:active {
      border-bottom: 3px solid ${COLOURS.white};
    }
  }

  & .contributions {
    color: rgba(${COLOURS.whiteRGB}, .8);
    & .heart {
      color: ${COLOURS.secondary};
    }
    & p {
      margin-bottom: 0;
    }
  }

`

export default styles