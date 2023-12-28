import Arrow from 'assets/svg/Arrow5.svg?react';

import Card from 'components/Shared/Card';
import { IProduct } from 'components/Shared/types';
import { CarouselBox, CarouselButton } from './Carousel.styled';

type Props = {};

const products: IProduct[] = [
  {
    id: 1,
    name: 'лучший день',
    price: 1260,
    discount: 5,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-12-21',
    tags: ['rose'],
  },
  {
    id: 2,
    name: 'лучший день',
    price: 800,
    discount: 0,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-12-23',
    tags: ['rose'],
  },
  {
    id: 3,
    name: 'лучший день',
    price: 1800,
    discount: 10,
    image:
      'https://buketland.ua/image/cache/catalog/flowers/mart2021/buket-tsvetov-yedinstvennaya-030286-2-800x800.jpg',
    createdAt: '2023-9-10',
    tags: ['rose'],
  },
];

const Carousel = (props: Props) => {
  return (
    <CarouselBox>
      {products.map(item => (
        <Card key={item.id} {...item} big />
      ))}
      <CarouselButton side="left" distance={-120}>
        <Arrow />
      </CarouselButton>
      <CarouselButton side="right" distance={-120}>
        <Arrow />
      </CarouselButton>
    </CarouselBox>
  );
};

export default Carousel;
