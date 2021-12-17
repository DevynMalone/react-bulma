import React, { Component } from 'react'
import './App.css';

//Components
// import Racing from './Racing'; // imports Racing.js 
// import Basketball from './Basketball'; // imports Basketball.js 
// import Football from './Football'; // imports Football.js 
// import Baseball from './Baseball'; // imports Baseball.js
// import Nhl from './Nhl'; // imports Nhl.js
// import Cover from './Cover'; // imports Cover.js
// import Login from './Login';
import Forum from './Forum';
import Cheatsheet from './Cheatsheet';
import InstaAlbum from './InstaAlbum';
import Aside from './Aside';





//========CLASS component -> is made out of a class====\\

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Racing />
        <Basketball />
        <Football />
        <Baseball />
        <Nhl /> */}
        {/* <Cover /> */}
        {/* <Login /> */}
        {/* <Forum /> */}
        {/* <Cheatsheet /> */}
      {/* <InstaAlbum /> */}
      <Aside />
      </div>
    )
  }
}

export default App;




//========FUNCTIONAL component -> made out of a function====\\\
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }