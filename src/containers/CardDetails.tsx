import React from 'react';
import {CardInfoProps} from '../types/propTypes';
import CardImage from '../components/CardImage';
import CardText from '../components/CardText';
import CardPriceInfo from '../components/CardPriceInfo';
import CardRulesText from '../components/CardRulesText';

function CardDetails(props: CardInfoProps) {
  const {currentCard, expanded} = props;

  return (
    <div>
      <CardImage card={currentCard}/>
      <CardText card={currentCard}/>
      {expanded ? (
        <div>
          <CardPriceInfo card={currentCard}/>
          <CardRulesText card={currentCard}/>
        </div>
        ) : null
      }
    </div>
  )
}

export default CardDetails;