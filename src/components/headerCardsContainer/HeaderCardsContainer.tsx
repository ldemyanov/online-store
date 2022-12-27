import React from 'react';
import './headerCardsContainer.scss';
import { useAppSelector } from '../../store';
import GameInCartCard from '../gameInCartCard/GameInCartCard';

function HeaderCardsContainer() {
  const { cartGames } = useAppSelector((state) => state.cartGameReducer);

  return (
    <div className="cart-games">
      {cartGames.map((game) => (
        <GameInCartCard
          key={game.game.id}
          game={game.game}
          quantity={game.quantity}
          position={game.position}
        />
      ))}
    </div>
  );
}

export default HeaderCardsContainer;
