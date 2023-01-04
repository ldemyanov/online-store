import React from 'react';
import './SearchViewParams.scss';
import { ELayout, gameActions } from '../../store/reducer/gamesReducer';
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function SearchViewParams() {
  const dispatch = useDispatch();
  const { games, layout } = useAppSelector((state) => state.gameReducer);
  const [searchParams, setSearchParams] = useSearchParams();

  const callbackSetLayout = (layout: ELayout) => {
    dispatch(gameActions.setLayout(layout));
    searchParams.set('layout', layout);
    setSearchParams(searchParams);
  };

  const copyLink = async () => {
    window.navigator.clipboard
      .writeText(window.location.href)
      .then(() => console.log('Скопировано'))
      .catch((e) => console.error(e));
  };

  const reset = () => {
    dispatch(gameActions.reset());
  };

  return (
    <div className="search-view-params-block">
      <p className="search-view-params-block__games-found">
        Games found: <span id="found-games-num">{games.length}</span>
      </p>
      <div className="search-view-btns">
        <p className="search-view-btns__word">View:</p>
        <button
          className={
            layout === ELayout.cards
              ? 'search-view-btns__btn search-view-btns__btn_active'
              : 'search-view-btns__btn'
          }
          onClick={() => callbackSetLayout(ELayout.cards)}
        >
          Cards
        </button>
        <button
          className={
            layout === ELayout.list
              ? 'search-view-btns__btn search-view-btns__btn_active'
              : 'search-view-btns__btn'
          }
          onClick={() => callbackSetLayout(ELayout.list)}
        >
          List
        </button>
      </div>
      <button
        className="search-view-params-block__btn link-btn"
        onClick={copyLink}
      >
        Copy Current Search Link
      </button>
      <button
        className="search-view-params-block__btn reset-btn"
        onClick={reset}
      >
        Reset All Filters
      </button>
    </div>
  );
}

export default SearchViewParams;
