import React from "react";
import DeckInfo from "../../components/DeckInfo/DeckInfo";
import { useSelector } from "react-redux";

export default function DeckList() {
  const decks = useSelector((state) => state.decks);

  return (
    <div>
      {decks.map((deck) => (
        <DeckInfo deck={deck} removable={true} />
      ))}
    </div>
  );
}
