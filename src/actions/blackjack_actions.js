export function fetchDeck() {
  return {
    type: "FETCH_DECK"
  }
}

export function setAICards(deck) {
  let deckCopy = JSON.parse(JSON.stringify(deck));

  for (var i = 0; i < 2; i++) {
    const randIndex = Math.floor(Math.random() * (deckCopy.deck.length - 1) + 1);
    deckCopy.aiCards.push(deckCopy.deck[randIndex]);
    deckCopy.deck.splice(randIndex, 1);
  }

  return {
    type: "SET_AI_CARDS",
    payload: deckCopy,
  }
}

export function setUserCards(deck) {
  let deckCopy = JSON.parse(JSON.stringify(deck));

  for (var i = 0; i < 2; i++) {
    const randIndex = Math.floor(Math.random() * (deckCopy.deck.length - 1) + 1);
    deckCopy.userCards.push(deckCopy.deck[randIndex]);
    deckCopy.deck.splice(randIndex, 1);
  }

  return {
    type: "SET_USER_CARDS",
    payload: deckCopy,
  }
}

export function hitAI(deck) {
  const randIndex = Math.random() * (deck.deck.length - 1) + 1;
  const newCard = deck[randIndex];

  return {
    type: "HIT_AI",
    payload: newCard,
  }
}

export function hitUser(deck) {
  const randIndex = Math.random() * (deck.deck.length - 1) + 1;
  const newCard = deck[randIndex];

  return {
    type: "HIT_USER",
    payload: newCard,
  }
}


