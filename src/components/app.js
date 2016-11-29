import React from 'react';
import UserBlackjack from './user_blackjack';
import AIBlackjack from './ai_blackjack';
import { hitUser } from '../actions/blackjack_actions';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.calculateUserScore = this.calculateUserScore.bind(this);
    this.calculateAiScore = this.calculateAiScore.bind(this);
    this.hitMe = this.hitMe.bind(this);
    this.stay = this.stay.bind(this);
  }
  hitMe(ev){
    ev.preventDefault();
    this.props.store.dispatch(hitUser(this.props.store.getState()));
    // this.props.store.dispatch({type: 'ADD_CARD', payload: {this.props.store.getState()}});
    // console.log("OUCH!");
  }
  calculateAiScore(){
    // console.log(this.props.store.getState().aiCards.reduce((a,b) => {return a + b.value},0));
    return this.props.store.getState().aiCards.reduce((a,b) => {return a + b.value},0);
  }
  calculateUserScore(){
  // console.log(this.props.store.getState().userCards)
    let score = this.props.store.getState().userCards.reduce((a,b) => {return a + b.value},0);
    let userScore;
    score > 21 ? userScore = "BUST" : userScore = score
    // console.log("user " + score);
    return userScore;
  }
  stay(ev){
    ev.preventDefault();
    // console.log("Stand by me...");
  }

  render(){
    return(
      <div>
        <h1>The answer to HALF of everything!</h1>
        <UserBlackjack score={this.calculateUserScore} userCards={this.props.store.getState().userCards} hitMe={this.hitMe} stay={this.stay} />
        <AIBlackjack score={this.calculateAiScore} aiCards={this.props.store.getState().aiCards} />
      </div>
    )
  }
}
