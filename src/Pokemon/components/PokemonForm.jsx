import React, { useRef, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  timeout: 1500,
  cssAnimationStyle: "from-right",
});

function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState("");
  const pokemonInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    if (!pokemonName.trim()) {
      Notify.warning("Enter some pokemon name!");
      pokemonInput?.current.focus();
      return;
    }

    onSubmit(pokemonName.trim());
    setPokemonName("");
    pokemonInput?.current.focus();
  };

  const handleNameChange = e => {
    setPokemonName(e.target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
        autoFocus
        ref={pokemonInput}
      />
      <button
        type="submit"
        // disabled={!pokemonName.trim()}
        style={{ padding: 5, marginLeft: 8 }}>
        <TfiSearch style={{ marginRight: 8 }} />
        Пошук
      </button>
    </form>
  );
}

export default PokemonForm;
