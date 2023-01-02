import React from 'react';
import { useLocation } from 'react-router-dom';
import './aboutProduct.scss';
import booksIcon from './../../static/books-pile.png';
import zoomIcon from './../../static/zoom-icon.png';
import CategoriesProdPage from '../../components/categoriesProdPage/CategoriesProdPage';
import RatingDisplay from '../../components/ratingDisplay/RatingDisplay';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// const cartObject = {
//   totalQuantity: 3,
//   totalPrice: 69.2,
//   chosenGames: {
//     name: 'Gloomhaven',
//     id: 234234234,
//   },
// };

const gameObject = {
  id: 212023017,
  name: '1846: The Race for the Midwest',
  price: 59.16,
  inStock: 91,
  rating: 5,
  description:
    '1846 is an 18XX game that traces the westward expansion of railways across the Midwestern United States. As in other 18XX games, the winner is the player with the greatest combined wealth (cash on hand + value of stock held + value of private companies owned) at the end of the game. Play proceeds in a series of stock rounds, each followed by a pair of operating rounds. In stock rounds, players act as investors buying and selling stock in corporations. During operating rounds, corporations will lay track, build stations, run trains for revenue to be paid out as dividends or withheld, and buy trains. The majority shareholder of each corporation acts at its president, making all decisions during operating rounds. Players will continue operating companies, collecting dividends, and reinvesting until the bank breaks.',
  numOfPlayers: 6,
  categories: ['strategy', 'economy'],
  images: [
    'https://live.staticflickr.com/65535/52602799073_0fef2d80e1_c.jpg',
    'https://live.staticflickr.com/65535/52602799098_0ec8b99e2f_c.jpg',
    'https://live.staticflickr.com/65535/52602716035_2477a02449_c.jpg',
    'https://live.staticflickr.com/65535/52602547359_ed3beb6d5e_c.jpg',
  ],
  previewImg:
    'https://live.staticflickr.com/65535/52602547369_e42ecf217d_z.jpg',
  produced: 'GMT Games',
};

function AboutProduct() {
  const query = useQuery();
  const params = query.entries();
  for (const [key, value] of params) {
    console.log(key, value);
  }

  return (
    <div className="pp-game">
      <h2 className="pp-game__name">{gameObject.name}</h2>
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
            style={{ backgroundImage: `url(${gameObject.images[0]})` }}
            data-url={gameObject.images[0]}
          ></div>
        </div>
        <div className="pp-dtls-box">
          <p className="pp-dtls-box__price">By: {gameObject.produced}</p>
          <p className="pp-dtls-box__price">Price: {gameObject.price}$</p>
          <p className="pp-dtls-box__stock">In stock: {gameObject.inStock}</p>
          <div className="pp-dtls-box__rating">
            <span className="pp-rating-name">Rating:</span>
            <span className="pp-rating-box">
              <RatingDisplay rating={gameObject.rating} />
            </span>
          </div>
          <CategoriesProdPage
            {...{
              categories: gameObject.categories,
              values: [0, 1, 2, 3, 4, 5],
            }}
          />
        </div>
      </div>
      <div className="pp-controls">
        <div className="pp-img-panel" onClick={(e) => displayImg(e)}>
          <img className="pp-img-panel__img" src={gameObject.images[0]} />
          <img className="pp-img-panel__img" src={gameObject.images[1]} />
          <img className="pp-img-panel__img" src={gameObject.images[2]} />
          <img className="pp-img-panel__img" src={gameObject.images[3]} />
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
      <p className="pp-game__description">{gameObject.description}</p>
    </div>
  );
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
