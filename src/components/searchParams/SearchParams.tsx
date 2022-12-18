import React from 'react';
import './SearchParams.scss';

function SearchParams() {
  return (
    <>
      <div className="search-params">
        <p className="search-params__par">Search Parameters:</p>
        <ul className="search-params__params">
          <li className="search-params__param" data-param="name">
            Name
          </li>
          <li className="search-params__param" data-param="price">
            Price
          </li>
          <li className="search-params__param" data-param="description">
            Description
          </li>
          <li className="search-params__param" data-param="stock">
            In stock
          </li>
          <li className="search-params__param" data-param="rating">
            Rating
          </li>
          <li className="search-params__param" data-param="category">
            Category
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchParams;
