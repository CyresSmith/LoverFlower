import Logo from 'assets/svg/LF_logo.svg?react';
import { ILink } from 'components/Main/Hero/Hero';
import { Container } from 'components/Shared/Shared.styled';
import { Link } from 'react-router-dom';
import {
  AddressLink,
  AddressText,
  ContactItem,
  FooterBox,
  FooterGridBox,
  FooterSection,
  FooterTitle,
  LinksList,
  SectionsList,
  SocialLinksList,
} from './Footer.styled';

import InstagramIcon from 'assets/svg/instagram.svg?react';
import Viber from 'assets/svg/viber.svg?react';
import WhatsApp from 'assets/svg/watsapp.svg?react';
import { ISocialLink } from 'components/Shared/types';

interface IFooterLink {
  [key: string]: string;
}

const catalogLinks: IFooterLink[] = [
  { title: 'Популярное', to: 'catalog/popular' },
  { title: 'Сухоцветы', to: 'catalog/dry' },
  { title: 'Букеты роз', to: 'catalog/roses' },
  { title: 'Композиции из цветов', to: 'catalog/compositions' },
  { title: 'Индивидуальный букет', to: 'catalog/individual' },
  { title: 'Букет на праздник', to: 'catalog/holidays' },
  { title: 'Упаковка подарков', to: 'catalog/package' },
  { title: 'Шары', to: 'catalog/balls' },
  { title: 'Открытки', to: 'catalog/postcards' },
  { title: 'Конверты', to: 'catalog/envelopes' },
];

const bouquetsLinks: IFooterLink[] = [
  { title: 'Для девушки', to: 'catalog/bouquets/girls' },
  { title: 'Для мужчины', to: 'catalog/bouquets/mans' },
  { title: 'Для жены', to: 'catalog/bouquets/wife' },
  { title: 'Для мам', to: 'catalog/bouquets/mom' },
  { title: 'Для коллеги', to: 'catalog/bouquets/colleague' },
  { title: 'Для начальника', to: 'catalog/bouquets/boss' },
  { title: 'Для дочки', to: 'catalog/bouquets/daughter' },
  { title: 'Для детей', to: 'catalog/bouquets/children' },
  { title: 'Для женщины', to: 'catalog/bouquets/woman' },
];

const sectionsLinks: IFooterLink[] = [
  { title: 'Доставка и оплата', to: 'shipping' },
  { title: 'О нас', to: 'about' },
  { title: 'FAQ', to: 'faq' },
  { title: 'Контакты', to: 'contacts' },
  { title: 'для корпоративных клиентов', to: 'corporative' },
];

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
  {
    link: 'tel:+380682928888',
    title: '+380 (68) 292 88 88',
    text: ['прием звонков круглосуточно'],
  },
];

const SocialLinks: ISocialLink[] = [
  { Icon: InstagramIcon, link: 'https://www.instagram.com/' },
  { Icon: WhatsApp, link: 'https://www.whatsapp.com/' },
  { Icon: Viber, link: 'https://www.viber.com/' },
];

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterGridBox>
          <FooterSection>
            <Link to="/">
              <Logo />
            </Link>

            <FooterTitle to="corporative">реквизиты</FooterTitle>

            <p>
              ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
              Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
              BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г.
              Минск, улица Толстого
            </p>
          </FooterSection>

          <FooterSection>
            <FooterTitle to="catalog">Каталог</FooterTitle>
            <LinksList>
              {catalogLinks.map(({ to, title }) => (
                <li key={title}>
                  <Link to={to}>{title}</Link>
                </li>
              ))}
            </LinksList>
          </FooterSection>

          <FooterSection>
            <FooterTitle to="catalog/bouquets">Букет</FooterTitle>

            <LinksList>
              {bouquetsLinks.map(({ to, title }) => (
                <li key={title}>
                  <Link to={to}>{title}</Link>
                </li>
              ))}
            </LinksList>
          </FooterSection>

          <FooterSection>
            <SectionsList>
              {sectionsLinks.map(({ to, title }) => (
                <li key={title}>
                  <FooterTitle to={to}>{title}</FooterTitle>
                </li>
              ))}
            </SectionsList>
          </FooterSection>

          <FooterSection>
            <address>
              <SectionsList>
                {ContactsLinks.map(({ title, text, link }) => (
                  <ContactItem key={link}>
                    <p>
                      <AddressLink
                        rel="noopener noreferrer nofollow"
                        target="blank"
                        to={link}
                      >
                        {title}
                      </AddressLink>

                      {Array.isArray(text) ? (
                        text.map(item => (
                          <AddressText key={item}>{item}</AddressText>
                        ))
                      ) : (
                        <AddressText>{text}</AddressText>
                      )}
                    </p>
                  </ContactItem>
                ))}
              </SectionsList>

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
            </address>
          </FooterSection>
        </FooterGridBox>
      </Container>
    </FooterBox>
  );
};

export default Footer;
