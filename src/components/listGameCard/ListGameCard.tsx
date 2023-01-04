import React from 'react';
import './ListGameCard.scss';
import { TGame } from '../../store/reducer/games';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';

type TGameCardProps = {
  game: TGame;
};

function ListGameCard({ game }: TGameCardProps) {
  return (
    <div className="lg-card">
      <div className="lg-card__col">
        <img className="lg-card__image" src={game.images[0]} alt="game image" />
      </div>
      <div className="lg-card__col">
        <div className="lg-card__label">
          <p className="lg-card__name">{game.name}</p>
          <RatingDisplay rating={game.rating} />
        </div>
        <div className="lg-card__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, at
          ad repudiandae aliquid consequatur officia qui sint est corporis, eius
          architecto accusamus. Quam facilis incidunt hic beatae, perferendis
          eaque amet?
        </div>
        <div className="lg-card__category">
          <CategoriesDisplay categories={game.categories} />
        </div>
      </div>
      <div className="lg-card__col">
        <div className="lg-card__price">{game.price}</div>
        <div className="lg-card__stock">In stock: {game.inStock}</div>
        <button className="lg-card__add-btn">Add to cart</button>
      </div>
    </div>
  );
}

export default ListGameCard;
