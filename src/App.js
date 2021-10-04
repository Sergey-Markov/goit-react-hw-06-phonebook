// import { useEffect, useState } from "react";
// import shortid from "shortid";
import s from "./App.module.css";
import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";

function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const currentContacts = localStorage.getItem("contacts");
  //   const parsedCurrentContacts = JSON.parse(currentContacts);

  //   if (parsedCurrentContacts) {
  //     setContacts(parsedCurrentContacts);
  //   }
  // }, []);

  // useEffect(
  //   (prevState) => {
  //     if (prevState !== contacts) {
  //       localStorage.setItem("contacts", JSON.stringify(contacts));
  //     }
  //   },
  //   [contacts]
  // );

  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      {/* <Form onSubmit={addToDataContacts} /> */}
      <Form />

      <h2 className={s.title}>Contacts:</h2>
      <Filter />

      {/* <Filter filter={filter} onChange={onFilter} /> */}
      {/* <Contacts contacts={filteredContact} onClick={deleteContact} /> */}
      <Contacts />
    </div>
  );
}

export default App;
