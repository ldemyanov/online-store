import React from 'react';
import './CategoriesProdPage.scss';
import catCards from './../../static/cat-cards.png';
import catEconomy from './../../static/cat-economy.png';
import catKids from './../../static/cat-kids.png';
import catQuiz from './../../static/cat-quiz.png';
import catStrategy from './../../static/cat-strategy.png';
import catRolePlay from './../../static/role-play-icon.png';

function CategoriesProdPage(props: { categories: string[]; values: number[] }) {
  //prettier-ignore
  const arrOfImages: string[] = [ catStrategy, catCards, catQuiz, catEconomy, catKids, catRolePlay ];
  //prettier-ignore
  const arrOfCategoryNames: string[] = [ 'strategy', 'cards', 'quiz', 'economy', 'kids', 'role play' ];

  const arrOfElements = props.categories.map(
    (category: string, index: number) => {
      const indexOfCategory = arrOfCategoryNames.indexOf(category);
      return (
        <div className="pp-category" key={props.values[index]}>
          <img
            className="pp-category__img"
            src={arrOfImages[indexOfCategory]}
          />
          <span className="pp-category__name">
            {arrOfCategoryNames[indexOfCategory].charAt(0).toUpperCase() +
              arrOfCategoryNames[indexOfCategory].slice(1)}
          </span>
        </div>
      );
    }
  );
  return (
    <div className="pp-categories">
      <p className="pp-categories__name">Game category:</p>
      {arrOfElements}
    </div>
  );
}

export default CategoriesProdPage;
