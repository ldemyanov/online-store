import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutProduct from './pages/aboutProduct/AboutProduct';
import Store from './pages/store/Store';
import Wrapper from './wrapper/wrapper';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/product" element={<AboutProduct />} />
        <Route />
      </Routes>
    </Wrapper>
  );
}

export default App;
