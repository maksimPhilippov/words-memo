// const CHANGE_WORD = "CHANGE_WORD";
const CHANGE_DECK = "CHANGE_DECK";
const CHANGE_GAME_MODE = "CHANGE_GAME_MODE";

// export function changeWord(wordId) {
//   return {
//     type: CHANGE_WORD,
//     payload: {
//       wordId: wordId,
//     },
//   };
// }

export function changePlayingDeck(name) {
  return {
    type: CHANGE_DECK,
    payload: {
      name: name,
    },
  };
}

export function changeGameMode(gameMode) {
  return {
    type: CHANGE_GAME_MODE,
    payload: {
      gameMode: gameMode,
    },
  };
}
export function GameReducer(
  state = { currentDeck: "chose deck", gameMode: "lite" },
  action
) {
  switch (action.type) {
    case CHANGE_DECK:
      return {
        ...state,
        currentDeck: action.payload.name,
      };

    // case CHANGE_WORD:
    //   return {
    //     ...state,
    //     currentWord: action.payload.wordId,
    //   };

    case CHANGE_GAME_MODE:
      return {
        ...state,
        gameMode: action.payload.gameMode,
      };
    default:
      return state;
  }
}
