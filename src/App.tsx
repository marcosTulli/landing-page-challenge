import React from 'react';
import 'normalize.css';
import './App.scss';
import { Landing } from './pages/Landing';
import { PokemonSearch } from './pages/Pokemon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <React.Fragment>
        <Router>
          <div>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/Pokemons' element={<PokemonSearch />} />
            </Routes>
          </div>
        </Router>
      </React.Fragment>
    </>
  );
};

export default App;
