import Catalog from 'components/Main/Catalog';
import Hero from 'components/Main/Hero';
import Instagram from 'components/Main/Instagram';
import Order from 'components/Main/Order';
import Popular from 'components/Main/Popular';
import Question from 'components/Main/Question';

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <Hero />
      <Catalog />
      <Popular />
      <Order />
      <Question />
      <Instagram />
    </>
  );
};

export default Main;
