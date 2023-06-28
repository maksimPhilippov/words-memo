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
  let newState, deckIndex;

  switch (action.type) {
    case CREATE_DECK:
      newState = state.slice(0);
      if (
        newState.find((element) => element.name == action.payload.name) !==
        undefined
      ) {
        return state;
      }
      newState.push({ name: action.payload.name, wordIds: [] });
      return newState;

    case REMOVE_DECK:
      newState = state.filter(
        (element) => element.name === action.payload.name
      );
      return newState;

    case ADD_WORD_TO_DECK:
      deckIndex = state.findIndex(
        (element) => element.name === action.payload.name
      );
      if (deckIndex !== -1) {
        newState = state.filter(
          (element) => element.name !== action.payload.deckName
        );
        newState.push({
          name: state[deckIndex].name,
          wordIds: state[deckIndex].wordIds
            .slice(0)
            .push(action.payload.wordId),
        });
      }
    case REMOVE_WORD_FROM_DECK:
      deckIndex = state.findIndex(
        (element) => element.name === action.payload.name
      );
      if (deckIndex !== -1) {
        newState = state.filter(
          (element) => element.name !== action.payload.deckName
        );
        newState.push({
          name: state[deckIndex].name,
          wordIds: state[deckIndex].wordIds.filter(
            (id) => id !== action.payload.wordId
          ),
        });
      }

    default:
      return state;
  }
}
