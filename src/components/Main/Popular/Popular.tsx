import {
  Container,
  Section,
  StyledLink,
} from 'components/Shared/Shared.styled';
import Carousel from './Carousel';
import { SectionTitle, Text } from './Popular.styled';
import PopularBackground from './PopularBackground';

const Popular = () => {
  return (
    <Section>
      <PopularBackground />
      <Container>
        <SectionTitle>
          Популярные <span>букеты</span>
        </SectionTitle>

        <Text>Самые любимые композиции наших клиентов</Text>

        <Carousel />

        <StyledLink to="catalog">смотреть весь каталог</StyledLink>
      </Container>
    </Section>
  );
};

export default Popular;
