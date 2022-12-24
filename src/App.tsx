import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import AboutProduct from './pages/aboutProduct/AboutProduct';
import Store from './pages/store/Store';
import { appStore } from './store';
import Wrapper from './wrapper/wrapper';

function App() {
  return (
    <Provider store={appStore()}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/product" element={<AboutProduct />} />
          <Route />
        </Routes>
      </Wrapper>
    </Provider>
  );
}

export default App;
