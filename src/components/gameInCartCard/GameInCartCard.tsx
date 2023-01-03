import React from 'react';
import './GameInCartCard.scss';
import { ICartGame } from '../../store/reducer/cartGames';
import { useAppDispatch } from '../../store';
import { gameActions } from '../../store/reducer/cartGamesReducer';
import { Link } from 'react-router-dom';

function GameInCartCard({ game, quantity }: ICartGame) {
  const dispatch = useAppDispatch();
  const id = game.id;

  const incQuantity = (id: number) => {
    dispatch(gameActions.incQuantity({ id }));
  };
  const decQuantity = (id: number) => {
    dispatch(gameActions.decQuantity({ id }));
  };

  return (
    <div className="hd-game-card">
      <Link to={`/product?id=${id}`}>
        <div
          className="hd-game-card__img"
          style={{ backgroundImage: `url(${game.images[0]})` }}
        ></div>
      </Link>
      <div className="hd-game-card-dtls">
        <Link to={`/product?id=${id}`}>
          <p className="hd-game-card-dtls__name">{game.name}</p>
        </Link>
        <p className="hd-game-card-dtls__price">
          Price: {Math.round(game.price * quantity * 100) / 100} $
        </p>
        <div className="hd-game-quantity">
          <span className="hd-game-quantity__line">Quantity:</span>
          <div className="hd-game-quantity-panel">
            <button
              className="hd-game-quantity-panel__btn hd-quantity-btn-less"
              onClick={() => decQuantity(id)}
            >
              -
            </button>
            <span className="hd-game-quantity-panel__num">{quantity}</span>
            <button
              className="hd-game-quantity-panel__btn hd-quantity-btn-more"
              onClick={() => incQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInCartCard;
