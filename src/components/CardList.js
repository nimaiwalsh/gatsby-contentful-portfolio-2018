import React from 'react';
import styled from '@emotion/styled';

import { CONTAINER, PADDINGS, BREAKPOINTS } from '../utils/theme'

const CardList = (props) => {
  return (
    <CardListWrapper>
      {props.children}
    </CardListWrapper>
  );
};

export default CardList;

export const CardListWrapper = styled.section`
  margin: 0 auto;
  height: 100%;
  max-width: ${CONTAINER.WIDTH};
  padding: 2rem 0;
  display: grid;
  grid-gap: ${PADDINGS.M};
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${BREAKPOINTS.TABLETMAX}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: 1fr;
  }
`;