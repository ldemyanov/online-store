import React from 'react';
import './scCardContainer.scss';
import { useAppSelector } from '../../store';
import ShopCartCard from '../shopCartCard/ShopCartCard';

function ScCardContainer() {
  const { cartGames } = useAppSelector((state) => state.cartGameReducer);

  return (
    <div className="sc-content">
      {cartGames.map((game) => (
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
