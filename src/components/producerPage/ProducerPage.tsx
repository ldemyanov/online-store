import React from 'react';
import './producerPage.scss';
import GameCard from '../gameCard/GameCard';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs';
import * as types from './../../staticData/baseTypes';

function ProducerPage({ games }: types.TGameCardsProp) {
  const producer = games.length > 0 ? games[0].produced : 'GMT Games';
  return (
    <>
      <div className="producer-page-crumbs">
        <BreadCrumbs params={{ producer: producer }} />
      </div>

      <div className="producer-page">
        <p className="producer-page__name">{producer}</p>
        <div className="producer-page__container">
          {games.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProducerPage;
