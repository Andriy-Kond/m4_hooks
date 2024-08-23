import { useReducer } from "react";
import { nanoid } from "nanoid";

const initialState = {
  email: "",
  password: "",
  age: "child",
  agreeProcessingData: false,
  agreeLicense: "",
  cat: false,
  dog: false,
  turtle: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, [action.payload.name]: action.payload.value };
    case "AGREE":
      return { ...state, agreeProcessingData: action.payload };
    case "SET_CHECKBOX":
      return { ...state, [action.payload.name]: action.payload.checked };
    case "RESET_STATE":
      return initialState;

    default:
      return state;
  }
}

function RegisterForm({ handleSubmit }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    dispatch({ type: "INPUT_CHANGE", payload: { name, value } });
  };

  const handleAgree = e => {
    dispatch({ type: "AGREE", payload: e.currentTarget.checked });
  };

  const handleChkBoxes = e => {
    const { name, checked } = e.currentTarget;
    dispatch({ type: "SET_CHECKBOX", payload: { name, checked } });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit(state);
    resetForm();
  };

  const resetForm = () => {
    dispatch({ type: "RESET_STATE" });
  };

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const checkAgree = nanoid();

  const catIdChkBx = nanoid();
  const dogIdChkBx = nanoid();
  const turtleIdChkBx = nanoid();

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor={emailInputId}>Email address</label>
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        id={emailInputId}
      />

      <label htmlFor={passwordInputId}>Password</label>
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
        id={passwordInputId}
      />

      <label htmlFor={checkAgree}>Згода на обробку даних</label>
      <input
        id={checkAgree}
        type="checkbox"
        name="agreeProcessingData"
        onChange={handleAgree}
        checked={state.agreeProcessingData}
      />

      {/* Checkboxes */}
      <div>
        <label htmlFor={catIdChkBx}>Кіт</label>
        <input
          id={catIdChkBx}
          type="checkbox"
          name="cat"
          onChange={handleChkBoxes}
          checked={state.cat}
        />

        <label htmlFor={dogIdChkBx}>Пес</label>
        <input
          id={dogIdChkBx}
          type="checkbox"
          name="dog"
          onChange={handleChkBoxes}
          checked={state.dog}
        />

        <label htmlFor={turtleIdChkBx}>Черепаха</label>
        <input
          id={turtleIdChkBx}
          type="checkbox"
          name="turtle"
          onChange={handleChkBoxes}
          checked={state.turtle}
        />
      </div>

      {/* Radio buttons */}
      <div>
        <p>Вкажіть свій вік:</p>
        <label>
          <input
            type="radio"
            name="age"
            value="child"
            onChange={handleChange}
            checked={state.age === "child"}
          />
          Child
        </label>
        <label>
          <input
            type="radio"
            name="age"
            value="teenager"
            onChange={handleChange}
            checked={state.age === "teenager"}
          />
          Teenager
        </label>
        <label>
          <input
            type="radio"
            name="age"
            value="adult"
            onChange={handleChange}
            checked={state.age === "adult"}
          />
          Adult
        </label>
        <label>
          <input
            type="radio"
            name="age"
            value="senior"
            onChange={handleChange}
            checked={state.age === "senior"}
          />
          Senior
        </label>
      </div>

      <button type="submit" disabled={!state.agreeProcessingData}>
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
