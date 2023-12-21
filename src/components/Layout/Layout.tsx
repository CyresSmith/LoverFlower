import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
