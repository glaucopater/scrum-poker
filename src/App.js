import React from 'react';
import './App.css';
import Board from "./containers/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">Scrum Poker</header>
      <Board values={['0', '½', '1', '2', '3', '5', '8', '13', '20', '40', '100']}/> 
    </div>
  );
}

export default App;
