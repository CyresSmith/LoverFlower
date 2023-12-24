import styled from '@emotion/styled';
import theme from 'theme';

export const List = styled.ul`
  position: relative;
  margin: 20px 0 70px 380px;
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  column-gap: 115px;
  row-gap: 40px;

  :before {
    content: '';
    width: 65px;
    height: 10px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: -40px;
    left: 0;
  }

  :after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: ${theme.colors.white};
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export interface IImageBox {
  width: number;
  height: number;
  imgSrc: string;
}

export const ImageBox = styled.div<IImageBox>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 20px;
  background: ${({ imgSrc }) => `url(${imgSrc})`};
  background-size: cover;
`;

export const TitleSpan = styled.span`
  position: relative;
  top: -20px;
  left: 380px;

  :before {
    content: '';
    display: block;
    width: 255px;
    height: 1px;
    position: absolute;
    left: -285px;
    top: 50%;
    background-color: ${theme.colors.white};
  }
`;

export const ListItem = styled.li`
  > p {
    display: flex;
    flex-direction: column;
    gap: 12px;
    letter-spacing: 0.56px;
    text-transform: uppercase;

    > span {
      color: ${theme.colors.accent};
      font-size: 30px;
      font-weight: ${theme.fontWeights.bold};
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }
  }
`;

export const BottomBox = styled.div`
  > div {
    position: relative;
    display: flex;
    margin: 10px 0 0 95px;
    justify-content: space-between;

    > svg {
      position: absolute;
      left: -30px;
      bottom: -60px;
    }
  }

  > button {
    margin: 40px 0 0 95px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > p {
    letter-spacing: 0.56px;
    text-transform: uppercase;
    width: 260px;
  }

  > ul {
    list-style: disc;

    > li {
      text-transform: uppercase;
      width: 276px;
      letter-spacing: 0.56px;

      :not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  gap: 30px;
`;
