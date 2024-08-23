import useLocalStorage from "../../hooks/useLocalStorage";
import { Form, Label } from "./SignupForm.styled";

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");

  const handleChange = event => {
    const { name, value } = event.target;

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

      <button type="submit">Зареєструватись</button>
    </Form>
  );
}
