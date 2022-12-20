import React from 'react';
import './SearchParams.scss';

function SearchParams() {
  return (
    <>
      <div className="search-params">
        <p className="search-params__par">Search Parameters:</p>
        <ul className="search-list">
          <li className="search-list__item" data-param="name">
            Name
          </li>
          <li className="search-list__item" data-param="description">
            Description
          </li>
          <li className="search-list__item" data-param="rating">
            Rating
          </li>
          <li className="search-list__item" data-param="category">
            Category
          </li>
          <li className="search-list__item" data-param="in-stock">
            In stock
          </li>
          <li className="search-list__item" data-param="price">
            Price
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchParams;
