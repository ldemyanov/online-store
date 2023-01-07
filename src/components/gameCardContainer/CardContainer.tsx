import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { gameActions } from '../../store/reducer/gamesReducer';
import { useSearchParams } from 'react-router-dom';
import './CardContainer.scss';
import * as types from './../../staticData/baseTypes';
import GameCard from '../gameCard/GameCard';
import ListGameCard from '../listGameCard/ListGameCard';

function CardContainer() {
  const { games, layout } = useAppSelector((state) => state.gameReducer);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const spLayout = searchParams.get('layout') || '';
    if (spLayout in types.ELayout) {
      dispatch(gameActions.setLayout(spLayout as types.ELayout));
    }
  }, []);

  return (
    <div className="card-container">
      {games.map((game) => {
        if (layout === types.ELayout.cards)
          return <GameCard key={game.id} game={game} />;
        else if (layout === types.ELayout.list)
          return <ListGameCard key={game.id} game={game} />;
      })}
    </div>
  );
}

export default CardContainer;
