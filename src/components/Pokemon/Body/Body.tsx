import React from "react";
import { Pokemon } from "../../../types";
import { Card } from "../Card";
import { Pagination } from "../Pagination";
import { Input } from "../../Input";
import classes from "./Body.module.scss";

interface BodyProps {
  pokemons: Pokemon[];
}

const Body: React.FC<BodyProps> = ({ pokemons }) => (
  <div className={classes.container}>
    <div className={classes.inputContainer}>
      <Input pokemons={pokemons} />
    </div>
    <div className={classes.cardDisplay}>
      {pokemons.map((pokemon: Pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
    <Pagination />
  </div>
);
export default Body;
