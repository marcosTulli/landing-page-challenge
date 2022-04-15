import React from 'react';
import { Header, Body, Footer } from '../../components/Pokemon/Index';
import { Pokemons } from '../Pokemons';

const PokemonIndex = () => {
  return (
    <>
      <div>
        <Header />
        <Body pokemons={Pokemons} />
        <Footer />
      </div>
    </>
  );
};

export default PokemonIndex;
