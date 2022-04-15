import React from 'react';
import { Header, Body, Footer } from '../../components/Pokemon/Index';
// import queryString from "query-string";

// import pokemonList from "./pokemonsList.json";
import usePokemons from '../../hooks/usePokemons';

const Pokemons = () => {
  const {
    data: { pokemons, count, nextQuery },
  } = usePokemons({});

  return (
    <>
      <Header />
      <Body pokemons={pokemons} />
      <Footer />
    </>
  );
};

export default Pokemons;
