import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDeck } from "../../actions/DeckActions";
import "./DeckAdder.css";

export default function DeckAdder() {
  const [name, setName] = useState("");
  const dispath = useDispatch();
  return (
    <div className="deck-adder">
      <input
        type="text"
        placeholder="new deck name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispath(createDeck(name))}>Create</button>
    </div>
  );
}
