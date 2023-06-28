const CHANGE_WORD = "CHANGE_WORD";
const CHANGE_DECK = "CHANGE_DECK";

export function changeWord(wordId) {
  return {
    type: CHANGE_WORD,
    payload: {
      wordId: wordId,
    },
  };
}

export function changePlayingDeck(name) {
  return {
    type: CHANGE_DECK,
    payload: {
      name: name,
    },
  };
}

export function GameReducer(
  state = { currentDeck: "", currentWord: -1 },
  action
) {
  switch (action.type) {
    case CHANGE_DECK:
      return {
        currentDeck: action.payload.name,
        currentWord: state.currentWord,
      };

    case CHANGE_WORD:
      return {
        currentDeck: state.currentDeck,
        currentWord: action.payload.wordId,
      };

    default:
      return state;
  }
}
