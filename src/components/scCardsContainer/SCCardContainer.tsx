import React from 'react';
import './scCardContainer.scss';
import { useAppSelector } from '../../store';
import ShopCartCard from '../shopCartCard/ShopCartCard';

function ScCardContainer() {
  const { cartGames, firstIndex, lastIndex } = useAppSelector(
    (state) => state.cartGameReducer
  );

  return (
    <div className="sc-content">
      {cartGames
        .filter((game, index) => index >= firstIndex && index <= lastIndex)
        .map((game) => (
          <ShopCartCard
            key={game.game.id}
            game={game.game}
            quantity={game.quantity}
          />
        ))}
    </div>
  );
}

export default ScCardContainer;
