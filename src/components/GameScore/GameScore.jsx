import React from "react";
import "./GameScore.css";

export default function GameScore({ misstakes, hits }) {
  return (
    <div className="game-score">
      <span className="game-hits">{hits}</span>
      <span className="game-misstakes">{misstakes}</span>
    </div>
  );
}
