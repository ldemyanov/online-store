import React, { useEffect, useState } from 'react';
import './aboutProduct.scss';
import booksIcon from './../../static/books-pile.png';
import zoomIcon from './../../static/zoom-icon.png';
import crossIcon from './../../static/white-cross.png';
import CategoriesProdPage from '../../components/categoriesProdPage/CategoriesProdPage';
import RatingDisplay from '../../components/ratingDisplay/RatingDisplay';
import { useSearchParams } from 'react-router-dom';
import { games } from '../../store/reducer/games';
import { TGame } from '../../store/reducer/games';
import { useAppDispatch, useAppSelector } from '../../store';

import { gameActions } from '../../store/reducer/cartGamesReducer';
import { Link } from 'react-router-dom';
import toggleElementDisplay from '../../helperFunctions/displayToggler';

const emptyGame = {
  id: 0,
  name: 'dummy',
  price: 0,
  inStock: 0,
  rating: 0,
  description: 'dummy',
  numOfPlayers: 0,
  categories: ['dummy'],
  images: ['dummy'],
  previewImg: 'dummy',
  produced: 'dummy',
};

function AboutProduct() {
  const [searchParams] = useSearchParams();
  const [thisGame, setThisGame] = useState(emptyGame);
  const { cartGames } = useAppSelector((state) => state.cartGameReducer);
  const dispatch = useAppDispatch();
  const addGameToCart = (newGame: TGame) => {
    dispatch(gameActions.addGameToCart(newGame));
  };
  const isGameInCart = (id: number) => {
    return cartGames.some((game) => game.game.id === id);
  };

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const displayedGame = games.find((game) => game.id === +id) || emptyGame;
      setThisGame(displayedGame);
    }
  }, [searchParams]);

  function returnEmptyBlock() {
    return <div>No Game</div>;
  }

  function returnGameData() {
    return (
      <div>
        <div className="pp-magnified-img dissolved hidden">
          <img
            className="pp-magnified-img__img"
            src={thisGame.images[0]}
            alt="game image"
          />
          <button
            className="pp-magnified-img__close"
            onClick={() => {
              toggleElementDisplay('.pp-magnified-img');
              document.body.style.overflow = 'visible';
            }}
          >
            <img src={crossIcon} alt="" />
          </button>
        </div>

        <div className="pp-game">
          <h2 className="pp-game__name">{thisGame.name}</h2>
          <div className="pp-game__details">
            <div className="pp-img-box">
              <div
                className="pp-zoom-btn"
                onClick={() => {
                  toggleElementDisplay('.pp-magnified-img');
                  document.body.style.overflow = 'hidden';
                }}
              >
                <img
                  className="pp-zoom-btn__img"
                  src={zoomIcon}
                  alt="zoom button"
                />
              </div>
              <div
                className="pp-img-box__img"
                style={{ backgroundImage: `url(${thisGame.images[0]})` }}
                data-url={thisGame.images[0]}
              ></div>
            </div>
            <div className="pp-dtls-box">
              <p className="pp-dtls-box__price">By: {thisGame.produced}</p>
              <p className="pp-dtls-box__price">Price: {thisGame.price}$</p>
              <p className="pp-dtls-box__stock">In stock: {thisGame.inStock}</p>
              <div className="pp-dtls-box__rating">
                <span className="pp-rating-name">Rating:</span>
                <span className="pp-rating-box">
                  <RatingDisplay rating={thisGame.rating} />
                </span>
              </div>
              <CategoriesProdPage
                {...{
                  categories: thisGame.categories,
                  values: [0, 1, 2, 3, 4, 5],
                }}
              />
            </div>
          </div>
          <div className="pp-controls">
            <div className="pp-img-panel" onClick={(e) => displayImg(e)}>
              <img className="pp-img-panel__img" src={thisGame.images[0]} />
              <img className="pp-img-panel__img" src={thisGame.images[1]} />
              <img className="pp-img-panel__img" src={thisGame.images[2]} />
              <img className="pp-img-panel__img" src={thisGame.images[3]} />
            </div>
            <button
              className={
                `pp-controls__btn btn-send-to-cart ` +
                (isGameInCart(thisGame.id) ? 'btn-alrd-added' : '')
              }
              onClick={() => addGameToCart(thisGame)}
            >
              {isGameInCart(thisGame.id) ? 'Game added' : 'Send to cart'}
            </button>
            <Link to={`/cart`}>
              <button
                className="pp-controls__btn btn-buy-now"
                onClick={() => {
                  setTimeout(() => {
                    toggleElementDisplay('.pchs-module');
                    toggleElementDisplay('.pchs-module-overlay');
                    document.body.style.overflow = 'hidden';
                  }, 100);
                }}
              >
                Buy now
              </button>
            </Link>
          </div>
          <div className="pp-game__split-line">
            <img
              className="pp-game__decor"
              src={booksIcon}
              alt="pile of books image"
            />
          </div>
          <h3 className="pp-game__descr-head">Description:</h3>
          <p className="pp-game__description">{thisGame.description}</p>
        </div>
      </div>
    );
  }

  return thisGame === emptyGame ? returnEmptyBlock() : returnGameData();
}

function displayImg(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  if (!(e.target as Element).closest('.pp-img-panel__img')) return;
  const chosenImage = (e.target as Element).closest(
    '.pp-img-panel__img'
  ) as HTMLImageElement;
  const mainImgBlock = document.querySelector(
    '.pp-img-box__img'
  ) as HTMLElement;
  const magnifiedImg = document.querySelector(
    '.pp-magnified-img__img'
  ) as HTMLImageElement;
  mainImgBlock.style.backgroundImage = `url(${chosenImage.src})`;
  magnifiedImg.src = chosenImage.src;
  mainImgBlock.dataset.url = chosenImage.src;
}

export default AboutProduct;
