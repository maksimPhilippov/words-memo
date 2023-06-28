import React from "react";
import { DictionaryAdder } from "../containers/DictionaryAdder/DictionaryAdder";
import DictionaryList from "../containers/DictionaryList/DictionaryList";

export default function Dictionary() {
  return (
    <div>
      <DictionaryAdder />
      <DictionaryList />
    </div>
  );
}
