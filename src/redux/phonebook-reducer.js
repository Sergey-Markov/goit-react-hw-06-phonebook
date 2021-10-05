import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "../redux/phonebook-actions";

const contacts = createReducer([], {
  [phonebookActions.addContacts]: (state, { payload }) => {
    if (state.find((contact) => contact.name === payload.name)) {
      alert(`${payload.name} is already created!`);
      return state;
    }
    return [...state, payload];
  },
  [phonebookActions.deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [phonebookActions.onChangeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

// const contacts = (state = initialContactsState, { type, payload }) => {
//   switch (type) {
//     case phonebookActionsTypes.ADD:
//       if (state.find((contact) => contact.name === payload.name)) {
//         alert(`${payload.name} is already created!`);
//         return state;
//       }
//       return [...state, payload];

//     case phonebookActionsTypes.DELETE:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case phonebookActionsTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const initialContactsState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
