import { IProduct } from 'components/Shared/types';
import Button from 'components/ui/Button';
import {
  Badge,
  CardBox,
  CardTitle,
  ImageBox,
  LinkBox,
  Overlay,
  Price,
} from './Card.styled';

export interface ICard {
  big?: boolean;
}

interface Props extends IProduct, ICard {}

const Card = ({
  image,
  name,
  createdAt,
  discount,
  price,
  tags,
  big = false,
}: Props) => {
  const isNew = (createdAt: string): boolean => {
    const date = new Date(createdAt);
    const today = new Date();
    const difference = Number(today) - Number(date);
    const fiveDays = 5 * 24 * 60 * 60 * 1000;

    return fiveDays > difference;
  };

  const badgeType = () =>
    isNew(createdAt) ? 'new' : discount > 0 ? 'sale' : null;

  return (
    <CardBox>
      <LinkBox to="catalog/filter/buket">
        <ImageBox big={big}>
          <img src={image} />
          <Overlay />
        </ImageBox>

        {badgeType() && (
          <Badge type={badgeType()}>
            <span>{badgeType()}</span>
          </Badge>
        )}

        <CardTitle>{name}</CardTitle>

        <Price>
          {price}₴
          {discount > 0 && <span>{price - (price * discount) / 100} ₴</span>}
        </Price>
      </LinkBox>

      <Button variant="secondary">В корзину</Button>
    </CardBox>
  );
};

export default Card;
