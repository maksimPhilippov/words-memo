import React from "react";
import DeckInfo from "../../components/DeckInfo/DeckInfo";
import { useSelector } from "react-redux";
import "./DeckList.css";

export default function DeckList() {
  const decks = useSelector((state) => state.decks);

  return (
    <div className="deck-list">
      {decks.map((deck) => (
        <DeckInfo key={deck.name} deck={deck} removable={true} />
      ))}
    </div>
  );
}
