// * use Formik
import { Formik, Form, ErrorMessage } from "formik";
import { object, string } from "yup";
import { Input } from "./LoginForm.styled";
import { useState } from "react";

const LoginForm = () => {
  const initialValues = { login: "", password: "", color: "" };

  const schema = object({
    login: string().required(),
    password: string().min(6).max(16).required(),
  });

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit >> actions:::", actions);
    console.log("handleSubmit >> values:::", values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}>
      <Form>
        <label>
          Login
          <Input type="text" name="login" placeholder="Enter your login here" />
          <ErrorMessage name="login" component="div" />
        </label>

        <label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter your password here"
            autoComplete="new-password"
          />
          <ErrorMessage name="password" component="div" />
        </label>

        <Input as="select" name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Input>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

const LoginFormStandard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    const { name, value } = e.current;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { login, password } = e.target.elements;
    console.log(login.value, password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login
        <input type="text" name="login" value={email} onChange={handleChange} />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          autoComplete="new-password"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
