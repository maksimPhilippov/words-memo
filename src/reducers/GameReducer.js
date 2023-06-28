// const CHANGE_WORD = "CHANGE_WORD";
const CHANGE_DECK = "CHANGE_DECK";
const CHANGE_GAME_MODE = "CHANGE_GAME_MODE";
const SET_GAME = "SET_GAME";

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

export function setGame(game) {
  return {
    type: SET_GAME,
    payload: {
      ...game,
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

    case SET_GAME:
      return { ...action.payload };
    default:
      return state;
  }
}
