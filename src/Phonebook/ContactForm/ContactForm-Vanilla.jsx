const ContactForm = ({ addContact }) => {
  const handleAddContact = e => {
    e.preventDefault();

    const {
      elements: { name, number },
    } = e.target;

    const dataObj = {
      name: name.value,
      number: number.value,
    };

    addContact(dataObj);
    name.value = "";
    number.value = "";
  };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>

      <label>
        Telephone
        <input type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
