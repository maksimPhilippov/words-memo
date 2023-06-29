export const ADD_WORD_TO_DICTIONARY = "ADD_WORD_TO_DICTIONARY";
export const REMOVE_WORD_FROM_DICTIONARY = "REMOVE_WORD_FROM_DICTIONARY";
export const SET_DICTIONARY = "SET_DICTIONARY";

export function addDictionaryWord(word, translation) {
  return {
    type: ADD_WORD_TO_DICTIONARY,
    payload: {
      word: word,
      translation: translation,
    },
  };
}

export function removeDictionaryWord(word, translation) {
  return {
    type: REMOVE_WORD_FROM_DICTIONARY,
    payload: {
      word: word,
      translation: translation,
    },
  };
}

export function setDictionary(dictionary) {
  return {
    type: SET_DICTIONARY,
    payload: {
      ...dictionary,
    },
  };
}
