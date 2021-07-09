import {Card} from '../types/cardTypes'

export default function (card: Card): Array<[string, number]> {
  return Object.keys(card.purchaseUrls).map(location => [location, 0])
}