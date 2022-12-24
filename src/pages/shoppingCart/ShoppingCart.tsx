import React from 'react';
import { useLocation } from 'react-router-dom';
import ShopCartCard from '../../components/shopCartCard/ShopCartCard';
import './shoppingCart.scss';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const gameObject = {
  id: 23272845354,
  name: 'Gloomhaven',
  price: 120.99,
  rating: 5,
  numOfPlayers: 5,
  categories: ['strategy', 'cards', 'quiz', 'economy', 'kids'],
  inStock: 13,
  images: [
    'https://live.staticflickr.com/65535/52573820618_ce5b98a77c_m.jpg',
    'https://live.staticflickr.com/65535/52563442461_eb68758353_b.jpg',
    'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
    'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  ],
  description:
    'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Also, players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.',
};

function ShoppingCart() {
  const query = useQuery();
  const params = query.entries();
  for (const [key, value] of params) {
    console.log(key, value);
  }

  return (
    <div className="sc-box">
      <h2 className="sc-box__name">Your Cart</h2>
      <div className="sc-content">
        <ShopCartCard
          {...{
            gameObj: gameObject,
            quantity: 1,
          }}
        />
        <ShopCartCard
          {...{
            gameObj: gameObject,
            quantity: 1,
          }}
        />
        <ShopCartCard
          {...{
            gameObj: gameObject,
            quantity: 1,
          }}
        />
        <ShopCartCard
          {...{
            gameObj: gameObject,
            quantity: 1,
          }}
        />
        <ShopCartCard
          {...{
            gameObj: gameObject,
            quantity: 1,
          }}
        />
        {/* <ShopCartCard
          {...{
            gameObj: gameObject,
            quantity: 1,
          }}
        />
        <ShopCartCard
          {...{
            gameObj: gameObject,
            quantity: 1,
          }}
        /> */}
      </div>
      <p className="sc-box__price">Total price: 246.90 $</p>
      <button className="sc-button-checkout">Proceed to checkout</button>
    </div>
  );
}

export default ShoppingCart;
