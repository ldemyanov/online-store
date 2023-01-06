import React from 'react';
import './breadCrumbs.scss';
import { Link } from 'react-router-dom';
import { TGame } from '../../store/reducer/games';
import arrowRight from './../../static/arrow-right-crumbs.png';

type crumbsParams = {
  params: {
    producer: string;
    game?: TGame;
  };
};

function BreadCrumbs({ params }: crumbsParams) {
  const nameOfTheProducer = params.producer;
  const linkToProducerGameSet =
    `/product?` + `prodBy=${nameOfTheProducer.split(' ').join('-')}`;
  return (
    <div className="crumbs">
      <Link className="crumbs__link" to={`/`}>
        <p className="crumbs__line">Store</p>
      </Link>
      <img className="crumbs__arrow" src={arrowRight} alt="" />
      <Link className="crumbs__link" to={linkToProducerGameSet}>
        <p className="crumbs__line">{nameOfTheProducer}</p>
      </Link>
      <img className="crumbs__arrow" src={arrowRight} alt="" />
      <p className="crumbs__line">{params.game ? params.game.name : ''}</p>
    </div>
  );
}

export default BreadCrumbs;
