import styled from '@emotion/styled';
import theme from 'theme';

export const InstagramSection = styled.section`
  padding: 60px 0 200px 0;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ImagesList = styled.ul`
  width: 100%;
  position: relative;
  display: flex;
  gap: 30px;
  width: calc((160px * 4) + (30px * 3));

  > svg {
    position: absolute;
    top: -85px;
    right: -280px;
  }

  :after {
    content: '';
    display: block;
    height: 1px;
    width: 350px;
    background-color: ${theme.colors.primary};
    position: absolute;
    top: 0;
    right: -380px;
  }
`;

export const NetworksList = styled.ul`
  display: flex;
  gap: 30px;

  a {
    :hover {
      svg {
        fill: ${theme.colors.white};
      }
    }
  }

  svg {
    fill: ${theme.colors.primary};
    width: 40px;
    height: 40px;
    transition: ${theme.transition.primary};
  }
`;
