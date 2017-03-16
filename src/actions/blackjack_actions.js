export function fetchDeck() {
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(state) {
  let clone = JSON.parse(JSON.stringify(state))
  for (var i = 0; i < 2; i++) {
    const rand = Math.floor( Math.random() * clone.deck.length )
    clone.aiCards.push(clone.deck[rand])
    clone.deck.splice(rand, 1)
  }

  return {
    type: 'SET_AI_CARDS',
    payload: clone
  }
}

export function setUserCards(state) {
  let clone = JSON.parse(JSON.stringify(state))
  for (var i = 0; i < 2; i++) {
    const rand = Math.floor( Math.random() * clone.deck.length )
    clone.userCards.push(clone.deck[rand])
    clone.deck.splice(rand, 1)
  }

  return {
    type: 'SET_USER_CARDS',
    payload: clone
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
