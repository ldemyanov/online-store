import React from 'react';
import './promoActivated.scss';
import crossIcon from './../../static/cross-icon.png';
import { gameActions, discountObj } from '../../store/reducer/cartGamesReducer';
import { useAppDispatch } from '../../store';

type TPromoCode = {
  promo: discountObj;
  index: number;
};

function PromoActivated({ promo, index }: TPromoCode) {
  const dispatch = useAppDispatch();
  const removePromo = (index: number) => {
    dispatch(gameActions.removePromo(index));
  };

  return (
    <div className="promo-code">
      <p className="promo-code__name">{promo.code}</p>
      <p className="promo-code__value">{promo.discount} %</p>
      <button
        className="promo-code__deactivate"
        onClick={() => removePromo(index)}
      >
        <img src={crossIcon} alt="" />
      </button>
    </div>
  );
}

export default PromoActivated;
