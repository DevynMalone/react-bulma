import React, { Component } from 'react';

//football
const footballPlayer = {
    name: 'Aaron Donald',
    team: 'Rams'
  }
  
  const footballPayload = [
    {
      name:'Football Player 2',
      team: 'Team 2'
    },{
      name:'Football Player 3',
      team: 'Team 3'
    },{
      name:'Football Player 4',
      team: 'Team 4'
    },{
      name:'Football Player 5',
      team: 'Team 5'
    }
  ]
  
  const displayFootballPlayers = footballPayload.map((player, index) => {
    return (
      <div key={index}>
        <h2>Name {player.name}</h2>
        <p>Team {player.team}</p>
      </div>
    );
  });
  

class Football extends Component {
    render() {
        return(
            <div>
                <h1>Football</h1>
                <div>
                <h2>{footballPlayer.name}</h2>
                    <p>{footballPlayer.team}</p>
                </div>
                {displayFootballPlayers}
            </div> 
        )
            
            
    }
}

export default Football;