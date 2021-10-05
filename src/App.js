import s from "./App.module.css";
import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts:</h2>
      <Filter />
      <Contacts />
    </div>
  );
}

export default App;
