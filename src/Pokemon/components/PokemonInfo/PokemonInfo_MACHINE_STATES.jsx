import React, { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import PokemonErrorView from "../PokemonErrorView";
import PokemonDataView from "../PokemonDataView";
import PokemonPendingView from "../PokemonPendingView/PokemonPendingView";
import { fetchPokemon } from "../../js/fetchPokemon";

const URL = "https://pokeapi.co/api/v2/pokemon";

const machineStatus = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function PokemonInfo({ pokemonName, setPokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(machineStatus.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus(machineStatus.PENDING);

    setTimeout(async () => {
      try {
        const pokemon = await fetchPokemon(pokemonName, URL);
        setPokemon(pokemon);
        setStatus(machineStatus.RESOLVED);
        Notify.success(`${pokemon.name} was found`);
      } catch (error) {
        setError(error);
        setStatus(machineStatus.REJECTED);
        Notify.failure(error.message);
      } finally {
        // Скидаю, бо інакше не працює новий запит з тим самим ім'ям, бо в стейті зберігається те саме ім'я, тобто він "не змінюється", і новий запит і перерендер не відбувається.
        setPokemonName("");
      }
    }, 500);
  }, [pokemonName, setPokemonName]);

  if (status === machineStatus.IDLE) {
    return <div>Введіть ім'я покемона</div>;
  }

  if (status === machineStatus.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === machineStatus.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === machineStatus.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

export default PokemonInfo;
