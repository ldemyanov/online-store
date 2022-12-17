import React from 'react';
import CategorySearchBlock from '../../components/categorySearchBlock/CategorySearchBlock';
import SearchField from '../../components/seachField/SearchField';

import SearchParams from '../../components/searchParams/SearchParams';
import './store.scss';

function Store() {
  return (
    <>
      <SearchParams />
      <SearchField />
      <CategorySearchBlock />
    </>
  );
}

export default Store;
