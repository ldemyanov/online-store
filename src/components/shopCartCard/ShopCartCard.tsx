import React from 'react';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import './shopCartCard.scss';
import { ICartGame } from '../../store/reducer/cartGames';
import { useAppDispatch } from '../../store';
import { gameActions } from '../../store/reducer/cartGamesReducer';
import { Link } from 'react-router-dom';

function ShopCartCard({ game, quantity, position }: ICartGame) {
  const dispatch = useAppDispatch();
  const id = game.id;

  const incQuantity = (id: number) => {
    dispatch(gameActions.incQuantity({ id }));
  };
  const decQuantity = (id: number) => {
    dispatch(gameActions.decQuantity({ id }));
  };

  return (
    <div className="sc-game-card">
      <p className="sc-game-card__position">{position}</p>
      <Link to={`/product?id=${id}`}>
        <p className="sc-game-card__name">{game.name}</p>
      </Link>
      <p className="sc-game-card__produced"> by: {game.produced}</p>
      <div className="sc-game-card__content">
        <div className="sc-game-data">
          <Link to={`/product?id=${id}`}>
            <div
              className="sc-game-data__img"
              style={{ backgroundImage: `url(${game.previewImg})` }}
            ></div>
          </Link>
          <div className="sc-game-card-dtls">
            <div className="sc-game-card-dtls__categories">
              <p>Categories:</p>
              <CategoriesDisplay categories={game.categories} />
            </div>
            <div className="sc-game-card-dtls__rating">
              <p>Rating:</p>
              <RatingDisplay rating={game.rating} />
            </div>
            <div className="sc-game-card-dtls__rating">
              <p>In stock: {game.inStock}</p>
            </div>
            <div className="sc-game-quantity">
              <span className="sc-game-quantity__line">Quantity:</span>
              <div className="sc-game-quantity-panel">
                <button
                  className="sc-game-quantity-panel__btn sc-quantity-btn-less"
                  onClick={() => decQuantity(id)}
                >
                  -
                </button>
                <span className="sc-game-quantity-panel__num">{quantity}</span>
                <button
                  className="sc-game-quantity-panel__btn sc-quantity-btn-more"
                  onClick={() => incQuantity(id)}
                >
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
          <p> Price: {Math.round(game.price * quantity * 100) / 100} $</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCartCard;
