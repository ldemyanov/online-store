import React from 'react';
import './scCardContainer.scss';
import { useAppSelector } from '../../store';
import ShopCartCard from '../shopCartCard/ShopCartCard';

function ScCardContainer() {
  const { cartGames, firstIndex, lastIndex } = useAppSelector(
    (state) => state.cartGameReducer
  );

  let blockContent: JSX.Element[] | JSX.Element;
  if (cartGames.length > 0) {
    blockContent = cartGames
      .filter((game, index) => index >= firstIndex && index <= lastIndex)
      .map((game) => (
        <ShopCartCard
          key={game.game.id}
          game={game.game}
          quantity={game.quantity}
          position={game.position}
        />
      ));
  } else {
    blockContent = <div>You have not added any games to the cart</div>;
  }

  return (
    <div className="sc-content">
      {/* {cartGames
        .filter((game, index) => index >= firstIndex && index <= lastIndex)
        .map((game) => (
          <ShopCartCard
            key={game.game.id}
            game={game.game}
            quantity={game.quantity}
          />
        ))} */}
      {blockContent}
    </div>
  );
}

export default ScCardContainer;
