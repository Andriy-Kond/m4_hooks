import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { Notify } from "notiflix/build/notiflix-notify-aio";

function ImageFinder() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const isFirstRender = useRef(true);

  useEffect(() => {
    const savedContacts = localStorage.getItem("phoneBookContacts");
    savedContacts && setContacts(JSON.parse(savedContacts));
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem("phoneBookContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = pushedContact => {
    // const name = e.currentTarget.elements.name.value;
    // const number = e.currentTarget.elements.number.value;
    const { name, number } = pushedContact;
    const newContact = { id: nanoid(), name, number };

    const isExistContact = contacts.find(contact => contact.name === name);

    isExistContact
      ? Notify.warning(`Contact ${name} already in contact book`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const removeContact = contactId =>
    setContacts(prevContacts =>
      prevContacts?.filter(contact => contact.id !== contactId),
    );

  const handleFilter = e => setFilter(e.target.value);

  const visibleContacts = contacts?.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactList
        visibleContacts={visibleContacts}
        removeContact={removeContact}
      />
    </>
  );
}

export default ImageFinder;
