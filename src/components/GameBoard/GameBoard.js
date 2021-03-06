import React, { Component } from 'react';
import GameCard from '../GameCard';
import cards from "../../cards.json";
import "./GameBoard.css";

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

            var { highScore, score } = this.state;
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
            <div className="container-fluid game-board">
                <div className="game-stats">
                    <div className="game-scores">
                        <p>
                            Current Score: {this.state.score} | High Score: {this.state.highScore}
                        </p>
                    </div>
                    <div className="game-message">
                        <p> {this.state.message} </p>
                    </div>
                </div>


            <div className="row"> 
                {this.state.cards.map (card => (
                    <GameCard
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        clicked={card.clicked}
                        image={card.image}
                        handleClick={this.handleClick}
                        />
                ))}
            </div>
            </div>

        );
    };
};

export default GameBoard;