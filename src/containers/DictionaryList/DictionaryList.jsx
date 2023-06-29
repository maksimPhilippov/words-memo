import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import "./DictionaryList.css";

export default function DictionaryList() {
  const cards = useSelector((state) => state.dictionary.words);
  return (
    <div className="dictionary-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} removeable={true} />
      ))}
    </div>
  );
}
