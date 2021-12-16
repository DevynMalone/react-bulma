import React, { Component } from 'react';

//baseball
const baseballPlayer = {
    name: 'Aaron Judge',
    team: 'Yankees'
  }
  
  const baseballPayload = [
    {
      name:'Baseball Player 2',
      team: 'Team 2'
    },{
      name:'Baseball Player 3',
      team: 'Team 3'
    },{
      name:'Baseball Player 4',
      team: 'Team 4'
    },{
      name:'Baseball Player 5',
      team: 'Team 5'
    }
  ]
  
  const displayBaseballPlayers = baseballPayload.map((player, index) => {
    return (
      <div key={index}>
        <h2>Name {player.name}</h2>
        <p>Team {player.team}</p>
      </div>
    );
  });
  

class Baseball extends Component {
    render() {
        return(
            <div>
                <h1>Baseball</h1>
                <div>
                <h2>{baseballPlayer.name}</h2>
                    <p>{baseballPlayer.team}</p>
                </div>
                {displayBaseballPlayers}
            </div> 
        )
            
            
    }
}

export default Baseball;