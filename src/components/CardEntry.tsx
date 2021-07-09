import React from 'react';
import { Card } from '../types/cardTypes';
import { CardEntryProps } from '../types/propTypes';

function CardEntry(props: CardEntryProps) {
  return (
    <div>
      <p>{card.quantity}</p>
      <p>{card.name}</p>
      <p>+</p>
    </div>
  )
};

export default CardEntry;