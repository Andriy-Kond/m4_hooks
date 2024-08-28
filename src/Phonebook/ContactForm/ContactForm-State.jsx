import { useState } from "react";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleContact = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        return setName(value);

      case "number":
        return setNumber(value);

      default:
        throw new Error(`Cannot to process the case of ${name}`);
    }
  };

  const clearState = () => {
    setName("");
    setNumber("");
  };

  const handleAddContact = e => {
    e.preventDefault();

    const newContact = { name, number };
    addContact(newContact);

    // e.currentTarget.reset(); // - не спрацьовує на контрольованих елементах форми
    clearState();
  };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleContact}
        />
      </label>

      <label>
        Telephone
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleContact}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
