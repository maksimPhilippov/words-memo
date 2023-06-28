import { combineReducers, legacy_createStore } from "redux";
import { DictionaryReducer, setDictionary } from "./reducers/DictionaryReducer";
import { DeckReducer, setDecks } from "./reducers/DeckReducer";
import { GameReducer, setGame } from "./reducers/GameReducer";

export const store = legacy_createStore(
  combineReducers({
    dictionary: DictionaryReducer,
    decks: DeckReducer,
    game: GameReducer,
  })
);

function initStore() {
  let preventSave = window.localStorage.getItem("save");
  if (preventSave !== null) {
    preventSave = JSON.parse(preventSave);
    store.dispatch(
      setDecks(preventSave.decks === undefined ? [] : preventSave.decks)
    );
    store.dispatch(setDictionary(preventSave.dictionary));
    store.dispatch(setGame(preventSave.game));
    console.log(store.getState());
  }

  store.subscribe(() => {
    const save = JSON.stringify(store.getState());
    window.localStorage.setItem("save", save);
  });
}

initStore();
