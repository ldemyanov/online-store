import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import AboutProduct from './pages/aboutProduct/AboutProduct';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import Store from './pages/store/Store';
import { appStore } from './store';
import Wrapper from './wrapper/wrapper';
import WrongDirectoryPage from './pages/404/404page';

function App() {
  return (
    <Provider store={appStore()}>
      <Wrapper>
        <Routes>
          <Route path="*" element={<WrongDirectoryPage />} />
          <Route path="/" element={<Store />} />
          <Route path="/product" element={<AboutProduct />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Wrapper>
    </Provider>
  );
}

export default App;
