import React from 'react';
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="game-card col-xs-6 col-sm-6 col-md-4 col-lg-2 col-xl-2"> 
    <img alt={props.name} src={props.image} id={props.id}/>
    </div>
)

export default GameCard;