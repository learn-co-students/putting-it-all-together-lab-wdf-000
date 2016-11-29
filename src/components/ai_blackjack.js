import React from 'react';

export default function AIBlackjack(props){
  return(
    <div id="AI">
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {props.aiCards.map((card, i) => <li key={i}>{card.name}</li>)}
      </ul>
    </div>
  )
}
