import React from 'react';
import './ListGameCard.scss';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';
import { useAppDispatch, useAppSelector } from '../../store';
import { gameActions } from '../../store/reducer/cartGamesReducer';
import { Link } from 'react-router-dom';
import * as types from './../../staticData/baseTypes';

function ListGameCard({ game }: types.TGameCardProps) {
  const dispatch = useAppDispatch();
  const { cartGames } = useAppSelector((state) => state.cartGameReducer);
  const addGameToCart = (newGame: types.TGame) => {
    dispatch(gameActions.addGameToCart(newGame));
  };
  const isGameInCart = (id: number) => {
    return cartGames.some((game) => game.game.id === id);
  };

  return (
    <div className="lg-card">
      <div className="lg-card__col">
        <Link to={`/product?id=${game.id}`}>
          <img
            className="lg-card__image"
            src={game.previewImg}
            alt="game image"
          />
        </Link>
      </div>
      <div className="lg-card__col">
        <div className="lg-card__label">
          <Link to={`/product?id=${game.id}`}>
            <p className="lg-card__name">{game.name}</p>
          </Link>
          <RatingDisplay rating={game.rating} />
        </div>
        <div className="lg-card__description">{game.description}</div>
        <div className="lg-card__category">
          <CategoriesDisplay categories={game.categories} />
        </div>
      </div>
      <div className="lg-card__col">
        <div className="lg-card__price">{game.price}</div>
        <div className="lg-card__stock">In stock: {game.inStock}</div>
        <button
          className={
            `lg-card__add-btn ` +
            (isGameInCart(game.id) ? 'btn-alrd-added' : '')
          }
          onClick={() => addGameToCart(game)}
        >
          {isGameInCart(game.id) ? 'Game added' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}

export default ListGameCard;
