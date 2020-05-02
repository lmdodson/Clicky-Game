import React, { Component } from 'react';
import GameCard from '../GameCard';
import cards from "../../cards.json";
import GameStats from '..GameStats'
import "./MainGameContainer.css";

class GameBoard extends Component {
    state = {
        cards,
        message: "Click a card to begin",
        score: 0,
        highScore: 0
    };

    // when a card is clicked on
    handleClick = (id, clicked) => {
        const cardOrder = this.state.cards;

        // if the card has already been clicked
        if (clicked) {
            cardOrder.forEach((card, index) => {
                cardOrder[index].clicked = false;
            });
            return this.setState ({
                card: cardOrder.sort(() => Math.random - 0.5),
                message: "You guessed incorrectly!",
                score: 0
            })
        }
        else {
            cardOrder.forEach((card, index) => {
                if(id === card.id) {
                    cardOrder[index].clicked = true
                }
            });

            var { topScore, score } = this.state;
            var newScore = score + 1;
            var newHighScore = newScore > highScore ? newScore : highScore;

            return this.setState({
                card: cardOrder.sort(() => Math.random() - 0.5),
                message: "You guessed correctly",
                score: newScore,
                highScore: newHighScore
            })
        }
    };

    render () {
        return (
            // game stats
                <div className="game-stats">
                    <div className="game-scores">
                        <p>
                            Current Score: {this.state.Score} | High Score: {this.state.highScore}
                        </p>
                    </div>
                    <div className="game-message">
                        <p> {this.state.score} </p>
                    </div>
                </div>
            // 
            )
    }
}