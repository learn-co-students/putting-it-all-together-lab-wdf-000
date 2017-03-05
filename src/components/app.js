import React from 'react'
import UserBlackjack from './user_blackjack'
import AIBlackjack from './ai_blackjack'
import {hitUser, hitAI} from '../actions/blackjack_actions'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.hitMe = this.hitMe.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.stay = this.stay.bind(this)
  }
  hitMe(user){
    if (user==='user') {
      this.props.store.dispatch(hitUser(this.props.store.getState()))
    } else {
      this.props.store.dispatch(hitAI(this.props.store.getState()))
    }
  }
  calculateAiScore(){
    const aiScore = this.props.store.getState().aiCards.reduce((total, curr) => { 
            return total += curr.value}, 0)
    if (aiScore > 21) {
      return "BUST"
    }else {
      return aiScore
    }
  }

  calculateUserScore(){
    const userScore = this.props.store.getState().userCards.reduce((total, curr) => {
            return total += curr.value}, 0)
    console.log(userScore)
    if (userScore > 21) {
      return "BUST"
    }else {
      return userScore
    }
  }

  stay(){
    const aiScore = this.calculateAiScore();
    const userScore = this.calculateUserScore();
    if (userScore > aiScore && userScore !== 'BUST'){
      return
    }
    else {
      this.hitMe()
    }
  }


  render(){
    return(
      <div>
        <UserBlackjack hitMe={this.hitMe} score={this.calculateUserScore} stay={this.stay} userCards={this.props.store.getState().userCards}/>
        <AIBlackjack score={this.calculateAiScore} aiCards={this.props.store.getState().aiCards} hitMe={this.hitMe} userScore={this.calculateUserScore}/>
      </div>
    )
  }
}