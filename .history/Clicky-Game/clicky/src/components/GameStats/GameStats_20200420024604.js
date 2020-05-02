import React, { Component } from 'react';
import './GameStats.css';

// display the game stats
const GameStats = props => (
    <div className="game-stats">
    <div class="game-scores">
      <p>
        Current Score: 0 | Top Score: 0
      </p>
    </div>
    <div class="game-message">
      <p>
        Click an image to start
      </p>
    </div>
  </div>

)