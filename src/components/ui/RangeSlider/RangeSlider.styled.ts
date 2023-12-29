import styled from '@emotion/styled';
import theme from 'theme';

const HEIGHT = '15px';

export const Range = styled.div`
  height: ${HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    position: relative;
    user-select: none;
    height: 1px;
    background: ${theme.colors.primary};
    border-radius: 2px;

    > button {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: ${HEIGHT};
      height: ${HEIGHT};
      outline: none;
      border-radius: 50%;
      border: 0;
      background: ${theme.colors.primary};
      cursor: grab;
      padding: 0;
      transition: ${theme.transition.primary};
      transition-property: background;

      :hover {
        background: ${theme.colors.white};
      }

      :active {
        cursor: grabbing;
      }
    }
  }
`;
