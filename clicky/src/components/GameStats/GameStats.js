import React, { Component } from 'react';
import './GameStats.css';

// display the game stats
const GameStats = props => (
    <div className="game-stats">
        <div class="game-scores">
            <p>
                Current Score: {props.currentScore} | Top Score: {props.topScore}
            </p>
        </div>
        <div class="game-message">
            <p>
                {props.message}
            </p>
        </div>
    </div>
)

export default GameStats;