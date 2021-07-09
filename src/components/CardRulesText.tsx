import React from 'react';
import {CardInfoComponentProps} from '../types/propTypes';

function CardRulesText(props: CardInfoComponentProps) {
  const {card} = props;

  return (
    <div>
      {card.rulings.map(ruling => (
        <div>
          <p color='light-gray'>{ruling.date}</p>
          <p>{ruling.text}</p>
        </div>
      ))}
    </div>
  )
}

export default CardRulesText;