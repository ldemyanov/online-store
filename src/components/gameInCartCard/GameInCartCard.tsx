import React from 'react';
import './GameInCartCard.scss';

type gameObjectType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  numOfPlayers: number;
  categories: string[];
  inStock: number;
  images: string[];
};

function GameInCartCard(props: { gameObj: gameObjectType; quantity: number }) {
  return (
    <div className="hd-game-card">
      <img className="hd-game-card__img" src={props.gameObj.images[0]} alt="" />
      <div className="hd-game-card-dtls">
        <p className="hd-game-card-dtls__name">{props.gameObj.name}</p>
        <p className="hd-game-card-dtls__price">
          Price: {props.gameObj.price * props.quantity} $
        </p>
        <div className="hd-game-quantity">
          <span className="hd-game-quantity__line">Quantity:</span>
          <div className="hd-game-quantity-panel">
            <button className="hd-game-quantity-panel__btn hd-quantity-btn-less">
              -
            </button>
            <span className="hd-game-quantity-panel__num">
              {props.quantity}
            </span>
            <button className="hd-game-quantity-panel__btn hd-quantity-btn-more">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInCartCard;
