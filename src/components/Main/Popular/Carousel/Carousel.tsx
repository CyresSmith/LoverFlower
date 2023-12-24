import Arrow from 'assets/svg/Arrow5.svg?react';
import Card from './Card';
import { CarouselBox, CarouselButton } from './Carousel.styled';

type Props = {};

const Carousel = (props: Props) => {
  return (
    <CarouselBox>
      <Card />
      <Card />
      <Card />
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
