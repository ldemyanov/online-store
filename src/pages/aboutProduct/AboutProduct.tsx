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
  id: 23272845354,
  name: 'Gloomhaven',
  price: 120.99,
  rating: 5,
  numOfPlayers: 5,
  categories: ['strategy', 'cards', 'quiz'],
  inStock: 13,
  images: [
    'https://live.staticflickr.com/65535/52573820618_ce5b98a77c_m.jpg',
    'https://live.staticflickr.com/65535/52563442461_eb68758353_b.jpg',
    'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
    'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  ],
  description:
    'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Also, players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.',
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
          <img className="pp-img-box__img" src={gameObject.images[0]} alt="" />
        </div>
        <div className="pp-dtls-box">
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
        <div className="pp-img-panel">
          <img className="pp-img-panel__img" src={gameObject.images[0]} />
          <img className="pp-img-panel__img" src={gameObject.images[1]} />
          <img className="pp-img-panel__img" src={gameObject.images[2]} />
          <img className="pp-img-panel__img" src={gameObject.images[3]} />
        </div>
        <button className="pp-controls__btn">Send to cart</button>
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

export default AboutProduct;
