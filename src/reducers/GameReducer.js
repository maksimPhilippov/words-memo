import {
  CHANGE_DECK,
  CHANGE_GAME_MODE,
  SET_GAME,
} from "../actions/GameActions";

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
