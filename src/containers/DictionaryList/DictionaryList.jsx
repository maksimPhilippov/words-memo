import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

export default function DictionaryList() {
  const cards = useSelector((state) => state.dictionary.words);
  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} removeable={true} />
      ))}
    </div>
  );
}
