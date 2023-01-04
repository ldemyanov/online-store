import React, { useEffect } from 'react';
import './CardContainer.scss';
import GameCard from '../gameCard/GameCard';
import ListGameCard from '../listGameCard/ListGameCard';
import { useAppDispatch, useAppSelector } from '../../store';
import { ELayout, gameActions } from '../../store/reducer/gamesReducer';
import { useSearchParams } from 'react-router-dom';

function CardContainer() {
  const { games, layout } = useAppSelector((state) => state.gameReducer);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const spLayout = searchParams.get('layout') || '';
    if (spLayout in ELayout) {
      dispatch(gameActions.setLayout(spLayout as ELayout));
    }
  }, []);

  console.log(games);
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
