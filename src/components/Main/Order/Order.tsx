import {
  Container,
  Section,
  SectionTitle,
} from 'components/Shared/Shared.styled';

import {
  BottomBox,
  IImageBox,
  ImageBox,
  LeftSide,
  List,
  ListItem,
  RightSide,
  TitleBox,
  TitleSpan,
} from './Order.styled';

import image2 from 'assets/img/35.jpg';
import image1 from 'assets/img/36.jpg';
import image4 from 'assets/img/37.jpg';
import image3 from 'assets/img/38.jpg';
import Arrow from 'assets/svg/Arrow8.svg?react';
import Button from 'components/ui/Button';

interface IListItem {
  text: string;
}

const listItems: IListItem[] = [
  { text: 'Выберите какие цветы или подарки вы хотите купить' },
  {
    text: 'Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp',
  },
  {
    text: 'Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне',
  },
  {
    text: 'Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен',
  },
  {
    text: 'Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга',
  },
];

const BottomImages: IImageBox[] = [
  { width: 255, height: 292, imgSrc: image2 },
  { width: 160, height: 292, imgSrc: image3 },
  { width: 255, height: 292, imgSrc: image4 },
];

const Order = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          Как сделать <br />
          <span style={{ position: 'relative', top: '-20px' }}>заказ</span>
        </SectionTitle>

        <List>
          {listItems.map(({ text }, i) => (
            <ListItem key={i}>
              <p>
                <span>{i + 1} Шаг</span>
                {text}
              </p>
            </ListItem>
          ))}
        </List>

        <TitleBox>
          <SectionTitle>
            особенный <br />
            <TitleSpan>повод?</TitleSpan>
          </SectionTitle>

          <ImageBox width={255} height={223} imgSrc={image1} />
        </TitleBox>

        <BottomBox>
          <div>
            <LeftSide>
              <p>
                Мы готовы прийти на помощь и собрать уникальный букет, на любой
                вкус, бюджет и для любого события по вашему индивидуальному
                заказу.
              </p>

              <ul>
                <li>учтем даже самые изысканные пожелания;</li>
                <li>
                  подберем свежайшие цветы и сделаем уникальный букет или
                  композицию;
                </li>
                <li>оплатить можно при получении или онлайн на сайте;</li>
              </ul>
            </LeftSide>

            <RightSide>
              {BottomImages.map((item, i) => (
                <ImageBox key={i} {...item} />
              ))}
            </RightSide>

            <Arrow />
          </div>

          <Button>собрать индивидуальный букет</Button>
        </BottomBox>
      </Container>
    </Section>
  );
};

export default Order;
