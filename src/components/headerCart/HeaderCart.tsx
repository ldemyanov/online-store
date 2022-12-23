import React from 'react';
import './HeaderCart.scss';
import cartIcon from './../../static/cart-icon.png';
import GameInCartCard from '../gameInCartCard/GameInCartCard';

const cartState = {
  totalPrice: 134.5,
  games: [
    {
      id: 23272845354,
      name: 'Gloomhaven',
      price: 120.99,
      rating: 5,
      numOfPlayers: 5,
      categories: ['strategy', 'cards', 'quiz'],
      inStock: 13,
      images: [
        'https://live.staticflickr.com/65535/52573820618_ce5b98a77c_m.jpg',
        'https://live.staticflickr.com/65535/52563442461_eb68758353_b.jpg',
        'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
        'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
      ],
    },
  ],
};

function HeaderCart() {
  return (
    <div className="hd-cart">
      <div className="hd-btn">
        <img className="hd-btn__img" src={cartIcon} alt="cart button" />
      </div>
      <div className="cart-content">
        <p className="cart-content__ttl-num">
          Total games: {cartState.games.length}
        </p>
        <p className="cart-content__ttl-price">
          Total price: {cartState.totalPrice} $
        </p>
        <div className="cart-games">
          <GameInCartCard
            {...{
              gameObj: cartState.games[0],
              quantity: 1,
            }}
          />
          <GameInCartCard
            {...{
              gameObj: cartState.games[0],
              quantity: 1,
            }}
          />
          <GameInCartCard
            {...{
              gameObj: cartState.games[0],
              quantity: 1,
            }}
          />
          <GameInCartCard
            {...{
              gameObj: cartState.games[0],
              quantity: 1,
            }}
          />
          <GameInCartCard
            {...{
              gameObj: cartState.games[0],
              quantity: 1,
            }}
          />
        </div>
        <button className="cart-content__btn">Open my cart</button>
      </div>
    </div>
  );
}

export default HeaderCart;
