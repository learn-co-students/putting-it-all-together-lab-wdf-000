export function fetchDeck(){
  return { type: 'FETCH_DECK' }
}

export function setAICards(board){
  // console.log(board);
  let boardCopy = JSON.parse(JSON.stringify(board));
  let userCards = boardCopy.userCards;
  let selectedCards = [];
  let count;
  let card;

  for (let i = 0; i < 2; i++){
    count = boardCopy.deck.length;
    card = Math.floor(Math.random()*count);
    selectedCards.push(boardCopy.deck[card]);
    boardCopy.deck.splice(card, 1);
    // console.log(i);
  }
  // console.log(selectedCards);
  return { type: 'SET_AI_CARDS', payload: {deck: boardCopy.deck, aiCards: selectedCards, userCards: userCards}}
}

export function setUserCards(board){
  ////I JUST MET YOU AND THIS IS CRAZY, IT NEEDS TO DRY, REFACTOR MAYBE?
  let boardCopy = JSON.parse(JSON.stringify(board));
  let aiCards = boardCopy.aiCards;
  let selectedCards = [];
  let count;
  let card;

  for (let i = 0; i < 2; i++){
    count = boardCopy.deck.length;
    card = Math.floor(Math.random()*count);
    selectedCards.push(boardCopy.deck[card]);
    boardCopy.deck.splice(card, 1);
    // console.log(i);
  }
  // console.log(selectedCards)
  return { type: 'SET_USER_CARDS', payload: {deck: boardCopy.deck, aiCards: aiCards, userCards: selectedCards}}
}

export function hitAI(){

}

export function hitUser(board){
  let boardCopy = JSON.parse(JSON.stringify(board));
  let aiCards = boardCopy.aiCards;
  let selectedCards = boardCopy.userCards;
  let count;
  let card;

  count = boardCopy.deck.length;
  card = Math.floor(Math.random()*count);
  selectedCards.push(boardCopy.deck[card]);
  boardCopy.deck.splice(card, 1);
  // console.log(i);

  return {type: 'ADD_CARD', payload: {deck: boardCopy.deck, aiCards: aiCards, userCards: selectedCards}}
}
