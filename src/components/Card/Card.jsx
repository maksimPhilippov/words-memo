import React from "react";
import { useDispatch } from "react-redux";
import { removeDictionaryWord } from "../../reducers/DictionaryReducer";

export default function Card({ card, removeable }) {
  const dispatch = useDispatch();
  return (
    <div className="dictionary-card">
      <span>{card.word}</span>
      <span>{card.translation}</span>
      {removeable && (
        <button
          onClick={() =>
            dispatch(removeDictionaryWord(card.word, card.translation))
          }
        >
          Remove
        </button>
      )}
    </div>
  );
}
