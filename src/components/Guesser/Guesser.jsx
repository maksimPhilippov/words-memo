import React, { useState } from "react";

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
    <div>
      <div>{word.word}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={check}>Check</button>
      <button onClick={skipWord}>Skip</button>
    </div>
  );
}
