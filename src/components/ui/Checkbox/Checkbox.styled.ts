import styled from '@emotion/styled';
import theme from 'theme';

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const Name = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: 0.48px;
  text-transform: uppercase;
  transition: ${theme.transition.primary};

  ${Label}:hover & {
    color: ${theme.colors.primary};
  }
`;

export const Indicator = styled.div`
  width: 12px;
  height: 12px;
  border: ${theme.borders.normal};
  border-color: ${theme.colors.white};
  border-radius: 2px;
  background-color: transparent;
  transition: ${theme.transition.primary};

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + & {
    background-color: ${theme.colors.white};
  }

  ${Label}:hover & {
    border-color: ${theme.colors.primary};
  }
`;
