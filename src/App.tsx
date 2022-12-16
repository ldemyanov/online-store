import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutProduct from './pages/aboutProduct/AboutProduct';
import Store from './pages/store/Store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/product" element={<AboutProduct />} />
      <Route />
    </Routes>
  );
}

export default App;
