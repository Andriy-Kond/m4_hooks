import { useState } from "react";
import { Form, Label } from "./SignupForm.styled";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

export default SignupForm;
