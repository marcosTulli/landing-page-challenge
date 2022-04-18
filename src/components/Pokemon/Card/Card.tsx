import React from 'react';
import classes from './Card.module.scss';
// import charmander from '../../../assets/charmander.png';
import { NavLink, Router, Routes, Route } from 'react-router-dom';

interface CardProps {
  pokemon: any;
}
const Card: React.FC<CardProps> = ({ pokemon }) => {
  const link = [{ name: 'pokemonId', url: '/pokemons/:id' }];
  let linkComponent = link.map((link, index) => {
    return (
      <NavLink key={index} to={link.url}>
        <button className={classes.button} onClick={() => linkComponent}>
          <div className={classes.cardContainer}>
            <img
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              className={classes.cardImage}
            />
            <p className={classes.cardText}> {pokemon.name} </p>
          </div>
        </button>
      </NavLink>
    );
  });

  return (
    <div>
      <ul>{linkComponent}</ul>
    </div>
  );
};

export default Card;
