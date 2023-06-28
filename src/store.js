import { combineReducers, legacy_createStore } from "redux";
import { DictionaryReducer } from "./reducers/DictionaryReducer";
import { DeckReducer } from "./reducers/DeckReducer";

export let store = legacy_createStore(
  combineReducers({
    dictionary: DictionaryReducer,
    decks: DeckReducer,
  })
);
