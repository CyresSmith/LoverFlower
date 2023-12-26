import styled from '@emotion/styled';
import { IScrollValue } from 'components/Shared/types';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const HeaderBox = styled.header<IScrollValue>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 6;
  background-color: ${p =>
    p.scrollValue > 20 ? 'rgba(0, 0,0, 0.8)' : 'transparent'};
  backdrop-filter: ${p => (p.scrollValue > 80 ? 'blur(10px)' : 'none')};
  transition: ${theme.transition.primary};
  overflow: hidden;
`;

export const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }
`;

export const NavigationList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 69px;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  letter-spacing: 0.56px;
  text-transform: uppercase;
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.primary};
  }
`;

export const PhoneLink = styled.a`
  color: ${theme.colors.primary};
  fill: ${theme.colors.primary};
  letter-spacing: 1.4px;
  margin: 0 21px 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: ${theme.transition.primary};

  :hover {
    > span {
      color: ${theme.colors.white};
    }
  }

  > span {
    transition: ${theme.transition.primary};
  }

  > svg {
    width: 18px;
    height: 18px;
    fill: inherit;
  }
`;

export const CartButtonBox = styled.div`
  transition: ${theme.transition.primary};
`;
