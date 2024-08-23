import { useEffect, useState } from "react";
import { Form, Label } from "./SignupForm.styled";

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

function SignupForm() {
  // const [email, setEmail] = useState(() => {
  //   const savedEmail = window.localStorage.getItem("signupFormEmail");
  //   return savedEmail ? JSON.parse(savedEmail) : "";
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("signupFormEmail", JSON.stringify(email));
  // }, [email]);
  const [email, setEmail] = useLocalStorage("signupFormEmail", "");

  // const [password, setPassword] = useState(() => {
  //   const savedPassword = window.localStorage.getItem("signupFormPassword");
  //   return savedPassword ? JSON.parse(savedPassword) : "";
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("signupFormPassword", JSON.stringify(password));
  // }, [password]);
  const [password, setPassword] = useLocalStorage("signupFormPassword", "");

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const submitForm = () => {};

  return (
    <Form autoComplete="off">
      <Label>
        <span>Пошта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </Label>

      <Label>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </Label>

      <button type="submit" handleSubmit={submitForm}>
        Зареєструватись
      </button>
    </Form>
  );
}

export default SignupForm;
