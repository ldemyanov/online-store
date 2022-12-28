import React from 'react';
import './HeaderCart.scss';
import cartIcon from './../../static/cart-icon.png';
import toggleElementDisplay from '../../helperFunctions/displayToggler';
import HeaderCardsContainer from '../headerCardsContainer/HeaderCardsContainer';
import { useAppSelector } from '../../store';

function HeaderCart() {
  const { cartGames, totalPrice, discount } = useAppSelector(
    (state) => state.cartGameReducer
  );

  return (
    <div className="hd-cart">
      <div className="hd-btn">
        <img
          className="hd-btn__img"
          src={cartIcon}
          alt="cart button"
          onClick={() => toggleElementDisplay('.cart-content')}
        />
      </div>
      <div className="cart-content dissolved hidden">
        <p className="cart-content__ttl-num">Total games: {cartGames.length}</p>
        <p className="cart-content__ttl-price">
          Total price:{' '}
          <span className="cart-old-price">
            {discount > 0 ? Math.round(totalPrice * 100) / 100 : ''}
          </span>{' '}
          {discount < 100
            ? Math.round((totalPrice - (totalPrice * discount) / 100) * 100) /
              100
            : 0}{' '}
          $
        </p>
        <HeaderCardsContainer />
        <button className="cart-content__btn">Open my cart</button>
      </div>
    </div>
  );
}

export default HeaderCart;
