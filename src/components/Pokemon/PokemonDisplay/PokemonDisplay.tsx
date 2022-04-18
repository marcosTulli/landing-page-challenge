import React from 'react';
import classes from './PokemonDisplay.module.scss';
import charmander from '../../../assets/charmander.png';

interface PokemonProps {
  pokemon: any;
}
// [
//     {
//         "item": {
//             "name": "sharp-beak",

const PokemonDisplay = ({ pokemon }: PokemonProps) => {
  console.log(' pokemon', pokemon);
  return (
    <div className={classes.container}>
      <div className={classes.picture}>
        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      </div>
      <div className={classes.infoContainer}>
        <h1>Name</h1>
        <span className={classes.name}>{pokemon.name}</span>
        <h2>Abilities</h2>
        <span className={classes.description}>
          {pokemon.abilities.map((x: any) => {
            return <div>{x.ability.name}</div>;
          })}
        </span>
        <h2>Weight</h2>
        <span className={classes.description}>{pokemon.weight}</span>
        <h2>Held Items</h2>
        <span className={classes.description}>
          {pokemon.held_items.map((x: any) => {
            return x.item.name ? <div>{x.item.name}</div> : <div> None</div>;
          })}
        </span>
      </div>
    </div>
  );
};

export default PokemonDisplay;
