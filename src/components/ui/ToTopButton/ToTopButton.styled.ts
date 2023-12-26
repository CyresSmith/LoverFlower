import styled from '@emotion/styled';
import { IScrollValue } from 'components/Shared/types';
import theme from 'theme';

export const ButtonBox = styled.button<IScrollValue>`
  width: 100px;
  height: 100px;
  border: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: ${theme.transition.primary};

  ${({ scrollValue }) =>
    ` transform: ${scrollValue < 300 ? `translateY(+200%)` : `translateY(0)`};`}

  :hover {
    > svg {
      fill: ${theme.colors.primary};
    }
  }

  > svg {
    fill: ${theme.colors.white};
    rotate: 90deg;
    transition: ${theme.transition.primary};
  }
`;
