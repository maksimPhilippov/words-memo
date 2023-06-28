import React from "react";
import DeckAdder from "../containers/DeckAdder/DeckAdder";
import DeckList from "../containers/DeckList/DeckList";

export default function DeckManager() {
  return (
    <div>
      <DeckAdder />
      <DeckList />
    </div>
  );
}
