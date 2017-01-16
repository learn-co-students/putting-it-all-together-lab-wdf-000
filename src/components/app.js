import React from 'react';
import UserBlackjack from './user_blackjack';
import AIBlackjack from './ai_blackjack';
import { hitUser, hitAI } from '../actions/blackjack_actions';

export default class App extends React.Component{

  constructor(){
    super()
    this.hitMe = this.hitMe.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.stay = this.stay.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
  }

  hitMe(){

  }

  calculateAiScore(){
    return this.props.store.getState().aiCards.reduce((a,b) => {return a + b.value},0);
  }

  calculateUserScore(){
    let score;
    var total = this.props.store.getState().userCards.reduce((a,b) => {return a +   b.value},0)
    total > 21 ? score = "BUST" : score = total
    return score
  }

  stay(event){
    event.preventDefault()
  }

  render(){
    return <div>
      <AIBlackjack aiCards={this.props.store.getState().aiCards}/>
      <UserBlackjack userCards={this.props.store.getState().userCards} hitMe={this.hitMe} score={this.calculateUserScore} stay={this.stay}/>
    </div>
  }


}
