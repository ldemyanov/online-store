import React from 'react';
import './header.scss';
import wizard from './../../static/header-wizard.png';
import HeaderCart from '../../components/headerCart/HeaderCart';
import { useNavigate, useMatch } from 'react-router-dom';

function Header() {
  const match = useMatch('/');

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header-logo">
          <span className="header-logo__tbltop">Tabletop</span>
          <span className="header-logo__geek">GEEK</span>
          <img className="header-logo__img" src={wizard} alt="wizard" />
        </div>
        <p className="header__moto">WHERE ALL WORLDS INTERSECT...</p>
        <button
          className="header__btn"
          onClick={() => {
            if (!match) navigate('/');
          }}
        >
          Products
        </button>
      </div>
      <HeaderCart />
    </div>
  );
}

export default Header;
