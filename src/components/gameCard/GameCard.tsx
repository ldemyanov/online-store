import React from 'react';
import './GameCard.scss';
import tick from './../../static/tick.png';
import cross from './../../static/cross.png';
import RatingDisplay from '../ratingDisplay/RatingDisplay';
import CategoriesDisplay from '../categoriesDisplay/CategoriesDisplay';
import { TGame } from '../../store/reducer/games';
import { useAppDispatch, useAppSelector } from '../../store';
import { gameActions, curGameID } from '../../store/reducer/cartGamesReducer';
import { Link } from 'react-router-dom';

type TGameCardProps = {
  game: TGame;
};

function GameCard({ game }: TGameCardProps) {
  const dispatch = useAppDispatch();
  const { cartGames } = useAppSelector((state) => state.cartGameReducer);
  const addGameToCart = (newGame: TGame) => {
    dispatch(gameActions.addGameToCart(newGame));
  };
  const removeGame = (id: curGameID) => {
    dispatch(gameActions.removeGame(id));
  };
  const isGameInCart = (id: number) => {
    return cartGames.some((game) => game.game.id === id);
  };
  const linkString = `/product?prodBy=${game.produced
    .split(' ')
    .join('-')}&id=${game.id}`;

  return (
    <div className="game-card">
      <Link to={linkString}>
        <img
          className="game-card__img"
          src={game.previewImg}
          alt="Image of a game"
        />
      </Link>
      <Link to={linkString}>
        <p className="game-card__name">{game.name}</p>
      </Link>
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
          <button
            className={
              `game-dtls__add-btn ` +
              (isGameInCart(game.id) ? 'btn-alrd-added' : '')
            }
            onClick={() =>
              isGameInCart(game.id)
                ? removeGame({ id: game.id })
                : addGameToCart(game)
            }
          >
            {isGameInCart(game.id) ? 'Game added' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
