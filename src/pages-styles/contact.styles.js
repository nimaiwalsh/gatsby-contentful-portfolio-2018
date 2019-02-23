import styled from '@emotion/styled';
import { COLOURS } from '../utils/theme';

const FormContainer = styled.div`

  display: flex;
  justify-content: center;

  form {
    width: 50%;
  }

  input, textarea {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    border: none;
  }

  textarea {
    height: 200px;
  }
`
export const RecaptchaBox = styled.div`
  display: flex;
  justify-content: center;
`

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: .5rem;
  width: 100%;
  border: none;
  background-color: ${COLOURS.secondary};
  color: ${COLOURS.white};
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
`

export default FormContainer