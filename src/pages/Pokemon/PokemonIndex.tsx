import React from 'react';
import classes from './PokemonIndex.module.scss';
import { Header, Footer, PokemonDisplay } from '../../components/Pokemon/Index';
import { usePokemon } from '../../hooks/usePokemons';
import { useParams } from 'react-router-dom';

const PokemonIndex = () => {
  const { id } = useParams();
  const { data, isLoading } = usePokemon(Number(id));

  const pokemon = data?.data;

  if (!pokemon && isLoading) return <h1>loading..</h1>;
  return (
    <>
      <div>
        <Header />
        <PokemonDisplay pokemon={pokemon} />
        <Footer />
      </div>
    </>
  );
};

export default PokemonIndex;
