import { Container } from 'components/Shared/Shared.styled';
import Button from 'components/ui/Button';
import Contacts from './Contacts';
import { HeadingBox, HeroSection } from './Hero.styled';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground />
      <Container>
        <Contacts />
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
