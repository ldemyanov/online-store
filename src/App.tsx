import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutProduct from './pages/aboutProduct/AboutProduct';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import Store from './pages/store/Store';
import Wrapper from './wrapper/wrapper';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/product" element={<AboutProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route />
      </Routes>
    </Wrapper>
  );
}

export default App;
