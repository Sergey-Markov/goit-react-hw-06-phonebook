import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContacts = createAction("contacts / add", (newContact) => {
  return {
    payload: {
      id: shortid.generate(),
      ...newContact,
    },
  };
});
const deleteContacts = createAction("contacts / delete");
const onChangeFilter = createAction("contacts / changeFilter");

// eslint-disable-next-line
export default { addContacts, deleteContacts, onChangeFilter };

// const addContacts = (newContact) => ({
//   type: phonebookActionsTypes.ADD,
// payload: {
//   id: shortid.generate(),
//   ...newContact,
// },
// });

// const onChangeFilter = (value) => ({
//   type: phonebookActionsTypes.CHANGE_FILTER,
//   payload: value,
// });

// const deleteContacts = (contactId) => ({
//   type: phonebookActionsTypes.DELETE,
//   payload: contactId,
// });
