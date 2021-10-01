import { useEffect, useState } from "react";
import shortid from "shortid";
import s from "./App.module.css";
import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const currentContacts = localStorage.getItem("contacts");
    const parsedCurrentContacts = JSON.parse(currentContacts);

    if (parsedCurrentContacts) {
      setContacts(parsedCurrentContacts);
    }
  }, []);

  useEffect(
    (prevState) => {
      if (prevState !== contacts) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      }
    },
    [contacts]
  );

  const addToDataContacts = (data) => {
    if (contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already created!`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      ...data,
    };
    setContacts((prevState) => [...prevState, newContact]);
  };
  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const onFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContact = filteredContacts();
  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <Form onSubmit={addToDataContacts} />
      <h2 className={s.title}>Contacts:</h2>
      <Filter filter={filter} onChange={onFilter} />
      <Contacts contacts={filteredContact} onClick={deleteContact} />
    </div>
  );
}

export default App;
