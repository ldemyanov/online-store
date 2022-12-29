import React, { useRef, useCallback, useEffect } from 'react';
import SCCardContainer from '../../components/scCardsContainer/SCCardContainer';
import './shoppingCart.scss';
import { useAppSelector } from '../../store';
import { useAppDispatch } from '../../store';
import { useSearchParams } from 'react-router-dom';
import { gameActions } from '../../store/reducer/cartGamesReducer';
import PromoBlock from '../../components/promoBlock/PromoBlock';
import PurchaseFormModule from '../../components/purchaseFormModule/PurchaseFormModule';
import toggleElementDisplay from '../../helperFunctions/displayToggler';

// http://localhost:3000/cart?itemsPerPage=3&currentPage=6
enum ECartViewParams {
  itemsPerPage = 'itemsPerPage',
  currentPage = 'currentPage',
}

function ShoppingCart() {
  const isFirstRenderRef = useRef(true);
  const dispatch = useAppDispatch();
  const {
    totalPrice,
    currentPage,
    itemsPerPage,
    discountTotal,
    totalQuantity,
  } = useAppSelector((state) => state.cartGameReducer);
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
        <div className="pagination-panel">
          <div className="pages-slider">
            <button
              className="pages-slider__btn btn-prev"
              onClick={() => callbackGoToPrevPage()}
            ></button>
            <p className="pages-slider__page">{currentPage}</p>
            <button
              className="pages-slider__btn btn-next"
              onClick={() => callbackGoToNextPage()}
            ></button>
          </div>
          <div className="pagination-panel__options">
            <label className="page-number__label" htmlFor="items">
              Games per page:
            </label>
            <select
              className="page-number__number"
              name="items"
              id="sc-items-page"
              value={itemsPerPage}
              onChange={(val) => callbackSetItemsPerPage(+val.target.value)}
            >
              <option className="page-number__option" value="1">
                1
              </option>
              <option className="page-number__option" value="2">
                2
              </option>
              <option className="page-number__option" value="3">
                3
              </option>
              <option className="page-number__option" value="4">
                4
              </option>
              <option className="page-number_option" value="5">
                5
              </option>
              <option className="page-number_option" value="6">
                6
              </option>
              <option className="page-number__option" value="7">
                7
              </option>
              <option className="page-number_option" value="8">
                8
              </option>
            </select>
          </div>
        </div>
      </div>
      <SCCardContainer />
      <div className="sc-totals">
        <button
          className="sc-totals__checkout"
          onClick={() => toggleElementDisplay('.pchs-module-overlay')}
        >
          Proceed to checkout
        </button>
        <div className="sc-totals__data">
          <p className="sc-totals__quantity">Total quantity: {totalQuantity}</p>
          <p
            className={
              'sc-totals__discount ' + (discountTotal === 0 ? 'hidden' : '')
            }
          >
            Total discount: {discountTotal} %
          </p>
          <p className="sc-totals__price">
            Total price:{' '}
            <span
              className={
                'sc-old-price ' + (totalQuantity === 0 ? 'hidden' : '')
              }
            >
              {discountTotal > 0 ? Math.round(totalPrice * 100) / 100 : ''}
            </span>{' '}
            {discountTotal < 100
              ? Math.round(
                  (totalPrice - (totalPrice * discountTotal) / 100) * 100
                ) / 100
              : 0}{' '}
            $
          </p>
        </div>
      </div>
      <PurchaseFormModule />
    </div>
  );
}

export default ShoppingCart;
