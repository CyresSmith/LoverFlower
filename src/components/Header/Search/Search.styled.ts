import styled from '@emotion/styled';
import theme from 'theme';

interface IIsOpen {
  isOpen: boolean;
}

export const Form = styled.form<IIsOpen>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 10px;
  margin-left: 50px;
  margin-right: auto;
  max-width: ${p => (p.isOpen ? '250px' : '68px')};
  transition: ${theme.transition.primary};
`;

export const InputBox = styled.div`
  position: relative;
  flex-grow: 1;

  > button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
    transition: ${theme.transition.primary};

    :hover:not(:disabled) {
      > svg {
        fill: ${theme.colors.danger};
      }
    }

    :disabled {
      opacity: 50%;
      cursor: default;
    }

    > svg {
      width: 18px;
      height: 18px;
      fill: ${theme.colors.white};
      transition: ${theme.transition.primary};
    }
  }

  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    left: 0;
  }
`;

export const Input = styled.input<IIsOpen>`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: ${p => (p.isOpen ? theme.borders.normal : '0')};
  border-color: ${theme.colors.white};
  color: ${theme.colors.white};
  padding: ${p => (p.isOpen ? '3px 28px' : '3px 0 3px 28px')};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.m};
  letter-spacing: 0.56px;
  text-transform: uppercase;

  ::placeholder {
    color: #7c7c7c;
    font-weight: ${theme.fontWeights.light};
    letter-spacing: 0.28px;
    text-transform: initial;
  }

  :focus {
    outline: none;
  }
`;
