import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  timeout: 1500,
  cssAnimationStyle: "from-right",
});

function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!pokemonName.trim()) {
      Notify.warning("Enter some pokemon name!");
      return;
    }

    onSubmit(pokemonName.trim());
    setPokemonName("");
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
