import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "../routes/Game";
import DeckManager from "../routes/DeckManager";
import Dictionary from "../routes/Dictionary";
import Navbar from "./Navbar/Navbar";
import DeckEditor from "../routes/DeckEditor";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="deck-manager" element={<DeckManager />} />
        <Route path="decks/:deckName" element={<DeckEditor />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}
