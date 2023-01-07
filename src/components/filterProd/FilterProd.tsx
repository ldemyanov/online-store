import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import './FilterProd.scss';
import { gameActions } from '../../store/reducer/gamesReducer';
import { useSearchParams } from 'react-router-dom';
import * as baseV from './../../staticData/baseValues';

function FilterProd() {
  const dispatch = useAppDispatch();
  const { producers } = useAppSelector((state) => state.gameReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const isFirstRenderRef = useRef(true);

  const callbackToggleProd = (name: string) => {
    dispatch(gameActions.toggleProd(name));
  };

  useEffect(() => {
    if (!isFirstRenderRef.current) {
      const spProducers = producers.join('-');
      if (spProducers) {
        searchParams.set('producers', spProducers);
      } else {
        searchParams.delete('producers');
      }
      setSearchParams(searchParams);
    }
    isFirstRenderRef.current = false;
  }, [producers]);

  useEffect(() => {
    const oldProducers = searchParams.get('producers')?.split('-');
    if (oldProducers) {
      dispatch(gameActions.setProd(oldProducers));
    }
  }, []);

  const LiProd = ({ name }: { name: string }) => (
    <li
      className={
        producers.includes(name)
          ? 'flt-prod__li flt-prod__li_active'
          : 'flt-prod__li'
      }
    >
      <input
        className="flt-prod__checkbox"
        type="checkbox"
        checked={producers.includes(name)}
        onChange={() => callbackToggleProd(name)}
      />
      <span className="flt-prod__name" onClick={() => callbackToggleProd(name)}>
        {name}
      </span>
    </li>
  );

  return (
    <div className="flt-prod">
      <h3 className="flt-prod__title">Producers</h3>
      <ul className="flt-prod__list">
        {baseV.PRODUCERS.map((name, index) => (
          <LiProd name={name} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default FilterProd;
