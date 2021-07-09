import React from 'react'
import CardEntry from '../components/CardEntry'
import {DeckOrganizerProps} from '../types/propTypes'

function DeckOrganizer(props: DeckOrganizerProps) {
  const {name, cards, commander, description} = props.deck;

  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      {cards.map(card => <CardEntry card={card} quantity={quantity} />)}
    </div>
  )
};

export default DeckOrganizer;