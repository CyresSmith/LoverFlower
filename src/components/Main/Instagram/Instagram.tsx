import image44 from 'assets/img/44.jpg';
import image45 from 'assets/img/45.jpg';
import image46 from 'assets/img/46.jpg';
import image47 from 'assets/img/47.jpg';
import InstagramIcon from 'assets/svg/instagram.svg?react';
import Networks from 'assets/svg/socialNetworks.svg?react';
import Viber from 'assets/svg/viber.svg?react';
import WhatsApp from 'assets/svg/watsapp.svg?react';
import { Container, ImageBox } from 'components/Shared/Shared.styled';
import { ISocialLink } from 'components/Shared/types';
import {
  Box,
  ImagesList,
  InstagramSection,
  NetworksList,
} from './Instagram.styled';

const images = [image44, image45, image46, image47];

const SocialLinks: ISocialLink[] = [
  { Icon: InstagramIcon, link: 'https://www.instagram.com/' },
  { Icon: WhatsApp, link: 'https://www.whatsapp.com/' },
  { Icon: Viber, link: 'https://www.viber.com/' },
];

const Instagram = () => {
  return (
    <InstagramSection>
      <Container>
        <Box>
          <ImagesList>
            {images.map((image, i) => (
              <li key={i}>
                <a
                  href="https://www.instagram.com/"
                  rel="noopener noreferrer nofollow"
                  target="blank"
                >
                  <ImageBox width={160} height={160} imgSrc={image} />
                </a>
              </li>
            ))}
            <Networks />
          </ImagesList>

          <NetworksList>
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
          </NetworksList>
        </Box>
      </Container>
    </InstagramSection>
  );
};

export default Instagram;
