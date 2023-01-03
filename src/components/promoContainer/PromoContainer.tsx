import React from 'react';
import './promoContainer.scss';
import PromoActivated from '../promoActivated/PromoActivated';
import { useAppSelector } from '../../store';

function PromoContainer() {
  const { promoCodes } = useAppSelector((state) => state.cartGameReducer);
  return (
    <div className="promo-container">
      {promoCodes.map((promo, index) => (
        <PromoActivated promo={promo} index={index} key={promo + `${index}`} />
      ))}
    </div>
  );
}

export default PromoContainer;
