import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StarRating({ rating }) {
  const stars = [];

  for (let index = 0; index < rating; index += 1) {
    stars.push(<FontAwesomeIcon icon="star" key={`rating${index}`} />);
  }
  return stars;
}

export default StarRating;
