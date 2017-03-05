export function fetchDeck() {
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(deck) {
  let deckCopy = JSON.parse(JSON.stringify(deck))

  for (var i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * deckCopy.deck.length)
    deckCopy.aiCards.push(deckCopy.deck[randomIndex])
    deckCopy.deck.splice(randomIndex, 1)
  }

  return {
    type: 'SET_AI_CARDS',
    payload: deckCopy
  }
}

export function setUserCards(deck) {
  let deckCopy = JSON.parse(JSON.stringify(deck))

  for (var i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * deckCopy.deck.length)
    deckCopy.userCards.push(deckCopy.deck[randomIndex])
    deckCopy.deck.splice(randomIndex, 1)
  }

  return {
    type: 'SET_USER_CARDS',
    payload: deckCopy
  }
}

export function hitAI(deck) {
  let deckCopy = JSON.parse(JSON.stringify(deck))
  const randomIndex = Math.floor(Math.random() * deckCopy.deck.length)
  const newAICard = deckCopy.deck[randomIndex]
  deckCopy.aiCards.push(newAICard)
  deckCopy.deck.splice(randomIndex, 1)

  return {
    type: 'HIT_AI',
    payload: {deck: deckCopy, aiCards: deckCopy.aiCards, userCards: deckCopy.userCards}
  }  
}

export function hitUser(deck) {
  let deckCopy = JSON.parse(JSON.stringify(deck))
  const randomIndex = Math.floor(Math.random() * deckCopy.deck.length)
  const newUserCard = deckCopy.deck[randomIndex]
  deckCopy.userCards.push(newUserCard)
  deckCopy.deck.splice(randomIndex, 1)

  return {
    type: 'HIT_USER',
    payload: {deck: deckCopy, aiCards: deckCopy.aiCards, userCards: deckCopy.userCards}
  }
}