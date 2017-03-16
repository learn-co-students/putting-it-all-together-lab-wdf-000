import React from 'react';
import UserBlackjack  from './user_blackjack';
import AIBlackjack  from './ai_blackjack';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.hitMe = this.hitMe.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.stay = this.stay.bind(this)
  }

  hitMe() {

  }

  calculateAiScore() {
    const aiScore = this.props.store.getState().aiCards.reduce((a, b) => {
      return a.value += b.value
    })
    return aiScore
  }

  calculateUserScore() {
    const userScore = this.props.store.getState().userCards.reduce((a, b) => {
      return a.value += b.value
    })
    return userScore
  }

  stay() {

  }

  render() {
    return(
      <div>
        <UserBlackjack score={this.calculateUserScore}/>
        <AIBlackjack score={this.calculateAiScore} aiCards={this.props.store.getState().aiCards}/>
      </div>
    )
  }
}
