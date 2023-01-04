import React, { useCallback, useEffect, useRef } from 'react';
import './SortViewBlock.scss';
import inStockImg from './../../static/in-stock-param.png';
import numOfPlayersImg from './../../static/num-of-players-param.png';
import priceImg from './../../static/price-param.png';
import DoubleRange from '../doubleRange/DoubleRange';
import { useAppDispatch, useAppSelector } from '../../store';
import { gameActions } from '../../store/reducer/gamesReducer';
import { useSearchParams } from 'react-router-dom';

enum ESearchParams {
  minPrice = 'minPrice',
  maxPrice = 'maxPrice',
  minInStock = 'minInStock',
  maxInStock = 'maxInStock',
  minPlayers = 'minPlayers',
  maxPlayers = 'maxPlayers',
}

function SortViewBlock() {
  const isFirstRenderRef = useRef(true);
  const dispatch = useAppDispatch();
  const { filterCountInStock, filterPlayers, filterPrice } = useAppSelector(
    (state) => state.gameReducer
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const callbackSetNumOfPlayers = useCallback((min: number, max: number) => {
    dispatch(gameActions.setNumOfPlayers({ min, max }));
  }, []);

  const callbackSetCountInStock = useCallback((min: number, max: number) => {
    dispatch(gameActions.setCountInStock({ min, max }));
  }, []);

  const callbackSetPrice = useCallback((min: number, max: number) => {
    dispatch(gameActions.setPrice({ min, max }));
  }, []);

  useEffect(() => {
    const minPrice = searchParams.get(ESearchParams.minPrice);
    const maxPrice = searchParams.get(ESearchParams.maxPrice);
    const minInStock = searchParams.get(ESearchParams.minInStock);
    const maxInStock = searchParams.get(ESearchParams.maxInStock);
    const minPlayers = searchParams.get(ESearchParams.minPlayers);
    const maxPlayers = searchParams.get(ESearchParams.maxPlayers);

    if (minPrice && maxPrice) {
      const min = +minPrice;
      const max = +maxPrice;
      dispatch(gameActions.setPrice({ min, max }));
    }

    if (minInStock && maxInStock) {
      const min = +minInStock;
      const max = +maxInStock;
      dispatch(gameActions.setCountInStock({ min, max }));
    }

    if (minPlayers && maxPlayers) {
      const min = +minPlayers;
      const max = +maxPlayers;
      dispatch(gameActions.setNumOfPlayers({ min, max }));
    }
  }, []);

  useEffect(() => {
    if (!isFirstRenderRef.current) {
      searchParams.set(ESearchParams.minPrice, filterPrice.min.toString());
      searchParams.set(ESearchParams.maxPrice, filterPrice.max.toString());
      searchParams.set(ESearchParams.minInStock, filterCountInStock.min.toString()); // eslint-disable-line
      searchParams.set(ESearchParams.maxInStock, filterCountInStock.max.toString()); // eslint-disable-line
      searchParams.set(ESearchParams.minPlayers, filterPlayers.min.toString());
      searchParams.set(ESearchParams.maxPlayers, filterPlayers.max.toString());
      setSearchParams(searchParams);
    }
    isFirstRenderRef.current = false;
  }, [filterCountInStock, filterPlayers, filterPrice]);

  return (
    <>
      <div className="sort-view-block">
        <div className="sort-view-block__inputs">
          <div className="sort-view-block__inputs__input-block">
            <div className="sort-view-block__inputs__input-block__info">
              <img
                className="sort-view-block__inputs__input-block__info__img"
                src={numOfPlayersImg}
                alt="Number of Players Image"
              />
              <p className="sort-view-block__inputs__input-block__info__name">
                Number of Players
              </p>
            </div>
            <DoubleRange
              min={1}
              max={9}
              left={filterPlayers.min}
              right={filterPlayers.max}
              onChange={callbackSetNumOfPlayers}
            />
          </div>
          <div className="sort-view-block__inputs__input-block">
            <div className="sort-view-block__inputs__input-block__info">
              <img
                className="sort-view-block__inputs__input-block__info__img"
                src={inStockImg}
                alt="Number of Players Image"
              />
              <p className="sort-view-block__inputs__input-block__info__name">
                Available in Stock
              </p>
            </div>
            <DoubleRange
              min={0}
              max={220}
              left={filterCountInStock.min}
              right={filterCountInStock.max}
              onChange={callbackSetCountInStock}
            />
          </div>
          <div className="sort-view-block__inputs__input-block">
            <div className="sort-view-block__inputs__input-block__info">
              <img
                className="sort-view-block__inputs__input-block__info__img"
                src={priceImg}
                alt="Number of Players Image"
              />
              <p className="sort-view-block__inputs__input-block__info__name">
                Price
              </p>
            </div>
            <DoubleRange
              min={5}
              max={350}
              left={filterPrice.min}
              right={filterPrice.max}
              onChange={callbackSetPrice}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SortViewBlock;
