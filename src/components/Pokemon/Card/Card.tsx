import React from 'react';
import classes from './Card.module.scss';
import { Button } from '../../Button';
// import charmander from '../../../assets/charmander.png';

interface CardProps {
  pokemon: any;
}
const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <button className={classes.button} onClick={() => console.log('chauchas')}>
      <div className={classes.cardContainer}>
        <img
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
          className={classes.cardImage}
        />
        <p className={classes.cardText}> {pokemon.name} </p>
      </div>
    </button>
  );
};

export default Card;
