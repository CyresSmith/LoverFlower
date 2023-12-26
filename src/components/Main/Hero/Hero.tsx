import Instagram from 'assets/svg/instagram.svg?react';
import PhoneIcon from 'assets/svg/mdi-light_phone.svg?react';
import Viber from 'assets/svg/viber.svg?react';
import Watsapp from 'assets/svg/watsapp.svg?react';

import CartButton from 'components/Shared/CartButton';
import { Container } from 'components/Shared/Shared.styled';
import { ISocialLink } from 'components/Shared/types';
import Button from 'components/ui/Button';
import {
  CallButton,
  ContactItem,
  ContactsList,
  HeadingBox,
  HeroSection,
  InfoBox,
  ItemLink,
  ItemText,
  PhoneBox,
  PhoneLink,
  SocialLinksList,
} from './Hero.styled';
import HeroBackground from './HeroBackground';

export interface ILink {
  link: string;
  title?: string;
  text?: string | string[];
}

const ContactsLinks: ILink[] = [
  {
    link: 'mailto:zakaz@loverflower.by',
    title: 'zakaz@loverflower.by',
    text: 'Доставка 24/7 по договоренности с оператором',
  },
  {
    link: 'https://maps.app.goo.gl/ohB9kLUWADdzbotR7',
    title: 'Небесної Сотні 27',
    text: ['10:00 до 21:00', 'без выходных'],
  },
];

const SocialLinks: ISocialLink[] = [
  { Icon: Instagram, link: 'https://www.instagram.com/' },
  { Icon: Watsapp, link: 'https://www.whatsapp.com/' },
  { Icon: Viber, link: 'https://www.viber.com/' },
];

const Hero = () => {
  const handleCartBtnClick = () => {};

  return (
    <HeroSection>
      <HeroBackground />

      <Container>
        <InfoBox>
          <ContactsList>
            {ContactsLinks.map(({ title, text, link }) => (
              <ContactItem key={link}>
                <p>
                  <ItemLink
                    rel="noopener noreferrer nofollow"
                    target="blank"
                    href={link as string}
                  >
                    {title}
                  </ItemLink>

                  {Array.isArray(text) ? (
                    text.map(item => <ItemText key={item}>{item}</ItemText>)
                  ) : (
                    <ItemText>{text}</ItemText>
                  )}
                </p>
              </ContactItem>
            ))}
          </ContactsList>

          <SocialLinksList>
            {SocialLinks.map(({ link, Icon }) => (
              <li key={link}>
                <a
                  href={link}
                  rel="noopener noreferrer nofollow"
                  target="blank"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </SocialLinksList>

          <PhoneBox>
            <PhoneLink href="tel:+380682928888">+380 68 292 88 88</PhoneLink>

            <CallButton>
              <span>Заказать звонок</span>
            </CallButton>

            <PhoneIcon />
          </PhoneBox>

          <CartButton onClick={handleCartBtnClick} cartItemsCount={0} />
        </InfoBox>

        <HeadingBox>
          <p>Создаём для тех, кто ценит свежесть и изящество цветка</p>

          <Button as="link" to="catalog">
            смотреть каталог
          </Button>
        </HeadingBox>
      </Container>
    </HeroSection>
  );
};

export default Hero;
