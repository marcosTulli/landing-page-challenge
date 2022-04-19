import React from 'react';
import classes from './PokemonIndex.module.scss';
import { Header, Footer, PokemonDisplay } from '../../components/Pokemon/Index';
import { usePokemon } from '../../hooks/usePokemons';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

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
        <div className={classes.button}>
          <Link to='/pokemons'>
            <Button variant='primary'>Back to search</Button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PokemonIndex;
