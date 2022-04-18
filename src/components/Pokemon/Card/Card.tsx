import React from 'react';
import classes from './Card.module.scss';
// import charmander from '../../../assets/charmander.png';
import { NavLink, Router, Routes, Route } from 'react-router-dom';
interface CardProps {
  pokemon: any;
}
const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <NavLink className={classes.navLink} to={`/pokemons/${pokemon?.id}`}>
      <div className={classes.cardContainer}>
        <img
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
          className={classes.cardImage}
        />
        <p className={classes.cardText}> {pokemon.name} </p>
      </div>
    </NavLink>
  );
};

export default Card;
