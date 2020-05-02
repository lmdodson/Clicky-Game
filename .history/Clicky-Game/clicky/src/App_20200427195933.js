import React from 'react';
import Jumbotron from './components/Jumbotron';
import GameBoard from './components/GameBoard';
import './App.css';
import GameCard from './components/GameCard';

const App = () => (
  <div className="container-fluid">
    <Jumbotron />
    <GameBoard />
  </div>
);

export default App;
