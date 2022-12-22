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
    <>
      <SearchParams />
      <SearchField />
      <SearchViewParams />
      <SortViewBlock />
      <CatSearchBlock />
      <div className="main-content">
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
        <GameCardStore />
      </div>
    </>
  );
}

export default Store;
