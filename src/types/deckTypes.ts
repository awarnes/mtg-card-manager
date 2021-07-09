import {Card} from './cardTypes'

interface Deck {
  commander?: Array<Card>
  cards: Array<Card>
  name: String
  description: String
}

export type {
  Deck
}