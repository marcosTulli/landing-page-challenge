import React from 'react';
import { Header, Body, Footer } from '../../components/Pokemon/Index';
import pokemonList from './pokemonsList.json';

console.log('pokemonList', pokemonList);

const PokemonIndex = () => {
  return (
    <>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default PokemonIndex;
