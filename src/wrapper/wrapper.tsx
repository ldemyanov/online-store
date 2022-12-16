import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';

type WrapperProps = {
  children: React.ReactNode; // 👈️ type children
};

function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}

export default Wrapper;
