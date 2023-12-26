import Footer from 'components/Footer';
import Header from 'components/Header';
import ToTopButton from 'components/ui/ToTopButton';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutBox from './LayoutBox';

const Layout = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header scroll={scroll} />
      <LayoutBox>
        <main>
          <Outlet />
        </main>
      </LayoutBox>
      <Footer />
      <ToTopButton scroll={scroll} />
    </>
  );
};

export default Layout;
