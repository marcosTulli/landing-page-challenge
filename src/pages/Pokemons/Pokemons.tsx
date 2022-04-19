import { Header, Body, Footer } from "../../components/Pokemon/Index";
// import queryString from "query-string";

// import pokemonList from "./pokemonsList.json";
import usePokemons from "../../hooks/usePokemons";

function Pokemons() {
  const {
    data: { pokemons, count, nextQuery }, // eslint-disable-line
  } = usePokemons({});
  // TODO: implement pagination with nextQuery data
  return (
    <>
      <Header />
      <Body pokemons={pokemons} />
      <Footer />
    </>
  );
}

export default Pokemons;
