import React from 'react';
import classes from './PokemonIndex.module.scss';
import { Header, Footer, PokemonDisplay } from '../../components/Pokemon/Index';

const PokemonIndex = () => {
  return (
    <>
      <div>
        <Header />
        <PokemonDisplay />
        <Footer />
      </div>
    </>
  );
};

export default PokemonIndex;
