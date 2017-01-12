import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import App from './components/app';
import blackJackReducer from './reducers/blackjack_reducer';
import { fetchDeck, setAICards, setUserCards } from './actions/blackjack_actions';

const store = createStore(blackJackReducer);

const render = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}

store.subscribe(render)
store.dispatch(fetchDeck());
store.dispatch(setAICards(store.getState()));
store.dispatch(setUserCards(store.getState()));

require('../test/index-test.js')  // Leave this in!
