import React from 'react';
import './GameCard.scss';
import tick from './../../static/tick.png';
import cross from './../../static/cross.png';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';
import { TGame } from '../../store/reducer/games';

type TGameCardProps = {
  game: TGame;
};

function GameCard({ game }: TGameCardProps) {
  return (
    <div className="game-card">
      <img
        className="game-card__img"
        src={game.images[0]}
        alt="Image of a game"
      />
      <p className="game-card__name">{game.name}</p>
      <div className="game-dtls">
        <div className="game-dtls__rc">
          <RatingDisplay rating={game.rating} />
          <CategoriesDisplay categories={game.categories} />
        </div>
        <div className="game-dtls__psb">
          <div className="price-stock">
            <p className="price-stock__price">Price: {game.price.toString()}</p>
            <p className="price-stock__stock">
              In stock:{' '}
              <img
                className="game-dtls__instock-img"
                src={game.inStock > 0 ? tick : cross}
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
