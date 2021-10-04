import phonebookActionsTypes from "./phonebook-actions-types";
import shortid from "shortid";

const addContacts = (newContact) => ({
  type: phonebookActionsTypes.ADD,
  payload: {
    id: shortid.generate(),
    ...newContact,
  },
});

const deleteContacts = (contactId) => ({
  type: phonebookActionsTypes.DELETE,
  payload: contactId,
});

const onChangeFilter = (value) => ({
  type: phonebookActionsTypes.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line
export default { addContacts, deleteContacts, onChangeFilter };
