import { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const URL = "https://pokeapi.co/api/v2/pokemon";

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setPokemon(null);

    fetch(`${URL}/${pokemonName}`)
      .then(res => {
        // Якщо буде будь-яка помилка окрім 404, то вона прокинеться до catch. А 404 маємо обробляти якщо бекенд її нормально не кидає:
        if (res.ok) {
          return res.json(); // якщо все добре, то йдемо далі у then
        }
        // інакше примусово кидаємо помилку у catch за допомогою Promise.reject:
        return Promise.reject(
          new Error(`Покемона з ім'ям ${pokemonName} не знайдено`),
        );

        // Якщо використовується async, то так само повертаємо Promise.reject і обертаємо у try-catch (якщо треба).
      })
      .then(pokemon => {
        setPokemon(pokemon);
        Notify.success(`${pokemon.name} was found`);
      })
      .catch(error => {
        setError(error);
        Notify.failure(error.message);
      })
      .finally(() => setLoading(false));
  }, [pokemonName]);

  return (
    <div>
      <h1>Pokemon Info</h1>

      {error && <p>{error.message}</p>}
      {loading && <p>Завантажую...</p>}
      {!pokemonName && <div>Введіть ім'я покемона</div>}
      {pokemon && (
        <div>
          <p>Ім'я покемона: {pokemon.name}</p>
          <p>Зображення покемона:</p>
          <img
            alt={pokemon.name}
            width={300}
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
        </div>
      )}
    </div>
  );
}

export default PokemonInfo;
