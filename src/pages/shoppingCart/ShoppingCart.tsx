import React from 'react';
import { useLocation } from 'react-router-dom';
import SCCardContainer from '../../components/scCardsContainer/SCCardContainer';
import './shoppingCart.scss';
import { useAppSelector } from '../../store';
import { useAppDispatch } from '../../store';
import { gameActions } from '../../store/reducer/cartGamesReducer';

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
  const { totalPrice, currentPage } = useAppSelector(
    (state) => state.cartGameReducer
  );
  const dispatch = useAppDispatch();
  const setItemsPerPage = (limit: number) => {
    dispatch(gameActions.setItemsPerPage(limit));
  };
  const goToNextPage = () => {
    dispatch(gameActions.goToNextPage());
  };
  const goToPrevPage = () => {
    dispatch(gameActions.goToPrevPage());
  };

  return (
    <div className="sc-box">
      <div className="sc-control-panel">
        <h2 className="sc-control-panel__name">Your Cart</h2>
        <div className="sc-control-panel__pagination">
          <button
            className="sc-pages__btn btn-prev"
            onClick={() => goToPrevPage()}
          >
            Prev
          </button>
          <p>{currentPage}</p>
          <button
            className="sc-pages__btn btn-next"
            onClick={() => goToNextPage()}
          >
            Next
          </button>
          <div className="sc-pages__options">
            <label htmlFor="items">Games per page:</label>
            <select
              name="items"
              id="sc-items-page"
              defaultValue="8"
              onChange={(val) => setItemsPerPage(+val.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
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
