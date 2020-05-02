import React, { Component } from 'react';
import GameCard from '../GameCard';
import cards from "../../cards.json";
import GameStats from '..GameStats'
import "./MainGameContainer.css";

class GameBoard extends Component {
    state = {
        cards,
        
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

            })
        }
    }




}