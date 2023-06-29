import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeDeck } from "../../actions/DeckActions";

export default function DeckInfo({ deck, removable }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{deck.name}</span>
      <span>size: {deck.wordIds.size}</span>
      {removable && (
        <button onClick={() => dispatch(removeDeck(deck.name))}>Remove</button>
      )}
      <Link to={"/decks/" + deck.name}>Edit</Link>
    </div>
  );
}
