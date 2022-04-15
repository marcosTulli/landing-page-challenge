import React from "react";
import classes from "./Card.module.scss";
// import charmander from '../../../assets/charmander.png';

interface CardProps {
  pokemon: any;
}
const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <div className={classes.cardContainer}>
      <img
        src={pokemon.sprites.front_shiny}
        alt={pokemon.name}
        className={classes.cardImage}
      />
      <p className={classes.cardText}> {pokemon.name} </p>
    </div>
  );
};

export default Card;
