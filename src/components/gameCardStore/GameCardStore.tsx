import React from 'react';
import './GameCardStore.scss';
import tick from './../../static/tick.png';
import cross from './../../static/cross.png';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';

const gameObject = {
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
};

function GameCardStore() {
  return (
    <>
      <div className="game-card">
        <img
          className="game-card__img"
          src={gameObject.images[0]}
          alt="Image of a game"
        />
        <p className="game-card__name">{gameObject.name}</p>
        <div className="game-dtls">
          <div className="game-dtls__rc">
            <RatingDisplay {...gameObject} />
            <CategoriesDisplay {...gameObject} />
          </div>
          <div className="game-dtls__psb">
            <div className="price-stock">
              <p className="price-stock__price">
                Price: {gameObject.price.toString()}
              </p>
              <p className="price-stock__stock">
                In stock:{' '}
                <img
                  className="game-dtls__instock-img"
                  src={gameObject.inStock > 0 ? tick : cross}
                />
              </p>
            </div>
            <button className="game-dtls__add-btn" data-gameid={gameObject.id}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameCardStore;
