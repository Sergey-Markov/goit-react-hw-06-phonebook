import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./phonebook-reducer";

const rootReducer = combineReducers({
  phonebook: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
