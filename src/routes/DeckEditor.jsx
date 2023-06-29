import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import { addWordToDeck, removeWordFromDeck } from "../actions/DeckActions";
import "./Editor.css";

export default function DeckEditor() {
  const { deckName } = useParams();
  const cards = useSelector((state) => state.dictionary.words);
  const deck = useSelector((state) =>
    state.decks.find((deck) => deck.name === deckName)
  );
  const dispatch = useDispatch();
  if (deck === undefined) {
    return <div>error 404</div>;
  }

  function changeInclusionOfWord(id) {
    if (deck.wordIds.has(id)) {
      dispatch(removeWordFromDeck(id, deckName));
    } else {
      dispatch(addWordToDeck(id, deckName));
    }
  }
  return (
    <div className="editor">
      <h2>Editing deck "{deckName}"</h2>
      {cards.map((card) => {
        return (
          <div className="editor-word-option">
            <input
              type="checkbox"
              checked={deck.wordIds.has(card.id)}
              onChange={() => changeInclusionOfWord(card.id)}
            />
            <Card card={card} removeable={false} />
          </div>
        );
      })}
    </div>
  );
}
