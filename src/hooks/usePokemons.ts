import React, { useEffect } from "react";
import { useQuery } from "react-query";
import queryString from "query-string";
import { Pokemon } from "../types";
import { fetchPokemons, fetchPokemon } from "../utils/api";
import { queryClient } from "../App";
/* eslint-disable */
interface usePokemonProps {
  limit?: number;
  offset?: number;
}
type usePokemonsReturn = {
  data: {
    pokemons: Pokemon[];
    count: number;
    nextQuery: { limit?: string; offset?: string };
  };
  loading: boolean;
};
const usePokemons = ({
  limit = 20,
  offset = 20,
}: usePokemonProps): usePokemonsReturn => {
  const [pokemonList, setPokemonList] = React.useState<any>([]);
  const result = useQuery(["pokemons", limit, offset], () =>
    fetchPokemons({ limit, offset })
  );
  const list = result?.data?.data?.results.map((el: any) =>
    Number(el.url.split("/").slice(-2)[0])
  );

  useEffect(() => {
    const updatePokemons = async () => {
      const newPokemonList: any = await getPokemons(list);
      setPokemonList(newPokemonList);
    };
    updatePokemons();
  }, [result?.data?.data]);

  const nextQuery = queryString.parseUrl(result.data?.data?.next ?? "")?.query;

  return {
    data: {
      pokemons: pokemonList,
      count: result.data?.data.count,
      nextQuery,
    },
    loading: Boolean(queryClient.isFetching()),
  };
};

const getPokemons = async (list: number[]): Promise<Pokemon[]> => {
  if (!list) return [];
  const result: Pokemon[] = [];

  for await (const id of list) {
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
