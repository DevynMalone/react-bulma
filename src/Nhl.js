import React, { Component } from 'react';

//hockey
const hockeyPlayer = {
    name: 'IDK',
    team: 'BlackHawks'
  }
  
  const hockeyPayload = [
    {
      name:'Hockey Player 2',
      team: 'Team 2'
    },{
      name:'Hockey Player 3',
      team: 'Team 3'
    },{
      name:'Hockey Player 4',
      team: 'Team 4'
    },{
      name:'Hockey Player 5',
      team: 'Team 5'
    }
  ]
  
  const displayHockeyPlayers = hockeyPayload.map((player, index) => {
    return (
      <div key={index}>
        <h2>Name {player.name}</h2>
        <p>Team {player.team}</p>
      </div>
    );
  });
  

class Nhl extends Component {
    render() {
        return(
            <div>
                <h1>NHL</h1>
                <div>
                <h2>{hockeyPlayer.name}</h2>
                    <p>{hockeyPlayer.team}</p>
                </div>
                {displayHockeyPlayers}
            </div> 
        )
            
            
    }
}

export default Nhl;