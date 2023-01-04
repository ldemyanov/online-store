import React from 'react';
import CardContainer from '../../components/gameCardContainer/CardContainer';
import CatSearchBlock from '../../components/catSearchBlock/CatSearchBlock';
import SearchField from '../../components/seachField/SearchField';
import SearchParams from '../../components/searchParams/SearchParams';
import SearchViewParams from '../../components/searchViewParams/SearchViewParams';
import SortBlock from '../../components/sortBlock/SortBlock';
import SortViewBlock from '../../components/sortViewBlock/SortViewBlock';
import FilterProd from '../../components/filterProd/FilterProd';
import './store.scss';

function Store() {
  return (
    <div className="store">
      <SearchParams />
      <SearchField />
      <div className="store-main">
        <div className="store__left">
          <CardContainer />
        </div>
        <div className="store__right">
          <SearchViewParams />
          <SortBlock />
          <SortViewBlock />
          <CatSearchBlock />
          <FilterProd />
        </div>
      </div>
    </div>
  );
}

export default Store;
