import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import LayoutBox from './LayoutBox';

const Layout = () => {
  return (
    <>
      <Header />
      <LayoutBox>
        <main>
          <Outlet />
        </main>
      </LayoutBox>
      <Footer />
    </>
  );
};

export default Layout;
