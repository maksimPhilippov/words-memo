import React from "react";

export default function Card({ word, translation }) {
  return (
    <div className="dictionary-card">
      <span>{word}</span>
      <span>{translation}</span>
    </div>
  );
}
