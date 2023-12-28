import styled from '@emotion/styled';
import theme from 'theme';

export const SelectBox = styled.div`
  position: relative;
  z-index: 1;
`;

interface ISelect {
  isOpen: boolean;
}

export const Selected = styled.div`
  width: 100%;
  padding: 11px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

export const ItemSpan = styled.span`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: 0.48px;
  text-transform: uppercase;
`;

export const SelectIconBox = styled.div<ISelect>`
  transition: ${theme.transition.primary};
  ${({ isOpen }) => `transform: rotate(${isOpen ? `180deg` : `0deg`});`}

  > svg {
    width: 12px;
    height: 12px;
    fill: ${theme.colors.white};
  }
`;

export const SelectList = styled.ul<ISelect>`
  position: absolute;
  top: 50px;
  left: 0;
  width: 257px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  transition: ${theme.transition.primary};
  overflow: hidden;
  transform-origin: top;
  ${({ isOpen }) => `transform: scaleY(${isOpen ? `1` : `0`});`}
`;

export const SelectItem = styled.li`
  cursor: pointer;
  padding: 11px 20px;
  transition: ${theme.transition.primary};

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
