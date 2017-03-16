import React from 'react';

const UserBlackjack = (props) => {
 return(
   <div>
    <h1>Player1</h1>
    <h2>Score: {props.score()}</h2>
   </div>
 )
}

export default UserBlackjack;
