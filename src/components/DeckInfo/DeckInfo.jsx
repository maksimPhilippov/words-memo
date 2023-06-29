import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeDeck } from "../../actions/DeckActions";
import "./DeckInfo.css";

export default function DeckInfo({ deck, removable }) {
  const dispatch = useDispatch();

  return (
    <div className="deck-info">
      <span>{deck.name}</span>
      <span>{deck.wordIds.size}</span>
      {removable && (
        <button onClick={() => dispatch(removeDeck(deck.name))}>Remove</button>
      )}
      <Link to={"/decks/" + deck.name}>Edit</Link>
    </div>
  );
}
