import React from "react";
import GameConfigurer from "../containers/GameConfigurer/GameConfigurer";
import GameScreen from "../containers/GameScreen/GameScreen";

export default function Game() {
  return (
    <div>
      <GameConfigurer />
      <GameScreen />
    </div>
  );
}
