import { Form, Label } from "./SignupForm.styled";
import { useLocalStorage } from "./hooks/useLocalStorage";

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
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        throw new Error(`Unsupported name ${name}`);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(email, password);
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={submitForm} autoComplete="on">
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
