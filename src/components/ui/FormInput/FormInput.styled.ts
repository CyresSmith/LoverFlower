import styled from '@emotion/styled';
import theme from 'theme';
import { IStyledInput } from './FormInput';

export const InputBox = styled.div`
  position: relative;

  > label {
    color: ${theme.colors.white};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.regular};
    letter-spacing: 0.84px;
    margin-bottom: 4px;
  }

  > span {
    position: absolute;
    color: ${theme.colors.danger};
    letter-spacing: 0.56px;
    font-weight: ${theme.fontWeights.bold};
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledInput = styled.input<IStyledInput>`
  width: 100%;
  border: 1px solid;
  color: #555;
  border-color: #555;
  background-color: transparent;
  padding: 20px;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  letter-spacing: 0.56px;
  transition: ${theme.transition.primary};
  resize: none;
  text-transform: uppercase;
  ${({ isCompleted, inputError, inputHeight }) => {
    let returnStr = '';

    if (inputHeight) {
      returnStr = returnStr + ` height: ${inputHeight}px;`;
    }

    if (isCompleted) {
      returnStr =
        returnStr +
        ` color: ${theme.colors.white}; 
        border-color: ${theme.colors.white};`;
    }

    if (inputError) {
      returnStr =
        returnStr +
        ` color: ${theme.colors.danger}; 
        border-color: ${theme.colors.danger};`;
    }

    return returnStr;
  }}

  ::placeholder {
    color: #395959;
  }

  :disabled {
    border-color: #212121;
    color: #212121;

    ::placeholder {
      color: #212121;
    }
  }

  :focus {
    outline: none;
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    background-color: transparent;
  }
`;
