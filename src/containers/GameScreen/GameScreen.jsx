import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Guesser from "../../components/Guesser/Guesser";

export default function GameScreen() {
  const gameConfiguration = useSelector((state) => state.game);
  const dictionary = useSelector((state) => state.dictionary.words);
  const deck = useSelector((state) =>
    state.decks.find((deck) => deck.name === gameConfiguration.currentDeck)
  );

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
    let id, result;
    while (result === undefined) {
      id = words[Math.round(Math.random() * (words.length - 1))];
      result = dictionary.find((word) => word.id === id);
    }
    return result;
  }

  if (deck !== undefined) {
    return (
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
    );
  } else {
    return <div></div>;
  }
}
