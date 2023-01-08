import React, { useEffect, useState } from 'react';
import './aboutProduct.scss';
import * as types from './../../staticData/baseTypes';
import { useSearchParams } from 'react-router-dom';
import { GAMES } from '../../store/reducer/games';
import { useAppDispatch } from '../../store';
import { gameActions } from '../../store/reducer/cartGamesReducer';
import { EMPTY_GAME } from '../../staticData/baseValues';
import ProducerPage from '../../components/producerPage/ProducerPage';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import EmptyGameBlock from '../../components/emptyGameBlock/EmptyGameBlock';
import ZoomedImageBlock from '../../components/zoomedImageBlock/ZoomedImageBlock';
import AboutGameInfoBlock from '../../components/aboutGameInfoBlock/AboutGameInfoBlock';

function AboutProduct() {
  const [searchParams] = useSearchParams();
  const [thisGame, setThisGame] = useState(EMPTY_GAME);
  const [isGameDisplayed, setIsGameDisplayed] = useState(false);
  const arrOfGames: types.TGame[] = [];
  const [producerGames, setProducerGames] = useState(arrOfGames);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.title = `Tabletop Geek: ${thisGame.name}`;
  }, [thisGame]);

  useEffect(() => {
    const id = searchParams.get('id');
    const prodBy = searchParams.get('prodBy');
    if (id) {
      const displayedGame = GAMES.find((game) => game.id === +id) || EMPTY_GAME;
      setIsGameDisplayed(true);
      setThisGame(displayedGame);
    } else setIsGameDisplayed(false);
    if (prodBy) {
      const producer = prodBy.split('-').join(' ');
      const games = GAMES.filter((game) => game.produced === producer);
      setProducerGames(games);
    }
  }, [searchParams]);

  useEffect(() => {
    dispatch(gameActions.initialData());
  }, []);

  function returnGameData() {
    return (
      <>
        <div className="pp-crumbs-block">
          <BreadCrumbs
            params={{ producer: thisGame.produced, game: thisGame }}
          />
        </div>
        <div className="pp_parent-block">
          <ZoomedImageBlock {...thisGame} />
          <AboutGameInfoBlock {...thisGame} />
        </div>
      </>
    );
  }

  if (isGameDisplayed)
    return thisGame === EMPTY_GAME ? <EmptyGameBlock /> : returnGameData();
  return <ProducerPage games={producerGames} />;
}

export default AboutProduct;
