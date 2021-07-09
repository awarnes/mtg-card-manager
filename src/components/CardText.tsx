import React from 'react';
import {CardInfoComponentProps} from '../types/propTypes';

function CardText(props: CardInfoComponentProps) {
  const {card} = props;

  return (
    <div>
      <p>{card.name}</p>
      <p>{card.type}</p>
      <p>{card.text}</p>
    </div>
  )
}

export default CardText;