
import React from 'react';
import "./GameCard.css";

const GameCard = props => (
	<div className="cards col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2" 
	  key={props.id}
    onClick={() => 
      props.handleClick(props.id, props.clicked)}>
    <img 
      id={props.name}
		  src={props.image}
		  alt={props.name}
		/>
	</div>
);

export default GameCard;