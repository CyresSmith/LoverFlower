import styled from '@emotion/styled';
import theme from 'theme';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 445px;
  margin-left: auto;
`;

export const ButtonBox = styled.div`
  > p {
    margin-top: 10px;
    max-width: 300px;
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.light};
    letter-spacing: 0.2px;

    > a {
      color: #d978ac;
      text-decoration-line: underline;
    }
  }
`;
