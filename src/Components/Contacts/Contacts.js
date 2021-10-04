import s from "../Contacts/Contacts.module.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook-actions";

function Contacts({ contacts, onClick }) {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onClick(id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { filter, contacts } = state.phonebook;
  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const filteredContact = filteredContacts();

  return {
    contacts: filteredContact,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(phonebookActions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
