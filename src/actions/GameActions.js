export const CHANGE_DECK = "CHANGE_DECK";
export const CHANGE_GAME_MODE = "CHANGE_GAME_MODE";
export const SET_GAME = "SET_GAME";

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
