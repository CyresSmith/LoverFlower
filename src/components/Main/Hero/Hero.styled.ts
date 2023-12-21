import styled from '@emotion/styled';
import theme from 'theme';

export const HeroSection = styled.section`
  width: 100%;
  height: 1244px;
  overflow: hidden;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ContactsList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 26px;
  margin-top: calc((80px - 17px) / 2);
`;

export const ContactItem = styled.li`
  color: ${theme.colors.primary};
  letter-spacing: 1.4px;
  text-transform: uppercase;

  > p {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const ItemLink = styled.a`
  cursor: pointer;
  z-index: 6;
  color: ${theme.colors.primary};
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.white};
  }
`;

export const ItemText = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const SocialLinksList = styled.ul`
  padding: 18px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;

  > li {
    > a {
      display: block;
      height: 25px;
      width: 25px;

      > svg {
        fill: ${theme.colors.primary};
        height: 25px;
        width: 25px;
        transition: ${theme.transition.primary};
      }

      :hover {
        > svg {
          fill: ${theme.colors.white};
        }
      }
    }
  }
`;

export const PhoneBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 7px;
  margin: 184px 0 20px;

  > svg {
    fill: ${theme.colors.primary};
    width: 16px;
    height: 16px;
    position: absolute;
    left: 18px;
    bottom: 10px;
  }
`;

export const PhoneLink = styled.a`
  position: relative;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.l};
  letter-spacing: 1.6px;
  text-transform: uppercase;
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.white};
  }
`;

export const CallButton = styled.button`
  display: block;
  width: 180px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  color: ${theme.colors.primary};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: right;
  padding: 10px 20px;
  font-size: ${theme.fontSizes.m};
  font-family: ${theme.fonts.body};

  :hover {
    > span {
      color: ${theme.colors.white};
    }
  }

  > span {
    transition: ${theme.transition.primary};
  }
`;

export const HeadingBox = styled.div`
  position: absolute;
  top: 488px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.fontSizes.xxl};
    font-style: normal;
    font-weight: ${theme.fontWeights.regular};
    line-height: normal;
    letter-spacing: 0.4px;
    margin-bottom: 47px;
  }
`;
