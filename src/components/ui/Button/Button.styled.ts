import styled from '@emotion/styled';
import theme from 'theme';

interface variant {
  variant: 'primary' | 'secondary';
  to: string;
}

export const StyledButton = styled.button<variant>`
  height: 50px;
  width: ${p => (p.variant === 'primary' ? '220px' : '255px')};
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
    border: 0;
  }

  :active {
    box-shadow: 0px 0px 10px 0px #1b000e inset;
  }

  :disabled {
    color: #555;
    background-color: ${theme.colors.background};
    border: 1px solid #555;

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
