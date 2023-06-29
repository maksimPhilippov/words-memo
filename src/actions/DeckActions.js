export const ADD_WORD_TO_DECK = "ADD_WORD_TO_DECK";
export const REMOVE_WORD_FROM_DECK = "REMOVE_WORD_FROM_DECK";
export const CREATE_DECK = "CREATE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const CLEAN_WORD_FROM_DECKS = "CLEAN_WORD_FROM_DECKS";
export const SET_DECKS = "SET_DECKS";

export function createDeck(name) {
  return {
    type: CREATE_DECK,
    payload: {
      name: name,
    },
  };
}

export function removeDeck(name) {
  return {
    type: REMOVE_DECK,
    payload: {
      name: name,
    },
  };
}

export function addWordToDeck(wordId, deckName) {
  return {
    type: ADD_WORD_TO_DECK,
    payload: {
      wordId: wordId,
      deckName: deckName,
    },
  };
}

export function removeWordFromDeck(wordId, deckName) {
  return {
    type: REMOVE_WORD_FROM_DECK,
    payload: {
      wordId: wordId,
      deckName: deckName,
    },
  };
}

export function setDecks(decks) {
  return {
    type: SET_DECKS,
    payload: {
      decks: decks,
    },
  };
}

export function cleanWordFromDecks(wordId) {
  return {
    type: CLEAN_WORD_FROM_DECKS,
    payload: {
      wordId: wordId,
    },
  };
}
