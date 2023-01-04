import React, { useEffect } from 'react';
import './SortBlock.scss';
// eslint-disable-next-line prettier/prettier
import { ESortParam, ESortTrend, TSort, gameActions } from '../../store/reducer/gamesReducer';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';

function SortBlock() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { param, trend } = useAppSelector((state) => state.gameReducer.sort);

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

  const setSort = ({ param, trend }: TSort) => {
    searchParams.set('param', param);
    searchParams.set('trend', trend);
    setSearchParams(searchParams);
    dispatch(
      gameActions.sort({
        param: param,
        trend: trend,
      })
    );
  };

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
          onClick={() => setSort({ param: ESortParam.rating, trend })}
        >
          Sort By Rating
        </button>
        <button
          className={getClassParam(ESortParam.price)}
          onClick={() => setSort({ param: ESortParam.price, trend })}
        >
          Sort By Price
        </button>
      </div>
      <div className="sort__block">
        <div>
          <button
            className={getClassTrend(ESortTrend.ascending)}
            onClick={() => setSort({ trend: ESortTrend.ascending, param })}
          />
          <button
            className={getClassTrend(ESortTrend.descending)}
            onClick={() => setSort({ trend: ESortTrend.descending, param })}
          />
        </div>
        <p className="sort__label">{trend.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default SortBlock;
