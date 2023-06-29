import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDeck } from "../../actions/DeckActions";

export default function DeckAdder() {
  const [name, setName] = useState("");
  const dispath = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispath(createDeck(name))}>Create</button>
    </div>
  );
}
