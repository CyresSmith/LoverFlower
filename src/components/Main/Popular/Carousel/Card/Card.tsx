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

type Props = {};

const isNew = true;
const isSale = true;

const Card = (props: Props) => {
  const badgeType = () => (isNew ? 'new' : isSale ? 'sale' : null);

  return (
    <CardBox>
      <LinkBox to="catalog/filter/buket">
        <ImageBox>
          <img src="https://shop.camellia.ua/upload/kamelia_flora/photos/46/9c/1200x1200/a3603f89_5ed64dc1d812d.JPG" />
          <Overlay />
        </ImageBox>

        {badgeType() && (
          <Badge type={badgeType()}>
            <span>{badgeType()}</span>
          </Badge>
        )}

        <CardTitle>лучший день</CardTitle>

        <Price>167.000 ₴ {isSale && <span>167.000 ₴</span>}</Price>
      </LinkBox>

      <Button variant="secondary">В корзину</Button>
    </CardBox>
  );
};

export default Card;
