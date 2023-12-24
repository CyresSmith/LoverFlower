import { IAbsoluteText } from 'components/Shared/types';
import { ReactElement } from 'react';
import {
  BackgroundImgBox,
  BackgroundImgBox2,
  BackgroundText,
  Bottom,
  Box,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Ellipse6,
  Ellipse7,
} from './LayoutBox.styled';

import Lover_flower from 'assets/svg/lover_flower.svg?react';

const BackgroundTextArr: IAbsoluteText[] = [
  {
    position: {
      sideX: 'top',
      sizeX: 1384,
      sideY: 'left',
      sizeY: 1030,
    },
    text: 'букеты',
  },
  {
    position: {
      sideX: 'top',
      sizeX: 1600,
      sideY: 'right',
      sizeY: 1036,
    },
    text: 'Цветы',
  },
  {
    position: {
      sideX: 'top',
      sizeX: 1839,
      sideY: 'left',
      sizeY: 880,
    },
    text: 'дополнительно',
  },
];

type Props = {
  children: ReactElement[];
};

const LayoutBox = ({ children }: Props) => {
  return (
    <Box>
      <BackgroundImgBox />
      <Ellipse1 />
      <Ellipse2 />
      {BackgroundTextArr.map(({ position, text }) => (
        <BackgroundText key={text} {...position}>
          {text}
        </BackgroundText>
      ))}
      <Ellipse3 />
      <Ellipse4 />
      <Ellipse5 />
      <Ellipse6 />
      <Ellipse7 />
      <Bottom />
      <BackgroundImgBox2 />
      <Lover_flower
        style={{ position: 'absolute', top: '4120px', right: '500px' }}
      />
      {children}
    </Box>
  );
};

export default LayoutBox;
