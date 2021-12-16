import React, { Component } from 'react';

//Basketball
const basketballPlayer = {
    name: 'Steph Curry',
    team: 'Warriors'
  }
  
  const bballPayload = [
    {
      name:'Basketball Player 2',
      team: 'Team 2'
    },{
      name:'Basketball Player 3',
      team: 'Team 3'
    },{
      name:'Basketball Player 4',
      team: 'Team 4'
    },{
      name:'Basketball Player 5',
      team: 'Team 5'
    }
  ]
  
  const displayBasketballPlayers = bballPayload.map((player, index) => {
    return (
      <div key={index}>
        <h2>Name {player.name}</h2>
        <p>Team {player.team}</p>
      </div>
    );
  });
  

class Basketball extends Component {
    render() {
        return(
            <div>
                <h1>Basketball</h1>
                <div>
                <h2>{basketballPlayer.name}</h2>
                    <p>{basketballPlayer.team}</p>
                </div>
                {displayBasketballPlayers}
            </div> 
        )
            
            
    }
}

export default Basketball;






//================TEMPLATE===============\\

// import React, { Component } from 'react';

// class Basketball extends Component {
//     render() {
//         return(
//             <div>
//                 <h1>Basketball</h1>
//             </div>
//         )
//     }
// }

// export default Basketball;