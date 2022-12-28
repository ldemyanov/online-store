import React from 'react';
import CardContainer from '../../components/gameCardContainer/CardContainer';
import CatSearchBlock from '../../components/catSearchBlock/CatSearchBlock';
import SearchField from '../../components/seachField/SearchField';
import SearchParams from '../../components/searchParams/SearchParams';
import SearchViewParams from '../../components/searchViewParams/SearchViewParams';
import SortBlock from '../../components/sortBlock/SortBlock';
import SortViewBlock from '../../components/sortViewBlock/SortViewBlock';
import './store.scss';

function Store() {
  return (
    <div className="store">
      <div className="store__left">
        <SearchParams />
        <SearchField />
        <CardContainer />
      </div>
      <div className="store__right">
        <SearchViewParams />
        <SortBlock />
        <SortViewBlock />
        <CatSearchBlock />
      </div>
    </div>
  );
}

export default Store;
