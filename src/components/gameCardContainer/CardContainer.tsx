import React from 'react';
import './CardContainer.scss';
import GameCard from '../gameCard/GameCard';
import ListGameCard from '../listGameCard/ListGameCard';
import { useAppSelector } from '../../store';
import { ELayout } from '../../store/reducer/gamesReducer';

function CardContainer() {
  const { games, layout } = useAppSelector((state) => state.gameReducer);

  return (
    <div className="card-container">
      {games.map((game) => {
        if (layout === ELayout.cards)
          return <GameCard key={game.id} game={game} />;
        else if (layout === ELayout.list)
          return <ListGameCard key={game.id} game={game} />;
      })}
    </div>
  );
}

export default CardContainer;
