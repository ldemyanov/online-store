import React from 'react';
import './wrapper.scss';
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';

type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__main">{children}</div>
      <Footer />
    </div>
  );
}

export default Wrapper;
