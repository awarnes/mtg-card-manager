import React from 'react';
import {CardInfoComponentProps} from '../types/propTypes';
import {getCardImage} from '../lib'

function CardImage(props: CardInfoComponentProps) {
  const {card} = props;

  return (
    <img src={getCardImage(card)} />
  )
}

export default CardImage;