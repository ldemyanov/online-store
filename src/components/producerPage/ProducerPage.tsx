import React, { useEffect } from 'react';
import './producerPage.scss';
import GameCard from '../gameCard/GameCard';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs';
import * as types from './../../staticData/baseTypes';

function ProducerPage({ games }: types.TGameCardsProp) {
  const producer = games.length > 0 ? games[0].produced : 'GMT Games';

  useEffect(() => {
    document.title = `Tabletop Geek: ${producer}`;
  }, []);

  return (
    <>
      <div className="producer-page-crumbs">
        <BreadCrumbs params={{ producer: producer }} />
      </div>

      <div className="producer-page">
        <p className="producer-page__name">{producer}</p>
        <div className="producer-page__container">
          {games.map((game) => {
            return <GameCard key={game.id} game={game} prodParent={true} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProducerPage;
