const ADD_WORD_TO_DECK = "ADD_WORD_TO_DECK";
const REMOVE_WORD_FROM_DECK = "REMOVE_WORD_FROM_DECK";
const CREATE_DECK = "CREATE_DECK";
const REMOVE_DECK = "REMOVE_DECK";

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

export function DeckReducer(state = [], action) {
  let newState, deckIndex, newWordIds;

  switch (action.type) {
    case CREATE_DECK:
      newState = state.slice(0);
      if (
        newState.find((element) => element.name == action.payload.name) !==
        undefined
      ) {
        return state;
      }
      newWordIds = new Set();
      newState.push({ name: action.payload.name, wordIds: newWordIds });
      return newState;

    case REMOVE_DECK:
      newState = state.filter(
        (element) => element.name === action.payload.name
      );
      return newState;

    case ADD_WORD_TO_DECK:
      deckIndex = state.findIndex(
        (element) => element.name === action.payload.deckName
      );
      if (deckIndex !== -1) {
        newState = state.filter(
          (element) => element.name !== action.payload.deckName
        );

        newWordIds = new Set(state[deckIndex].wordIds);
        newWordIds.add(action.payload.wordId);

        newState.push({
          name: state[deckIndex].name,
          wordIds: newWordIds,
        });
        return newState;
      }
      return state;

    case REMOVE_WORD_FROM_DECK:
      deckIndex = state.findIndex(
        (element) => element.name === action.payload.deckName
      );
      if (deckIndex !== -1) {
        newState = state.filter(
          (element) => element.name !== action.payload.deckName
        );
        newWordIds = new Set(state[deckIndex].wordIds);
        newWordIds.delete(action.payload.wordId);

        newState.push({
          name: state[deckIndex].name,
          wordIds: newWordIds,
        });
        return newState;
      }
      return state;

    default:
      return state;
  }
}
