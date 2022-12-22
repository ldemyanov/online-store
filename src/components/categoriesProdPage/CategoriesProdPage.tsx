import React from 'react';
import './CategoriesProdPage.scss';
import catCards from './../../static/cat-cards.png';
import catEconomy from './../../static/cat-economy.png';
import catKids from './../../static/cat-kids.png';
import catQuiz from './../../static/cat-quiz.png';
import catStrategy from './../../static/cat-strategy.png';
import catRolePlay from './../../static/role-play-icon.png';

type gameObjectType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  numOfPlayers: number;
  categories: string[];
  inStock: number;
  images: string[];
};

function CategoriesProdPage(props: {
  gameObject: gameObjectType;
  values: number[];
}) {
  const totalCategories = [];
  if (props.gameObject.categories.includes('strategy'))
    totalCategories.push(
      <div className="pp-category" key={props.values[0]}>
        <img className="pp-category__img" src={catStrategy} />
        <span className="pp-category__name">Strategy</span>
      </div>
    );
  if (props.gameObject.categories.includes('cards'))
    totalCategories.push(
      <div className="pp-category" key={props.values[1]}>
        <img className="pp-category__img" src={catCards} />
        <span className="pp-category__name">Cards</span>
      </div>
    );
  if (props.gameObject.categories.includes('quiz'))
    totalCategories.push(
      <div className="pp-category" key={props.values[2]}>
        <img className="pp-category__img" src={catQuiz} />
        <span className="pp-category__name">Quiz</span>
      </div>
    );
  if (props.gameObject.categories.includes('economy'))
    totalCategories.push(
      <div className="pp-category" key={props.values[3]}>
        <img className="pp-category__img" src={catEconomy} />
        <span className="pp-category__name">Economy</span>
      </div>
    );
  if (props.gameObject.categories.includes('kids'))
    totalCategories.push(
      <div className="pp-category" key={props.values[4]}>
        <img className="pp-category__img" src={catKids} />
        <span className="pp-category__name">For Kids</span>
      </div>
    );
  if (props.gameObject.categories.includes('role-play'))
    totalCategories.push(
      <div className="pp-category" key={props.values[5]}>
        <img className="pp-category__img" src={catRolePlay} />
        <span className="pp-category__name">Role play</span>
      </div>
    );
  return (
    <div className="pp-categories">
      <p className="pp-categories__name">Game category:</p>
      {totalCategories}
    </div>
  );
}

export default CategoriesProdPage;
