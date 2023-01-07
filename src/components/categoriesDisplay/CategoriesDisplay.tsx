import React from 'react';
import './CategoriesDisplay.scss';
import catCards from './../../static/cat-cards.png';
import catEconomy from './../../static/cat-economy.png';
import catKids from './../../static/cat-kids.png';
import catQuiz from './../../static/cat-quiz.png';
import catStrategy from './../../static/cat-strategy.png';
import * as types from './../../staticData/baseTypes';

function CategoriesDisplay(props: types.TPropsCategoriesDisplay) {
  const totalCategories = [];
  if (props.categories.includes('strategy'))
    totalCategories.push(
      <img className="rc-categories__img" src={catStrategy} key={1} />
    );
  if (props.categories.includes('cards'))
    totalCategories.push(
      <img className="rc-categories__img" src={catCards} key={2} />
    );
  if (props.categories.includes('quiz'))
    totalCategories.push(
      <img className="rc-categories__img" src={catQuiz} key={3} />
    );
  if (props.categories.includes('economy'))
    totalCategories.push(
      <img className="rc-categories__img" src={catEconomy} key={4} />
    );
  if (props.categories.includes('kids'))
    totalCategories.push(
      <img className="rc-categories__img" src={catKids} key={5} />
    );
  return <div className="rc-categories">{totalCategories}</div>;
}

export default CategoriesDisplay;
