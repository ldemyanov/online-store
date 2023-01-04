import React from 'react';
import { useAppSelector } from '../../store';
import './FilterProd.scss';
import { PRODUCERS } from '../../store/reducer/games';
import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/reducer/gamesReducer';

function FilterProd() {
  const dispatch = useDispatch();
  const { producers } = useAppSelector((state) => state.gameReducer);

  const callbackToggleProd = (name: string) => {
    dispatch(gameActions.toggleProd(name));
  };

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
        {PRODUCERS.map((name, index) => (
          <LiProd name={name} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default FilterProd;
