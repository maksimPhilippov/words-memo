import React, { useState } from "react";
import "./Guesser.css";

export default function Guesser({ word, onSuccess, onFail, skipWord }) {
  const [text, setText] = useState("");

  function isCorrectTranslation() {
    return text === word.translation;
  }

  function check() {
    if (isCorrectTranslation()) {
      onSuccess();
    } else {
      onFail();
    }
  }

  return (
    <div className="guesser">
      <div className="guesser-task">{word.word}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="guesser-controls">
        <button onClick={check}>Check</button>
        <button onClick={skipWord}>Skip</button>
      </div>
    </div>
  );
}
