import React from 'react';
import './GameCard.scss';
import tick from './../../static/tick.png';
import cross from './../../static/cross.png';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';

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

function GameCard(props: gameObjectType) {
  return (
    <div className="game-card">
      <img
        className="game-card__img"
        src={props.images[0]}
        alt="Image of a game"
      />
      <p className="game-card__name">{props.name}</p>
      <div className="game-dtls">
        <div className="game-dtls__rc">
          <RatingDisplay rating={props.rating} />
          <CategoriesDisplay categories={props.categories} />
        </div>
        <div className="game-dtls__psb">
          <div className="price-stock">
            <p className="price-stock__price">
              Price: {props.price.toString()}
            </p>
            <p className="price-stock__stock">
              In stock:{' '}
              <img
                className="game-dtls__instock-img"
                src={props.inStock > 0 ? tick : cross}
              />
            </p>
          </div>
          <button className="game-dtls__add-btn">Add to Card</button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
