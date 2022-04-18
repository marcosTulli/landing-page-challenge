import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'normalize.css';
import './App.scss';
import { Landing } from './pages/Landing';
import { Pokemons } from './pages/Pokemons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonId } from './pages/Pokemon';

export const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <React.Fragment>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/pokemons' element={<Pokemons />} />
              <Route path='/pokemons/:id' element={<PokemonId />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </React.Fragment>
    </>
    // <Apitest />
  );
};

export default App;
