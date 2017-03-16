export function fetchDeck() {
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(state) {
  let deck = state.deck
  let card_1 = deck[Math.floor ( Math.random() * deck.length )]
  let card_2 = deck[Math.floor ( Math.random() * deck.length )]
  return {
    type: 'SET_AI_CARDS',
    payload: [card_1, card_2]
  }
}

export function setUserCards(state) {
  let deck = state.deck
  let card_1 = deck[Math.floor ( Math.random() * deck.length )]
  let card_2 = deck[Math.floor ( Math.random() * deck.length )]
  return {
    type: 'SET_USER_CARDS',
    payload: [card_1, card_2]
  }
}

export function hitAI(deck) {
  let card = deck[Math.floor ( Math.random() * deck.length )]
  return {
    type: 'HIT_AI',
    payload: card
  }
}

export function hitUser(deck) {
  let card = deck[Math.floor ( Math.random() * deck.length )]
  return {
    type: 'HIT_USER',
    payload: card
  }
}
