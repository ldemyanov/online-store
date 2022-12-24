import React from 'react';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import './shopCartCard.scss';
import { TCartGame } from '../../store/reducer/cartGames';

function ShopCartCard({ game, quantity }: TCartGame) {
  return (
    <div className="sc-game-card">
      <div className="sc-game-data">
        <div
          className="sc-game-data__img"
          style={{ backgroundImage: `url(${game.images[0]})` }}
        ></div>
        {/* <img className="sc-game-data__img" src={game.images[0]} alt="" /> */}
        <div className="sc-game-card-dtls">
          <p className="sc-game-card-dtls__name">{game.name}</p>
          <div className="sc-game-card-dtls__categories">
            <p>Categories:</p>
            <CategoriesDisplay categories={game.categories} />
          </div>
          <div className="sc-game-card-dtls__rating">
            <p>Rating:</p>
            <RatingDisplay rating={game.rating} />
          </div>
          <div className="sc-game-quantity">
            <span className="sc-game-quantity__line">Quantity:</span>
            <div className="sc-game-quantity-panel">
              <button className="sc-game-quantity-panel__btn sc-quantity-btn-less">
                -
              </button>
              <span className="sc-game-quantity-panel__num">{quantity}</span>
              <button className="sc-game-quantity-panel__btn sc-quantity-btn-more">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-game-description">
        <p className="sc-game-description__head">Description:</p>
        <p className="sc-game-description__text">{game.description}</p>
      </div>
      <div className="sc-game-card__price">
        <p> Price: {game.price * quantity} $</p>
      </div>
    </div>
  );
}

export default ShopCartCard;
