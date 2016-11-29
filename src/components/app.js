import React from 'react';
import UserBlackjack from './user_blackjack';
import AIBlackjack from './ai_blackjack';
import { hitUser, hitAI } from '../actions/blackjack_actions';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.calculateUserScore = this.calculateUserScore.bind(this);
    this.calculateAiScore = this.calculateAiScore.bind(this);
    this.hitMe = this.hitMe.bind(this);
    this.stay = this.stay.bind(this);
  }

  hitMe(ev){
    if (ev){
      ev.preventDefault();
      this.props.store.dispatch(hitUser(this.props.store.getState()));
    } else {
      this.props.store.dispatch(hitAI(this.props.store.getState()));
    }

  }

  calculateAiScore(){
    /// Repetitio mater studiorum est??????????
    let score = this.props.store.getState().aiCards.reduce((a,b) => {return a + b.value},0);
    let aiScore;
    score > 21 ? aiScore = "BUST" : aiScore = score
    return aiScore;
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
    if (ev) {
      ev.preventDefault();
      let gameOn = 1;
      while (gameOn === 1) {
        let userScore = this.calculateUserScore()
        let aiScore = this.calculateAiScore();
        if (userScore === "BUST"){
          gameOn = 0;
          //do nothing, you won you lucky computer...
        } else if (aiScore === "BUST"){
          gameOn = 0;
          // do nothing, you've lost
        } else if (aiScore > userScore){
          //do nothing, you won you lucky computer...
          gameOn = 0;
        } else {
          // console.log(gameOn)
          this.hitMe();
        }
      }
    }

    // this.props.store.dispatch(hitAI(this.props.store.getState()));
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
