import { combineReducers, legacy_createStore } from "redux";
import { DictionaryReducer } from "./reducers/DictionaryReducer";
import { DeckReducer } from "./reducers/DeckReducer";
import { GameReducer } from "./reducers/GameReducer";
import { setDecks } from "./actions/DeckActions";
import { setDictionary } from "./actions/DictionaryActions";
import { setGame } from "./actions/GameActions";

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
    let decks = preventSave.decks.map((deck) => {
      return { name: deck.name, wordIds: new Set(deck.wordIds) };
    });
    store.dispatch(setDecks(decks));
    store.dispatch(setDictionary(preventSave.dictionary));
    store.dispatch(setGame(preventSave.game));
  }

  Set.prototype.toJSON = function () {
    return Array.from(this.values());
  };
  store.subscribe(() => {
    const save = JSON.stringify(store.getState());

    window.localStorage.setItem("save", save);
  });
}

initStore();
