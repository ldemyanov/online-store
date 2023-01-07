import React from 'react';
import './breadCrumbs.scss';
import * as types from './../../staticData/baseTypes';
import arrowRight from './../../static/arrow-right-crumbs.png';
import { Link } from 'react-router-dom';

function BreadCrumbs({ params }: types.crumbsParams) {
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
      <img
        className={'crumbs__arrow' + (params.game ? '' : ' hidden')}
        src={arrowRight}
      />
      <p className="crumbs__line">{params.game ? params.game.name : ''}</p>
    </div>
  );
}

export default BreadCrumbs;
