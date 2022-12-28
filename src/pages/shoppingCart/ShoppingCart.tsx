import React, { useRef, useCallback, useEffect } from 'react';
import SCCardContainer from '../../components/scCardsContainer/SCCardContainer';
import './shoppingCart.scss';
import { useAppSelector } from '../../store';
import { useAppDispatch } from '../../store';
import { useSearchParams } from 'react-router-dom';
import { gameActions } from '../../store/reducer/cartGamesReducer';
import PromoBlock from '../../components/promoBlock/PromoBlock';

// http://localhost:3000/cart?itemsPerPage=3&currentPage=6
enum ECartViewParams {
  itemsPerPage = 'itemsPerPage',
  currentPage = 'currentPage',
}

function ShoppingCart() {
  const isFirstRenderRef = useRef(true);
  const dispatch = useAppDispatch();
  const { totalPrice, currentPage, itemsPerPage, discount } = useAppSelector(
    (state) => state.cartGameReducer
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const callbackSetItemsPerPage = useCallback((limit: number) => {
    dispatch(gameActions.setItemsPerPage(limit));
  }, []);

  const callbackGoToNextPage = useCallback(() => {
    dispatch(gameActions.goToNextPage());
  }, []);

  const callbackGoToPrevPage = useCallback(() => {
    dispatch(gameActions.goToPrevPage());
  }, []);

  useEffect(() => {
    const itemsPerPage = searchParams.get(ECartViewParams.itemsPerPage);
    const currentPage = searchParams.get(ECartViewParams.currentPage);

    if (itemsPerPage) {
      const limit = +itemsPerPage;
      dispatch(gameActions.setItemsPerPage(limit));
    }

    if (currentPage) {
      const curPage = +currentPage;
      dispatch(gameActions.goToPage(curPage));
    }
  }, []);

  useEffect(() => {
    if (!isFirstRenderRef.current) {
      setSearchParams({
        [ECartViewParams.itemsPerPage]: itemsPerPage.toString(),
        [ECartViewParams.currentPage]: currentPage.toString(),
      });
    }
    isFirstRenderRef.current = false;
  }, [itemsPerPage, currentPage]);

  useEffect(() => {
    dispatch(gameActions.initialData());
  }, []);

  return (
    <div className="sc-box">
      <div className="sc-control-panel">
        <h2 className="sc-control-panel__name">Your Cart</h2>
        <PromoBlock />
        <div className="sc-control-panel__pagination">
          <button
            className="sc-pages__btn btn-prev"
            onClick={() => callbackGoToPrevPage()}
          >
            Prev
          </button>
          <p>{currentPage}</p>
          <button
            className="sc-pages__btn btn-next"
            onClick={() => callbackGoToNextPage()}
          >
            Next
          </button>
          <div className="sc-pages__options">
            <label htmlFor="items">Games per page:</label>
            <select
              name="items"
              id="sc-items-page"
              value={itemsPerPage}
              onChange={(val) => callbackSetItemsPerPage(+val.target.value)}
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
        Total price:{' '}
        {discount < 100
          ? Math.round((totalPrice - (totalPrice * discount) / 100) * 100) / 100
          : 0}{' '}
        $
      </p>
      <button className="sc-button-checkout">Proceed to checkout</button>
    </div>
  );
}

export default ShoppingCart;
