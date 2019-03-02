import styled from '@emotion/styled';
import { MEDIAQUERY } from '../utils/theme';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;

  form {
    width: 70%;

    ${MEDIAQUERY.tabletPort} {
      width: 80%;
    }

    ${MEDIAQUERY.phone} {
      width: 100%;
    }
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

export default FormContainer