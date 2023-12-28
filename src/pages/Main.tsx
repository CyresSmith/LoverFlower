import BackgroundBox from 'components/Main/BackgroundBox';
import Catalog from 'components/Main/Catalog';
import Hero from 'components/Main/Hero';
import Instagram from 'components/Main/Instagram';
import Order from 'components/Main/Order';
import Popular from 'components/Main/Popular';
import Question from 'components/Main/Question';

const Main = () => {
  return (
    <BackgroundBox>
      <Hero />
      <Catalog />
      <Popular />
      <Order />
      <Question />
      <Instagram />
    </BackgroundBox>
  );
};

export default Main;
