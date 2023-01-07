import React, { useEffect, useState } from 'react';
import './aboutProduct.scss';
import booksIcon from './../../static/books-pile.png';
import zoomIcon from './../../static/zoom-icon.png';
import crossIcon from './../../static/white-cross.png';
import friendlyOrc from './../../static/friendly-orc.jpg';
import CategoriesProdPage from '../../components/categoriesProdPage/CategoriesProdPage';
import RatingDisplay from '../../components/ratingDisplay/RatingDisplay';
import * as types from './../../staticData/baseTypes';
import { useSearchParams, Link } from 'react-router-dom';
import { GAMES } from '../../store/reducer/games';
import { useAppDispatch, useAppSelector } from '../../store';
import { gameActions } from '../../store/reducer/cartGamesReducer';
import toggleElementDisplay from '../../helperFunctions/displayToggler';
import { EMPTY_GAME } from '../../staticData/baseValues';
import ProducerPage from '../../components/producerPage/ProducerPage';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';

function AboutProduct() {
  const [searchParams] = useSearchParams();
  const [thisGame, setThisGame] = useState(EMPTY_GAME);
  const [displayGame, setDisplayGame] = useState(false);
  const arrOfGames: types.TGame[] = [];
  const [producerGames, setProducerGames] = useState(arrOfGames);
  const { cartGames } = useAppSelector((state) => state.cartGameReducer);
  const dispatch = useAppDispatch();
  const addGameToCart = (newGame: types.TGame) => {
    dispatch(gameActions.addGameToCart(newGame));
  };
  const removeGame = (id: types.curGameID) => {
    dispatch(gameActions.removeGame(id));
  };
  const isGameInCart = (id: number) => {
    return cartGames.some((game) => game.game.id === id);
  };

  useEffect(() => {
    const id = searchParams.get('id');
    const prodBy = searchParams.get('prodBy');

    if (id) {
      const displayedGame = GAMES.find((game) => game.id === +id) || EMPTY_GAME;
      setDisplayGame(true);
      setThisGame(displayedGame);
    } else setDisplayGame(false);
    if (prodBy) {
      const producer = prodBy.split('-').join(' ');
      const games = GAMES.filter((game) => game.produced === producer);
      setProducerGames(games);
    }
  }, [searchParams]);

  function returnProducerPage() {
    return <ProducerPage games={producerGames} />;
  }

  function returnEmptyBlock() {
    return (
      <div className="empty-block">
        <p className="empty-block__message">
          There is no such treasure in our lands. Please, choose from the
          displayed ones.
        </p>
        <img className="empty-block__img" src={friendlyOrc} alt="" />
      </div>
    );
  }

  function returnGameData() {
    return (
      <>
        <div className="pp-crumbs-block">
          <BreadCrumbs
            params={{ producer: thisGame.produced, game: thisGame }}
          />
        </div>
        <div className="pp_parent-block">
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
                    setBlockVerticalPosition();
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
                <p className="pp-dtls-box__stock">
                  In stock: {thisGame.inStock}
                </p>
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
                onClick={() =>
                  isGameInCart(thisGame.id)
                    ? removeGame({ id: thisGame.id })
                    : addGameToCart(thisGame)
                }
              >
                {isGameInCart(thisGame.id) ? 'Game added' : 'Send to cart'}
              </button>
              <Link to={`/cart`}>
                <button
                  className="pp-controls__btn btn-buy-now"
                  onClick={() => {
                    addGameToCart(thisGame);
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
      </>
    );
  }

  if (displayGame)
    return thisGame === EMPTY_GAME ? returnEmptyBlock() : returnGameData();
  return returnProducerPage();
}

function setBlockVerticalPosition() {
  const verticalPosition: number = document.body.getBoundingClientRect().y;
  const imageBlock = document.querySelector('.pp-magnified-img') as HTMLElement;
  const value = Math.abs(verticalPosition);
  imageBlock.style.top = `${value}px`;
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
