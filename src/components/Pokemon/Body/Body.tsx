import React from 'react';
import classes from './Body.module.scss';
import { Card } from '../Card';
import { Pagination } from '../Pagination';
import { Input } from '../../Input';

interface BodyProps {
  className?: string;
  pokemons: any;
}

const Body: React.FC<BodyProps> = ({ pokemons }) => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <Input />
      </div>
      <div className={classes.cardDisplay}>
        {pokemons.map((pokemon: any) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Body;
