import React from 'react';
import './GameCardStore.scss';
import catCards from './../../static/cat-cards.png';
import catEconomy from './../../static/cat-economy.png';
import catKids from './../../static/cat-kids.png';
import catQuiz from './../../static/cat-quiz.png';
import catStrategy from './../../static/cat-strategy.png';
import ratingIcon from './../../static/rating-icon.png';
import tick from './../../static/tick.png';
import cross from './../../static/cross.png';

// const ratingBlock = <img className="rat-img" src={ratingIcon} />;

// type gameObjectType = {
//   name: string;
//   price: number;
//   rating: number;
//   numOfPlayers: number;
//   categories: string[];
//   inStock: number;
//   images: string[];
// };

const gameObject = {
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
};

function GameCardStore() {
  return (
    <>
      <div className="game-card">
        <img
          className="game-card__img"
          src={gameObject.images[0]}
          alt="Image of a game"
        />
        {/* <div
          className="game-card__img"
          style={renderGameImageRule(gameObject.images[0])}
        ></div> */}
        <p className="game-card__name">{gameObject.name}</p>
        <div className="game-dtls">
          <div className="game-dtls__rc">
            <div className="rc-rating">
              {[1, 2, 3, 4, 5].map((num) => (
                <img className="rc-rating__img" src={ratingIcon} key={num} />
              ))}
            </div>
            {renderCategoriesBlock(gameObject.categories)}
          </div>
          <div className="game-dtls__psb">
            <div className="price-stock">
              <p className="price-stock__price">
                Price: {gameObject.price.toString()}
              </p>
              <p className="price-stock__stock">
                In stock: {checkStock(gameObject.inStock)}
              </p>
            </div>
            <button className="game-dtls__add-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

// function renderRatingBlock(object: gameObjectType) {
//   const totalRating = [];
//   let temp = 0;
//   while (temp < object.rating) {
//     const ratingIconElement = (
//       <img className="game-dtls__ratcat__rat-img" src={ratingIcon} key={temp} />
//     );
//     totalRating.push(ratingIconElement);
//     temp += 1;
//   }
//   const finalBlock = (
//     <div className="game-dtls__ratcat__rating">{totalRating}</div>
//   );
//   temp = 0;
//   return finalBlock;
// }

function renderCategoriesBlock(categories: string[]) {
  const totalCategories = [];
  if (categories.includes('strategy'))
    totalCategories.push(
      <img className="rc-categories__img" src={catStrategy} key={1} />
    );
  if (categories.includes('cards'))
    totalCategories.push(
      <img className="rc-categories__img" src={catCards} key={2} />
    );
  if (categories.includes('quiz'))
    totalCategories.push(
      <img className="rc-categories__img" src={catQuiz} key={3} />
    );
  if (categories.includes('economy'))
    totalCategories.push(
      <img className="rc-categories__img" src={catEconomy} key={4} />
    );
  if (categories.includes('kids'))
    totalCategories.push(
      <img className="rc-categories__img" src={catKids} key={5} />
    );
  return <div className="rc-categories">{totalCategories}</div>;
}

function checkStock(stockCount: number) {
  return stockCount > 0 ? (
    <img className="game-dtls__instock-img" src={tick} />
  ) : (
    <img className="game-dtls__instock-img" src={cross} />
  );
}

// function renderGameImageRule(string: string) {
//   return { backgroundImage: `url('${string}')` };
// }

export default GameCardStore;
