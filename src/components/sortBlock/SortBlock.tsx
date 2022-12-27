import React, { useEffect, useState } from 'react';
import './SortBlock.scss';
// eslint-disable-next-line prettier/prettier
import { ESortParam, ESortTrend, gameActions } from '../../store/reducer/gamesReducer';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function SortBlock() {
  const [param, setParam] = useState(ESortParam.rating);
  const [trend, setTrend] = useState(ESortTrend.descending);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const oldParam = searchParams.get('param') || '';
    const oldTrend = searchParams.get('trend') || '';

    if (oldParam in ESortParam && oldTrend in ESortTrend) {
      dispatch(
        gameActions.sort({
          param: oldParam as ESortParam,
          trend: oldTrend as ESortTrend,
        })
      );
    }
  }, []);

  useEffect(() => {
    dispatch(gameActions.sort({ param, trend }));
    searchParams.set('param', param);
    searchParams.set('trend', trend);
    setSearchParams(searchParams);
  }, [param, trend]);

  const getClassParam = (btnParam: ESortParam) => {
    if (param === btnParam) {
      return 'sort__param sort__param_active';
    }
    return 'sort__param';
  };

  const getClassTrend = (btnTrend: ESortTrend) => {
    if (trend === btnTrend) {
      return `sort__img sort__img_${btnTrend} sort__img_active`;
    }
    return `sort__img sort__img_${btnTrend}`;
  };

  return (
    <div className="sort">
      <div className="sort__block">
        <button
          className={getClassParam(ESortParam.rating)}
          onClick={() => setParam(ESortParam.rating)}
        >
          Sort By Rating
        </button>
        <button
          className={getClassParam(ESortParam.price)}
          onClick={() => setParam(ESortParam.price)}
        >
          Sort By Price
        </button>
      </div>
      <div className="sort__block">
        <div>
          <button
            className={getClassTrend(ESortTrend.ascending)}
            onClick={() => setTrend(ESortTrend.ascending)}
          />
          <button
            className={getClassTrend(ESortTrend.descending)}
            onClick={() => setTrend(ESortTrend.descending)}
          />
        </div>
        <p className="sort__label">{trend.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default SortBlock;
