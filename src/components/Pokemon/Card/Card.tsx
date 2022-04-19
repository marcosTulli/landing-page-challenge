import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pokemon } from '../../../types';
import classes from './Card.module.scss';

interface CardProps {
  pokemon: Pokemon;
}
const Card: React.FC<CardProps> = ({ pokemon }) => (
  <NavLink className={classes.navLink} to={`/pokemons/${pokemon?.id}`}>
    <div className={classes.cardContainer}>
      <img
        src={pokemon.sprites.front_shiny}
        alt={pokemon.name}
        className={classes.cardImage}
      />
      <p className={classes.cardText}>
        {' '}
        {pokemon.name}
        {' '}
      </p>
    </div>
  </NavLink>
);

export default Card;
