import QuestionSvg from 'assets/svg/questions_.svg?react';
import { Container, SectionTitle } from 'components/Shared/Shared.styled';

import Form from './Form';
import {
  Background,
  BackgroundImg,
  BackgroundImg2,
  Ellipse1,
  Ellipse2,
  QuestionSection,
  QuestionSectionBox,
  TitleBox,
  TitleSpan,
} from './Question.styled';

const Question = () => {
  return (
    <QuestionSection>
      <QuestionSectionBox>
        <Background>
          <Ellipse1 />
          <Ellipse2 />
        </Background>
        <BackgroundImg />
        <BackgroundImg2 />

        <QuestionSvg />
      </QuestionSectionBox>

      <Container>
        <TitleBox>
          <SectionTitle>
            остались <TitleSpan>вопросы?</TitleSpan>
          </SectionTitle>

          <p>
            Отправьте ваш вопрос, заказ, предложение или жалобу через форму
            обратной связи, и наш специалист свяжется с вами в течение 15 минут.
          </p>
        </TitleBox>

        <Form />
      </Container>
    </QuestionSection>
  );
};

export default Question;
