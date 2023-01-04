import React from 'react';
import { useAppSelector } from '../../store';
import './FilterManufactures.scss';
import { MANUFACTURES } from '../../store/reducer/games';
import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/reducer/gamesReducer';

function FilterManufactures() {
  const dispatch = useDispatch();
  const { manufacturers } = useAppSelector((state) => state.gameReducer);

  const callbackToggleMnf = (name: string) => {
    dispatch(gameActions.toggleManufacturers(name));
  };

  const LiMnf = ({ name }: { name: string }) => (
    <li
      className={
        manufacturers.includes(name)
          ? 'flt-mnf__li flt-mnf__li_active'
          : 'flt-mnf__li'
      }
    >
      <input
        className="flt-mnf__checkbox"
        type="checkbox"
        checked={manufacturers.includes(name)}
        onChange={() => callbackToggleMnf(name)}
      />
      <span className="flt-mnf__name" onClick={() => callbackToggleMnf(name)}>
        {name}
      </span>
    </li>
  );

  return (
    <div className="flt-mnf">
      <h3 className="flt-mnf__title">Manufactures</h3>
      <ul className="flt-mnf__list">
        {MANUFACTURES.map((name, index) => (
          <LiMnf name={name} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default FilterManufactures;
