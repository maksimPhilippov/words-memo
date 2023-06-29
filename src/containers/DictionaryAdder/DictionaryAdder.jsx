import "./DictionaryAdder.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDictionaryWord } from "../../actions/DictionaryActions";

export const DictionaryAdder = (props) => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="dictionary-adder">
      <input
        type="text"
        placeholder="word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="translation"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
      />
      <button onClick={() => dispatch(addDictionaryWord(word, translation))}>
        Add to dictionary
      </button>
    </div>
  );
};
