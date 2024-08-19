async function fetchPokemon(name, url) {
  const res = await fetch(`${url}/${name}`);
  // Якщо буде будь-яка помилка окрім 404, то вона прокинеться до catch. А 404 маємо обробляти якщо бекенд її нормально не кидає:
  if (res.ok) {
    return res.json(); // якщо все добре, то йдемо далі у then (там, де викликається)
  }

  // інакше примусово кидаємо помилку у catch за допомогою Promise.reject:
  return await Promise.reject(
    new Error(`Покемона з ім'ям ${name} не знайдено`),
  );
}

export { fetchPokemon };
