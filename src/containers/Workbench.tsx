import React, {useState} from 'react';
import {WorkbenchProps} from '../types/propTypes';
import CardDetails from './CardDetails';
import DeckOrganizer from './DeckOrganizer';

function Workbench(props: WorkbenchProps) {
  const {deck} = props;
  const [selectedCardValue, selectCard] = useState();

  return (
    <div>
      <CardDetails currentCard={selectedCardValue} expanded={true}/>
      <DeckOrganizer onMouseOver={selectCard} deck={deck}/>
    </div>
  )
};

export default Workbench;