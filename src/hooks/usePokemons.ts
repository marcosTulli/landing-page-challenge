import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import queryString from 'query-string';
import { fetchPokemons, fetchPokemon } from '../utils/api';
import { queryClient } from '../App';

interface usePokemonProps {
  limit?: number;
  offset?: number;
}
const usePokemons = ({ limit = 20, offset = 20 }: usePokemonProps) => {
  const [pokemonList, setPokemonList] = React.useState<any>([]);
  const result = useQuery(['pokemons', limit, offset], () =>
    fetchPokemons({ limit, offset })
  );
  const list = result?.data?.data?.results.map((el: any) =>
    Number(el.url.split('/').slice(-2)[0])
  );

  useEffect(() => {
    const fetchPokemons = async () => {
      const result: any = await getPokemons(list);
      setPokemonList(result);
    };
    fetchPokemons();
  }, [result?.data?.data]);

  const nextQuery = queryString.parseUrl(result.data?.data?.next ?? '').query;

  return {
    data: {
      pokemons: pokemonList,
      count: result.data?.data.count,
      nextQuery,
    },
    loading: queryClient.isFetching(),
  };
};

const getPokemons = async (list: number[]) => {
  if (!list) return [];
  let result = [];
  for await (let id of list) {
    const pokemon: any = await queryClient.fetchQuery(`pokemons/${id}`, () =>
      fetchPokemon(id)
    );
    result.push(pokemon.data);
  }
  return result;
};

export const usePokemon = (id: number) =>
  useQuery(`pokemons/${id}`, () => fetchPokemon(id));

export default usePokemons;
