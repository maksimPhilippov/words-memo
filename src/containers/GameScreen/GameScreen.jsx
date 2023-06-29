import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Guesser from "../../components/Guesser/Guesser";
import GameScore from "../../components/GameScore/GameScore";
import "./GameScreen.css";

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
  }, [deck]);

  const [gameState, setGameState] = useState({
    mistakeCounter: 0,
    hitCounter: 0,
    currentWord: pickWord(),
  });

  useEffect(() => {
    setGameState({
      mistakeCounter: 0,
      hitCounter: 0,
      currentWord: pickWord(),
    });
  }, [deck]);

  function pickWord() {
    console.log("pick ", words);
    if (words === undefined) {
      return undefined;
    }
    if (words.length == 0) {
      return { word: "add words to this deck", translation: null, id: null };
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
      <div className="game-screen">
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
      </div>
    );
  } else {
    return <div></div>;
  }
}
