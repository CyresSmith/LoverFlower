import styled from '@emotion/styled';
import theme from 'theme';

export const CarouselBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  > button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

interface ICarouselButton {
  side: 'left' | 'right';
  distance: number;
}

export const CarouselButton = styled.button<ICarouselButton>`
  padding: 20px;
  ${({ side, distance }) => `${side}: ${distance}px`};

  :hover {
    > svg {
      fill: ${theme.colors.white};
    }
  }

  > svg {
    fill: ${theme.colors.primary};
    transition: ${theme.transition.primary};
    ${({ side }) =>
      `transform: ${side === 'right' ? 'scaleX(-1)' : 'scaleX(1)'}`};
  }
`;
