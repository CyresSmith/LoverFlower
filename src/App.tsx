import Layout from 'components/Layout';
import Loader from 'components/Loader';
import About from 'pages/About';
import Catalog from 'pages/Catalog';
import Contacts from 'pages/Contacts';
import CorporativeClients from 'pages/CorporativeClients';
import Faq from 'pages/Faq';
import Main from 'pages/Main';
import Order from 'pages/Order';
import Page404 from 'pages/Page404';
import PaymentError from 'pages/PaymentError';
import Product from 'pages/Product';
import Search from 'pages/Search';
import Shipping from 'pages/Shipping';
import SuccessfulPayment from 'pages/SuccessfulPayment';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/catalog/:filter/:bouquetName" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/successful" element={<SuccessfulPayment />} />
          <Route path="/error" element={<PaymentError />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/search" element={<Search />} />
          <Route path="/corporative" element={<CorporativeClients />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
