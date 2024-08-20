import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [message, setMessage] = useState("");

  const handleChange = e => setMessage(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    onAddTodo(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={handleChange} />
      <button type="submit">Add task</button>
    </form>
  );
}

export default AddTodo;
