import { Box } from 'components/Shared/Shared.styled';
import { ReactElement } from 'react';
import {
  BackgroundImgBox,
  BackgroundImgBox2,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Ellipse6,
} from './CatalogBackground.styled';

type Props = {
  children: ReactElement[];
};

const CatalogBackground = ({ children }: Props) => {
  return (
    <Box>
      <Ellipse1 />
      <Ellipse2 />
      <Ellipse3 />
      <Ellipse4 />
      <Ellipse5 />
      <Ellipse6 />
      <BackgroundImgBox />
      <BackgroundImgBox2 />

      {children}
    </Box>
  );
};

export default CatalogBackground;
