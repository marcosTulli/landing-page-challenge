/* istanbul ignore file */
import axios from 'axios';
import env from '../config';

const API = axios.create({
  baseURL: env.baseUrl,
});

const fetchPokemons = ({ limit, offset }: { limit: number; offset: number }) => API.get('/pokemon', { params: { limit, offset } });
const fetchPokemon = (id: number) => API.get(`/pokemon/${id}`);

export { API as default, fetchPokemons, fetchPokemon };
