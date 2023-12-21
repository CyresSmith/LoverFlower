import {
  Bottom,
  Box,
  Ellipse1,
  Ellipse2,
  HeroBackgroundImgBox,
  HeroImgBox,
  Title,
} from './HeroBackground.styled';

const HeroBackground = () => {
  return (
    <Box>
      <HeroBackgroundImgBox />
      <Ellipse1 />
      <Ellipse2 />
      <Title>
        <span>Lover</span>
        <span>Flower</span>
      </Title>
      <HeroImgBox />
      <Bottom />
    </Box>
  );
};

export default HeroBackground;
