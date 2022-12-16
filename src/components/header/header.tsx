import React from 'react';
import './header.scss';
import wizard from './../../static/header-wizard.png';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <span className="header-logo__tbltop">Tabletop</span>
        <span className="header-logo__geek">GEEK</span>
        <img className="header-logo__img" src={wizard} alt="wizard" />
      </div>
      <p className="header__moto">WHERE ALL WORLDS INTERSECT...</p>
      <button className="header__btn">Products</button>
    </div>
  );
}

export default Header;
