import React, { useEffect, useRef } from 'react';
import './CatSearchBlock.scss';
import catCards from './../../static/cat-cards.png';
import catEconomy from './../../static/cat-economy.png';
import catKids from './../../static/cat-kids.png';
import catQuiz from './../../static/cat-quiz.png';
import catStrategy from './../../static/cat-strategy.png';
import catRole from './../../static/role-play-icon.png';
import { ECategory, gameActions } from '../../store/reducer/gamesReducer';
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

type propsDivCategory = {
  category: ECategory;
  srcImg: string;
  label: string;
};

function CategorySearchBlock() {
  const { categories } = useAppSelector((state) => state.gameReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  const callbackToggleCategory = (cat: ECategory) => {
    dispatch(gameActions.toggleCategory(cat));
  };

  useEffect(() => {
    const strCategories = searchParams.get('category') || '';
    const arrayCategories = strCategories
      .split('-')
      .filter((cat) => cat in ECategory);

    if (arrayCategories.length) {
      dispatch(gameActions.setCategories(arrayCategories as ECategory[]));
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      const str = categories.join('-');
      searchParams.set('category', str);
      setSearchParams(searchParams);
    }
    isFirstRender.current = false;
  }, [categories]);

  const DivCategory = ({ category, srcImg, label }: propsDivCategory) => (
    <div
      className={
        categories.includes(category)
          ? 'div-category div-category_active'
          : 'div-category'
      }
      onClick={() => callbackToggleCategory(category)}
    >
      <img src={srcImg} className="div-category__img" />
      <p className="div-category__name">{label}</p>
    </div>
  );

  return (
    <div className="categories-search-block">
      <p className="categories-search-block__title">Categories of Games</p>
      <DivCategory
        category={ECategory.cards}
        srcImg={catCards}
        label="Card Games"
      />
      <DivCategory
        category={ECategory.economy}
        srcImg={catEconomy}
        label="Economy Games"
      />
      <DivCategory
        category={ECategory.kids}
        srcImg={catKids}
        label="For children"
      />
      <DivCategory
        category={ECategory.quiz}
        srcImg={catQuiz}
        label="Quizzes and Mind Games"
      />
      <DivCategory
        category={ECategory.strategy}
        srcImg={catStrategy}
        label="Strategy games"
      />
      <DivCategory
        category={ECategory.role}
        srcImg={catRole}
        label="Role-playing games"
      />
    </div>
  );
}

export default CategorySearchBlock;
