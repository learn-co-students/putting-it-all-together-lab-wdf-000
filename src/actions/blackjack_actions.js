import React from 'react';
import blackjack_reducer from '../reducers/blackjack_reducer'

export function fetchDeck(){
  return {type: 'FETCH_DECK'}
}

export function setAICards(board){
  let boardCopy = JSON.parse(JSON.stringify(board));
  let userCards = boardCopy.userCards;
  let selectedCards = [];
  let random = shuffle(boardCopy.deck)
  selectedCards.push(random[0])
  selectedCards.push(random[1])
  random.splice(0, 2);
  return { type: 'SET_AI_CARDS', payload: {deck: random, aiCards: selectedCards, userCards: boardCopy.userCards}}
}


function shuffle(a) {
  for(let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a
}

export function setUserCards(board){
  let boardCopy = JSON.parse(JSON.stringify(board));
  let selectedCards = []
  let random = shuffle(boardCopy.deck)
  selectedCards.push(random[0])
  selectedCards.push(random[1])
  random.splice(0, 2);
  return {type: 'SET_USER_CARDS', payload: {deck: random, aiCards: boardCopy.aiCards, userCards: selectedCards}}
}

export function hitAI(board){
  let boardCopy = JSON.parse(JSON.stringify(board))
  let selectedCards = boardCopy.aiCards
  let random = shuffle(boardCopy.deck)
  selectedCards.push(random[0])
  random.splice(0, 1)
  return {type: 'SET_AI_CARDS', payload: {deck: random, aiCards: selectedCards, userCards: boardCopy.userCards}}
}

export function hitUser(board){
  let boardCopy = JSON.parse(JSON.stringify(board));
  let selectedCards = boardCopy.userCards
  let random = shuffle(boardCopy.deck)
  selectedCards.push(random[0])
  random.splice(0, 1);
  return {type: 'SET_USER_CARDS', payload: {deck: random, aiCards: boardCopy.aiCards, userCards: selectedCards}}
}
