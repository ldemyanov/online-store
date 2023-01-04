import React, { useEffect, useState } from 'react';
import './aboutProduct.scss';
import booksIcon from './../../static/books-pile.png';
import zoomIcon from './../../static/zoom-icon.png';
import CategoriesProdPage from '../../components/categoriesProdPage/CategoriesProdPage';
import RatingDisplay from '../../components/ratingDisplay/RatingDisplay';
import { useSearchParams } from 'react-router-dom';
import { GAMES } from '../../store/reducer/games';

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

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const displayedGame = GAMES.find((game) => game.id === +id) || emptyGame;
      setThisGame(displayedGame);
    }
  }, [searchParams]);

  function returnEmptyBlock() {
    return <div>No Game</div>;
  }

  function returnGameData() {
    return (
      <div className="pp-game">
        <h2 className="pp-game__name">{thisGame.name}</h2>
        <div className="pp-game__details">
          <div className="pp-img-box">
            <div className="pp-zoom-btn">
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
          <button className="pp-controls__btn btn-send-to-cart">
            Send to cart
          </button>
          <button className="pp-controls__btn btn-buy-now">Buy now</button>
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
  mainImgBlock.style.backgroundImage = `url(${chosenImage.src})`;
  mainImgBlock.dataset.url = chosenImage.src;
}

export default AboutProduct;
