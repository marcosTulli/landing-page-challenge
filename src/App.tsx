import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "normalize.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Pokemons } from "./pages/Pokemons";
import { PokemonId } from "./pages/Pokemon";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:id" element={<PokemonId />} />
          <Route
            path="https://twitter.com/wolox"
            element={() => {
              window.location.href = "https://localhost:3000";
              return null;
            }}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
