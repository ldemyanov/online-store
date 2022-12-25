import React from 'react';
import './GameInCartCard.scss';
import { TCartGame } from '../../store/reducer/cartGames';
import { useAppDispatch } from '../../store';
import { gameActions } from '../../store/reducer/cartGamesReducer';

function GameInCartCard({ game, quantity }: TCartGame) {
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
      <img className="hd-game-card__img" src={game.images[0]} alt="" />
      <div className="hd-game-card-dtls">
        <p className="hd-game-card-dtls__name">{game.name}</p>
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
