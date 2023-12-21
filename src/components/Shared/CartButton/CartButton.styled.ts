import styled from '@emotion/styled';
import theme from 'theme';

export const ButtonBox = styled.div`
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: ${theme.transition.primary};

  :hover {
    > svg {
      fill: ${theme.colors.primary};
    }
  }

  > svg {
    transition: ${theme.transition.primary};
    fill: ${theme.colors.white};
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 13px;
  right: 8px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  border-radius: 50%;

  > span {
    color: #142b2b;
    letter-spacing: 0.48px;
  }
`;
