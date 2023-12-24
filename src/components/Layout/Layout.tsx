import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import LayoutBox from './LayoutBox';

const Layout = () => {
  return (
    <LayoutBox>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </LayoutBox>
  );
};

export default Layout;
