import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown/Dropdown";
import { changeGameMode, changePlayingDeck } from "../../actions/GameActions";
import "./GameConfigurer.css";

const gameModes = ["lite", "to fail", "long race", "medium race", "short race"];

export default function GameConfigurer() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const deckNames = useSelector((state) =>
    state.decks.map((deck) => deck.name)
  );

  return (
    <div className="game-configurer">
      <Dropdown
        options={gameModes}
        current={game.gameMode}
        onChoose={(option) => dispatch(changeGameMode(option))}
      />
      <Dropdown
        options={deckNames}
        current={game.currentDeck}
        onChoose={(option) => dispatch(changePlayingDeck(option))}
      />
    </div>
  );
}
