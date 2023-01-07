import React from 'react';
import './RatingDisplay.scss';
import ratingIcon from './../../static/rating-icon.png';
import * as types from './../../staticData/baseTypes';

function RatingDisplay({ ...props }: types.TPropsRatingDisplay) {
  const ratingBlock = [1, 2, 3, 4, 5].map((num) => (
    <img className="rc-rating__img" src={ratingIcon} key={num} />
  ));
  return <div className="rc-rating">{ratingBlock.slice(0, props.rating)}</div>;
}
export default RatingDisplay;
