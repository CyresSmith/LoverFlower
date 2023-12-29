import styled from '@emotion/styled';
import theme from 'theme';
import { IButtonProps } from './Button';

interface IStyledButton extends Pick<IButtonProps, 'variant' | 'to'> {}

export const StyledButton = styled.button<IStyledButton>`
  height: 50px;
  min-width: 220px;
  padding: 16px;
  color: ${p =>
    p.variant === 'primary' ? theme.colors.background : theme.colors.white};
  background-color: ${p =>
    p.variant === 'primary' ? theme.colors.primary : 'transparent'};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border: ${p => (p.variant === 'primary' ? 0 : '1px solid #fff')};
  cursor: pointer;
  transition: ${theme.transition.primary};
  text-align: center;
  font-family: ${theme.fonts.body};

  :hover:not(:disabled) {
    color: ${p =>
      p.variant === 'primary' ? theme.colors.white : theme.colors.background};
    background-color: ${p =>
      p.variant === 'primary' ? theme.colors.secondary : theme.colors.primary};

    > svg {
      fill: ${theme.colors.white};
    }
  }

  :focus {
    border: ${p => (p.variant === 'primary' ? 0 : '1px solid #fff')};
  }

  :active {
    box-shadow: 0px 0px 10px 0px #1b000e inset;
  }

  :disabled {
    color: #555;
    background-color: transparent;
    border: 1px solid #555;
    cursor: default;

    > svg {
      fill: #555;
    }
  }

  > svg {
    fill: ${theme.colors.background};
    animation: rotation 1.5s linear infinite;
    margin-right: 10px;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
