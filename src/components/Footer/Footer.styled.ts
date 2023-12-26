import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import theme from 'theme';

export const FooterBox = styled.footer`
  padding: 30px 0 60px;
`;

export const FooterGridBox = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 250px repeat(3, 1fr) 250px;
  gap: 40px;

  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: 0.48px;
`;

export const FooterSection = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterTitle = styled(Link)`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.56px;
  text-transform: uppercase;
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.white};
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    text-transform: uppercase;

    > a {
      transition: ${theme.transition.primary};

      :hover {
        color: ${theme.colors.primary};
      }
    }
  }
`;

export const SectionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactItem = styled.li`
  > p {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

export const AddressLink = styled(Link)`
  color: ${theme.colors.primary};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.white};
  }
`;

export const AddressText = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const SocialLinksList = styled.ul`
  display: flex;
  gap: 24px;
  margin-top: 38px;

  a {
    :hover {
      svg {
        fill: ${theme.colors.white};
      }
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${theme.colors.primary};
    transition: ${theme.transition.primary};
  }
`;
