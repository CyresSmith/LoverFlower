import {
  Container,
  Section,
  SectionTitle,
  StyledLink,
} from 'components/Shared/Shared.styled';
import { IPosition } from 'components/Shared/types';
import { Item, List, Paragraph } from './Catalog.styled';

interface IListItem {
  title: string;
  items: string[];
  link: string;
  width: number;
  position: IPosition;
}

const ListItems: IListItem[] = [
  {
    title: 'Цветы',
    items: [
      'Сборные букеты',
      'Монобукеты',
      'Композиции из цветов',
      'розы',
      'свадебные',
    ],
    link: 'catalog',
    width: 540,
    position: {
      sideX: 'top',
      sizeX: 350,
      sideY: 'left',
      sizeY: 20,
    },
  },
  {
    title: 'готовые букеты из сухоцветов',
    items: ['букеты', 'для интерьера', 'Композиции'],
    link: 'catalog',
    width: 445,
    position: {
      sideX: 'top',
      sizeX: 131,
      sideY: 'right',
      sizeY: 20,
    },
  },
  {
    title: 'дополнительно',
    items: ['шары', 'игрушки', 'открытки', 'упаковка'],
    link: 'catalog',
    width: 540,
    position: {
      sideX: 'top',
      sizeX: 442,
      sideY: 'right',
      sizeY: 20,
    },
  },
];

const Catalog = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>каталог</SectionTitle>
        <Paragraph>
          <span>
            У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
            всегда поможем вам подобрать букет для вашего события, наш менеджер
            вас проконсультирует и поможет определиться с выбором
          </span>

          <span>Ознакомьтесь с нашими разделами каталога</span>
        </Paragraph>

        <List>
          {ListItems.map(({ title, items, link, position, width }) => (
            <Item key={title} {...position} width={width}>
              <h3>{title}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <StyledLink to={link}>смотреть каталог</StyledLink>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Catalog;
