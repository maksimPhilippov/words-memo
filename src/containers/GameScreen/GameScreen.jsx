import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Guesser from "../../components/Guesser/Guesser";
import GameScore from "../../components/GameScore/GameScore";

export default function GameScreen() {
  const gameConfiguration = useSelector((state) => state.game);
  const dictionary = useSelector((state) => state.dictionary.words);
  const deck = useSelector((state) => {
    const result = state.decks.find(
      (deck) => deck.name === gameConfiguration.currentDeck
    );
    return result;
  });

  const words = useMemo(() => {
    if (deck !== undefined) {
      return Array.from(deck.wordIds.values());
    }
  }, [dictionary, deck]);

  const [gameState, setGameState] = useState({
    mistakeCounter: 0,
    hitCounter: 0,
    currentWord: pickWord(),
  });

  function pickWord() {
    if (words === undefined) {
      return undefined;
    }
    let id,
      result,
      limiter = 100;
    while (result === undefined && --limiter > 0) {
      id = words[Math.round(Math.random() * (words.length - 1))];
      result = dictionary.find((word) => word.id === id);
    }
    return result;
  }

  if (deck !== undefined) {
    return (
      <>
        <GameScore
          misstakes={gameState.mistakeCounter}
          hits={gameState.hitCounter}
        />
        <Guesser
          word={gameState.currentWord}
          onFail={() => {
            setGameState({
              mistakeCounter: gameState.mistakeCounter + 1,
              hitCounter: gameState.hitCounter,
              currentWord: pickWord(),
            });
          }}
          onSuccess={() => {
            setGameState({
              mistakeCounter: gameState.mistakeCounter,
              hitCounter: gameState.hitCounter + 1,
              currentWord: pickWord(),
            });
          }}
          skipWord={() => {
            setGameState({
              mistakeCounter: gameState.mistakeCounter,
              hitCounter: gameState.hitCounter,
              currentWord: pickWord(),
            });
          }}
        />
      </>
    );
  } else {
    return <div></div>;
  }
}
