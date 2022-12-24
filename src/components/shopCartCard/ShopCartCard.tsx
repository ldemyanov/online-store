import React from 'react';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import './shopCartCard.scss';
// import './HeaderCart.scss';

type gameObjectType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  numOfPlayers: number;
  categories: string[];
  inStock: number;
  images: string[];
  description: string;
};

function ShopCartCard(props: { gameObj: gameObjectType; quantity: number }) {
  return (
    <div className="sc-game-card">
      <div className="sc-game-data">
        <img
          className="sc-game-data__img"
          src={props.gameObj.images[0]}
          alt=""
        />
        <div className="sc-game-card-dtls">
          <p className="sc-game-card-dtls__name">{props.gameObj.name}</p>
          <div className="sc-game-card-dtls__categories">
            <p>Categories:</p>
            <CategoriesDisplay categories={props.gameObj.categories} />
          </div>
          <div className="sc-game-card-dtls__rating">
            <p>Rating:</p>
            <RatingDisplay rating={props.gameObj.rating} />
          </div>
          <div className="sc-game-quantity">
            <span className="sc-game-quantity__line">Quantity:</span>
            <div className="sc-game-quantity-panel">
              <button className="sc-game-quantity-panel__btn sc-quantity-btn-less">
                -
              </button>
              <span className="sc-game-quantity-panel__num">
                {props.quantity}
              </span>
              <button className="sc-game-quantity-panel__btn sc-quantity-btn-more">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-game-description">
        <p className="sc-game-description__head">Description:</p>
        <p className="sc-game-description__text">{props.gameObj.description}</p>
      </div>
      <div className="sc-game-card__price">
        <p> Price: {props.gameObj.price * props.quantity} $</p>
      </div>
    </div>
  );
}

export default ShopCartCard;
