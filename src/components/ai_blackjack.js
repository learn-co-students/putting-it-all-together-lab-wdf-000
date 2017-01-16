import React from 'react';

export default function AIBlackjack(props){

  return (
    <div>
      <h1>Computer</h1>
      <h2>Score: </h2>
        <ul>
          {props.aiCards.map((card, index) => <li>{card.name}</li>)}
        </ul>
    </div>
  )
}
