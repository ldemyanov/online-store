import React, { useState } from 'react';
import './SearchViewParams.scss';
import { gameActions } from '../../store/reducer/gamesReducer';
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as types from './../../staticData/baseTypes';

function SearchViewParams() {
  const dispatch = useDispatch();
  const { games, layout } = useAppSelector((state) => state.gameReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isBeingCopied, setIsBeingCopied] = useState(false);
  const [filtersReset, setFiltersReset] = useState(false);

  const callbackSetLayout = (layout: types.ELayout) => {
    dispatch(gameActions.setLayout(layout));
    searchParams.set('layout', layout);
    setSearchParams(searchParams);
  };

  const copyLink = async () => {
    if (isBeingCopied) return;
    setIsBeingCopied(true);
    window.navigator.clipboard
      .writeText(window.location.href)
      .catch((e) => console.error(e));
    setTimeout(() => setIsBeingCopied(false), 1500);
  };

  const reset = () => {
    if (filtersReset) return;
    setFiltersReset(true);
    dispatch(gameActions.reset());
    setTimeout(() => setFiltersReset(false), 1000);
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
            layout === types.ELayout.cards
              ? 'search-view-btns__btn search-view-btns__btn_active'
              : 'search-view-btns__btn'
          }
          onClick={() => callbackSetLayout(types.ELayout.cards)}
        >
          Cards
        </button>
        <button
          className={
            layout === types.ELayout.list
              ? 'search-view-btns__btn search-view-btns__btn_active'
              : 'search-view-btns__btn'
          }
          onClick={() => callbackSetLayout(types.ELayout.list)}
        >
          List
        </button>
      </div>
      <button
        className={
          'search-view-params-block__btn link-btn ' +
          (isBeingCopied ? 'btn-activated' : '')
        }
        onClick={copyLink}
      >
        {isBeingCopied ? 'Copied' : 'Copy Current Search Link'}
      </button>
      <button
        className={
          'search-view-params-block__btn reset-btn ' +
          (filtersReset ? 'btn-activated' : '')
        }
        onClick={reset}
      >
        {filtersReset ? 'Filters reset' : 'Reset All Filters'}
      </button>
    </div>
  );
}

export default SearchViewParams;
