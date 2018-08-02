import styled from 'react-emotion';
import { COLOURS } from '../../utils/theme';

export const ProjectContainer = styled('div')`
  margin-bottom: 4rem;
  display: flex;

  h3,
  h4,
  h5 {
    margin: 0;
    margin-bottom: 2rem;
  }

  .project {
    flex: 40%;
  }

  .project-image {
    margin-right: 2rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
    /*like a border but can use offsets*/
    outline: .5rem solid ${COLOURS.primary};
    outline-offset: .5rem;
  }

  .project-title {
    color: ${COLOURS.primary};
    span {
     background-color: ${COLOURS.black};
    }
  }

  .project-description {
    flex: 60%;
  }

  .project-title {

  }

  .project-description {

  }
`;

export default ProjectContainer;
