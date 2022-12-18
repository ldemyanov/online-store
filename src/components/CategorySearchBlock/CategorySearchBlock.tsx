import React from 'react';
import './CategorySearchBlock.scss';
import catCards from './../../static/cat-cards.png';
import catEconomy from './../../static/cat-economy.png';
import catKids from './../../static/cat-kids.png';
import catQuiz from './../../static/cat-quiz.png';
import catStrategy from './../../static/cat-strategy.png';

function CategorySearchBlock() {
  return (
    <>
      <div className="categories-search-block">
        <p className="categories-search-block__title">Categories of Games</p>

        <div
          className="categories-search-block__cat"
          id="categories-search-block__cat-cards"
        >
          <img src={catCards} className="categories-search-block__cat-img" />
          <p className="categories-search-block__cat-name">Card Games</p>
        </div>

        <div
          className="categories-search-block__cat"
          id="categories-search-block__cat-economy"
        >
          <img src={catEconomy} className="categories-search-block__cat-img" />
          <p className="categories-search-block__cat-name">Economy Games</p>
        </div>

        <div
          className="categories-search-block__cat"
          id="categories-search-block__cat-kids"
        >
          <img src={catKids} className="categories-search-block__cat-img" />
          <p className="categories-search-block__cat-name">Games for Kids</p>
        </div>

        <div
          className="categories-search-block__cat"
          id="categories-search-block__cat-quiz"
        >
          <img src={catQuiz} className="categories-search-block__cat-img" />
          <p className="categories-search-block__cat-name">Quiz Games</p>
        </div>

        <div
          className="categories-search-block__cat"
          id="categories-search-block__cat-strategy"
        >
          <img src={catStrategy} className="categories-search-block__cat-img" />
          <p className="categories-search-block__cat-name">Strategy Games</p>
        </div>
      </div>
    </>
  );
}

export default CategorySearchBlock;
