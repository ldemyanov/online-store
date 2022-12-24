import React from 'react';
import './CardContainer.scss';
import GameCard from '../gameCard/GameCard';
import { useAppSelector } from '../../store';

function CardContainer() {
  const { games } = useAppSelector((state) => state.gameReducer);

  return (
    <div className="card-container">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default CardContainer;
