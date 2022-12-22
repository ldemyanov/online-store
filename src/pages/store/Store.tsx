import React from 'react';
import CatSearchBlock from '../../components/catSearchBlock/CatSearchBlock';
import GameCardStore from '../../components/gameCardStore/GameCardStore';
import SearchField from '../../components/seachField/SearchField';
import SearchParams from '../../components/searchParams/SearchParams';
import SearchViewParams from '../../components/searchViewParams/SearchViewParams';
import SortViewBlock from '../../components/sortViewBlock/SortViewBlock';
import './store.scss';

function Store() {
  return (
    <div className="store">
      <div className="store__left">
        <SearchParams />
        <SearchField />
        <GameCardStore />
      </div>
      <div className="store__right">
        <SearchViewParams />
        <SortViewBlock />
        <CatSearchBlock />
      </div>
    </div>
  );
}

export default Store;
