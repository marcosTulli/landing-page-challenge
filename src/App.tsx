import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'normalize.css';
import './App.scss';
import { Landing } from './pages/Landing';
import { Pokemons } from './pages/Pokemons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonId } from './pages/Pokemon';
import Buttons from './components/Button/Buttondisplay';

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
              <Route
                path='https://twitter.com/wolox'
                element={() => {
                  window.location.href = 'https://localhost:3000';
                  return null;
                }}
              />
            </Routes>
          </Router>
        </QueryClientProvider>
      </React.Fragment>
    </>
    // <div>
    //   <Buttons />
    // </div>
  );
};

export default App;
