import React, { Component } from 'react';
import GameCard from '../GameCard';
import images from "../../cards.json";
import "./MainGameContainer.css";

class GameBoard extends Component {
    state = {
        images,
        message: ""
    };

    handleClick = (id, clicked) => {
        const cardOrder = this.state.images;

        if (clicked) {
            
        }
    }




}