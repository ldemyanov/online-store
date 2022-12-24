import React from 'react';
import './SortViewBlock.scss';
import ascending from './../../static/ascending.png';
import descending from './../../static/descending.png';
import inStockImg from './../../static/in-stock-param.png';
import numOfPlayersImg from './../../static/num-of-players-param.png';
import priceImg from './../../static/price-param.png';
import DoubleRange from '../doubleRange/DoubleRange';
import { useAppDispatch } from '../../store';
import { gameActions } from '../../store/reducer/gamesReducer';

function SortViewBlock() {
  const dispatch = useAppDispatch();

  const onChangeNumOfPlayers = (min: number, max: number) => {
    dispatch(gameActions.setNumOfPlayers({ min, max }));
  };

  return (
    <>
      <div className="sort-view-block">
        <div className="sort-view-block__params">
          <div className="sort-view-block__params__btns">
            <button className="sort-view-block__params__btns__btn">
              Sort By Rating
            </button>
            <button className="sort-view-block__params__btns__btn">
              Sort By Price
            </button>
          </div>
          <div className="sort-view-block__params__settings">
            <div className="sort-view-block__params__settings__btns">
              <img
                className="sort-view-block__params__settings__btns__btn"
                id="sort-descending-btn"
                src={descending}
                alt="descending sort button image"
              />
              <img
                className="sort-view-block__params__settings__btns__btn"
                id="sort-ascending-btn"
                src={ascending}
                alt="ascending sort button image"
              />
            </div>
            <p className="sort-view-block__params__settings__name">
              Descending
            </p>
          </div>
        </div>
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
              min={0}
              max={5}
              onChange={(min, max) => onChangeNumOfPlayers(min, max)}
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
              max={5}
              onChange={(min, max) => console.log(min, max)}
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
              min={0}
              max={5}
              onChange={(min, max) => console.log(min, max)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SortViewBlock;
