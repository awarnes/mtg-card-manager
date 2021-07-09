import React from 'react';
import {CardInfoComponentProps} from '../types/propTypes';
import {getCardPrice} from '../lib';

function CardPriceInfo(props: CardInfoComponentProps) {
  const {card} = props;

  return (
    <div>
      {getCardPrice(card).map(price => (
        <div>
          <p>{price[0]}</p>
          <p>{price[1]}</p>
        </div>
      ))}
    </div>
  )
}

export default CardPriceInfo;