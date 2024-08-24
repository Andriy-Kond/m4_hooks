import { useEffect, useState } from "react";

// Хук для позбуття повторів
const useLocalStorage = (localStorageKey, defaultValue) => {
  const [state, setState] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(localStorageKey)) ?? defaultValue
    );
  });

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [localStorageKey, state]);

  return [state, setState];
};

export { useLocalStorage };

// Виклик:
// const [password, setPassword] = useLocalStorage("signupFormPassword", "");
// const [email, setEmail] = useLocalStorage("signupFormEmail", "");
