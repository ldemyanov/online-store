import React from 'react';
import { useLocation } from 'react-router-dom';
import SCCardContainer from '../../components/scCardsContainer/SCCardContainer';
import './shoppingCart.scss';
import { useAppSelector } from '../../store';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ShoppingCart() {
  const query = useQuery();
  const params = query.entries();
  for (const [key, value] of params) {
    console.log(key, value);
  }
  const { totalPrice } = useAppSelector((state) => state.cartGameReducer);

  return (
    <div className="sc-box">
      <div className="sc-control-panel">
        <h2 className="sc-box__name">Your Cart</h2>
      </div>
      <SCCardContainer />
      <p className="sc-box__price">
        Total price: {Math.round(totalPrice * 100) / 100} $
      </p>
      <button className="sc-button-checkout">Proceed to checkout</button>
    </div>
  );
}

export default ShoppingCart;
