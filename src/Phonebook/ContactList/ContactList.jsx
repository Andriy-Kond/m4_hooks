function ContactList({ visibleContacts, removeContact }) {
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => removeContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
