import {
  ADD_WORD_TO_DECK,
  CLEAN_WORD_FROM_DECKS,
  CREATE_DECK,
  REMOVE_DECK,
  REMOVE_WORD_FROM_DECK,
  SET_DECKS,
} from "../actions/DeckActions";

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
        (element) => element.name !== action.payload.name
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

    case CLEAN_WORD_FROM_DECKS:
      newState = state.map((deck) => {
        if (deck.wordIds.has(action.wordId)) {
          deck.wordIds.delete(action.wordId);
        }
        return deck;
      });
      return newState;

    case SET_DECKS:
      return action.payload.decks;
    default:
      return state;
  }
}
