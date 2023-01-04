import React from 'react';
import './SearchViewParams.scss';
import { ELayout, gameActions } from '../../store/reducer/gamesReducer';
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';

function SearchViewParams() {
  const dispatch = useDispatch();
  const { games, layout } = useAppSelector((state) => state.gameReducer);

  const callbackSetLayout = (layout: ELayout) => {
    dispatch(gameActions.setLayout(layout));
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
      <button className="search-view-params-block__btn link-btn">
        Copy Current Search Link
      </button>
      <button className="search-view-params-block__btn reset-btn">
        Reset All Filters
      </button>
    </div>
  );
}

export default SearchViewParams;
