interface Card {
  artist: string
  availability: Array<CardAvailabilityEnum>
  borderColor: string
  colorIdentity: Array<CardColorEnum>
  colors: Array<CardColorEnum>
  convertedManaCost: number
  edhrecRank: number
  faceName: string
  flavorText: string
  foreignData: Array<ForeignData>
  frameVersion: string
  hasFoil: boolean
  hasNonFoil: boolean
  identifiers: CardIdentifiers
  layout: CardLayoutEnum
  legalities: CardLegalities
  name: string
  number: string
  originalText: string
  originalType: string
  otherFaceIds: Array<string>
  printings: Array<SetAbbreviationEnum>
  purchaseUrls: CardPurchaseUrls
  rarity: CardRarityEnum
  rulings: Array<CardRuling>
  setCode: SetAbbreviationEnum
  side: CardSideEnum
  subtypes: Array<CardSubtypeEnum>
  text: string
  type: CardTypeEnum
  types: Array<CardTypeEnum>
  uuid: string
  variations: Array<string>
}

enum CardAvailabilityEnum {
  arena,
  mtgo,
  paper
}

enum CardColorEnum {
  W,
  U,
  B,
  R,
  G,
  C
}

enum CardLayoutEnum {
  modal_dfc,
}

enum CardLegalityEnum {
  Legal
}

enum SetAbbreviationEnum {

}

enum CardRarityEnum {
  rare
}

enum CardSideEnum {
  a,
  b
}

enum CardSubtypeEnum {

}

enum CardTypeEnum {
  Land
}

interface ForeignData {
  faceName: string
  flavorText: string
  language: string
  multiverseId: number
  name: string
  text: string
  type: string
}

interface CardIdentifiers {
  cardKingdomFoilId?: string
  cardKingdomId?: string
  mcmId?: string
  mcmMetaId?: string
  mtgArenaId?: string
  mtgjsonV4Id?: string
  mtgoId?: string
  multiverseId?: string
  scryfallId?: string
  scryfallIllustrationId?: string
  scryfallOracleId?: string
  tcgplayerProductId?: string
}

interface CardLegalities {
  brawl: CardLegalityEnum
  commander: CardLegalityEnum
  duel: CardLegalityEnum
  future: CardLegalityEnum
  gladiator: CardLegalityEnum
  historic: CardLegalityEnum
  legacy: CardLegalityEnum
  modern: CardLegalityEnum
  pioneer: CardLegalityEnum
  standard: CardLegalityEnum
  vintage: CardLegalityEnum
}

interface CardPurchaseUrls {
  cardKingdom: string
  cardKingdomFoil: string
  cardmarket: string
  tcgplaayer: string
}

interface CardRuling {
  date: string
  text: string
}

interface CardCollectionInstance {
  card: Card
  quantity: number
  locations: Array<Location>
}

export type {
  Card
}