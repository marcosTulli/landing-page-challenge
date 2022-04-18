import React from 'react';
import classes from './PokemonDisplay.module.scss';
import charmander from '../../../assets/charmander.png';

// interface DisplayProps {
//   className?: string;
//   pokemons: any;
// }
// : React.FC<DisplayProps>

const PokemonDisplay = () => {
  return (
    <div className={classes.container}>
      <div className={classes.picture}>
        <img src={charmander} alt='pokemon' />
      </div>
      <span className={classes.name}>Hello</span>
      <div className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        molestias est odit excepturi aliquam animi recusandae, saepe voluptatem
        beatae fuga. Quia tenetur sint rerum ex, perspiciatis accusamus autem
        quo totam!
      </div>
    </div>
  );
};

export default PokemonDisplay;
