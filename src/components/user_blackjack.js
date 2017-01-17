import React from 'react';

export default function UserBlackjack(props){

  return (
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score()} </h2>
        <ul>
          {props.userCards.map((card, index) => <li key={index}>{card.name}</li>)}
        </ul>
        <form onSubmit={props.hitMe}>
          <button type="submit"> Hit Me </button>
        </form>
        <form onSubmit={props.stay}>
          <button type="submit"> Stay </button>
        </form>
    </div>
  )
}
