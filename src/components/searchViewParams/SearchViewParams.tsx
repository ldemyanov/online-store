import React from 'react';
import './SearchViewParams.scss';

function SearchViewParams() {
  return (
    <div className="search-view-params-block">
      <p className="search-view-params-block__games-found">
        Games found: <span id="found-games-num">36</span>
      </p>
      <div className="search-view-btns">
        <p className="search-view-btns__word">View:</p>
        <button className="search-view-btns__btn" id="games-display__cards">
          Cards
        </button>
        <button className="search-view-btns__btn" id="games-display__list">
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
