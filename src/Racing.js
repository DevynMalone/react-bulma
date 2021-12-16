import React, { Component } from 'react';

//Racing
const driver = {
    name: 'Lewis Hamilton',
    team: 'Mercedes'
}

const payload = [
    {
        name: 'Driver 2',
        team: 'Team 2'
    }, 
    {
        name: 'Driver 3',
        team: 'Team 3'
    }, 
    {
        name: 'Driver 4',
        team: 'Team 4'
    }, 
    {
        name: 'Driver 5',
        team: 'Team 5'
    }
]

const displayDrivers = payload.map((driver, index) => {  //==> map through and list all in array
    return (
        <div key={index}>
            <h2>Name {driver.name}</h2>
            <p>Team {driver.team}</p>
        </div>
    );

});

class Racing extends Component {
    render() {
        return (
            <div>
                <h1>Racing</h1>
                <div>
                    <h2>{driver.name}</h2>
                    <p>{driver.team}</p>
                </div>
                {displayDrivers}
            </div>
        );
    }
}

export default Racing;