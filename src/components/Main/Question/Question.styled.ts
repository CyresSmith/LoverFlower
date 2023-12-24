import styled from '@emotion/styled';
import image2 from 'assets/img/222.png';
import image from 'assets/img/40928663e84bb63936d4ec1b6bbf4a50.png';
import theme from 'theme';

export const QuestionSection = styled.section`
  position: relative;
  padding: 60px 0;
  min-height: 900px;
`;

export const QuestionSectionBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 666px;

  > svg {
    position: absolute;
    top: 269px;
    left: 650px;
  }
`;

export const Ellipse1 = styled.div`
  width: 416.232px;
  height: 427.121px;
  background: ${theme.colors.accent};
  opacity: 0.6;
  filter: blur(125px);

  position: absolute;
  top: 450px;
  left: 50%;
  transform: rotate(32.828deg) translateX(-850px);
`;

export const Ellipse2 = styled.div`
  width: 244.77px;
  height: 285.945px;
  background: ${theme.colors.primary};
  opacity: 0.8;
  filter: blur(125px);

  position: absolute;
  top: 450px;
  left: 50%;
  transform: rotate(32.828deg) translateX(-400px);
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0f2222;
  overflow: hidden;
`;

export const BackgroundImg = styled.div`
  width: 692px;
  height: 1038px;
  background-image: url(${image2});
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(-46.961deg);
  position: absolute;
  top: 10px;
  left: 30px;
  filter: blur(30px);
`;

export const BackgroundImg2 = styled.div`
  width: 692px;
  height: 1038px;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(-46.961deg);
  position: absolute;
  top: 10px;
  left: 30px;
  opacity: 0.8;
`;

export const TitleSpan = styled.span`
  margin-left: 95px;
  position: relative;
  top: -20px;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 221px;

  > p {
    margin-top: 114px;
    letter-spacing: 0.56px;
    text-transform: uppercase;
    position: relative;

    :before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.primary};
      position: absolute;
      display: block;
      top: -53px;
    }
  }
`;
