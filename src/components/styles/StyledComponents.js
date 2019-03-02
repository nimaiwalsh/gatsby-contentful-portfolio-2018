import styled from '@emotion/styled'
import { Link } from 'gatsby' 
import { COLOURS } from '../../utils/theme' 

export const PageWrapper = styled.div`
  width: 100%;
`

export const Section = styled.section`
  padding-bottom: 1rem;
  
  position: relative;
`

export const Button = styled.button`
  margin-top: 1rem;
  padding: .5rem;
  width: ${ props => props.width };
  border: none;
  background-color: ${COLOURS.secondary};
  color: ${COLOURS.white};
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.8rem;
  border-radius: 5px;
  box-shadow: 0 5px 10px ${COLOURS.darkGrey};
  
  :focus {
    outline: none;
  }

  :hover {
    background: ${COLOURS.secondaryHighlight};
  }
`

export const ButtonNext = styled(Link)`

`

export const ButtonPrevious = styled(Link)`

`