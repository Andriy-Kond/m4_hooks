// endpoint: "https://pokeapi.co/api/v2/pokemon/{id or name}/" (https://pokeapi.co/docs/v2#pokemon)

import { useState } from "react";

import PokemonForm from "./components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo_MACHINE_STATES";

function Pokemon() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} setPokemonName={setPokemonName} />
    </div>
  );
}

export default Pokemon;
// 093 5999617 Лип'янко Ірина Юріївна
