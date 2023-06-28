import { combineReducers, legacy_createStore } from "redux";
import { DictionaryReducer } from "./reducers/DictionaryReducer";
import { DeckReducer } from "./reducers/DeckReducer";
import { GameReducer } from "./reducers/GameReducer";

export let store = legacy_createStore(
  combineReducers({
    dictionary: DictionaryReducer,
    decks: DeckReducer,
    game: GameReducer,
  })
);
