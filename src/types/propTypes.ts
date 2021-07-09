import {Card} from './cardTypes'
import {Deck} from './deckTypes'

interface WorkbenchProps {
  deck: Deck
}

interface CardInfoProps {
  currentCard: Card
  expanded: Boolean
}

interface CardInfoComponentProps {
  card: Card
}

interface DeckOrganizerProps {
  deck: Deck
}

interface CardEntryProps {
  card: Card
  quantity: Number
}

export type {
  WorkbenchProps,
  CardInfoProps,
  CardInfoComponentProps,
  DeckOrganizerProps
};