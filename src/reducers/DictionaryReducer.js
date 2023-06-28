const ADD_WORD_TO_DICTIONARY = "ADD_WORD_TO_DICTIONARY";
const REMOVE_WORD_FROM_DICTIONARY = "REMOVE_WORD_FROM_DICTIONARY";
const SET_DICTIONARY = "SET_DICTIONARY";

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

export function DictionaryReducer(state = { words: [], nextId: 0 }, action) {
  let newDictionary = {};
  switch (action.type) {
    case ADD_WORD_TO_DICTIONARY:
      newDictionary.words = state.words.slice(0);
      newDictionary.words.push({ ...action.payload, id: state.nextId });
      newDictionary.nextId = state.nextId + 1;
      return newDictionary;

    case REMOVE_WORD_FROM_DICTIONARY:
      newDictionary.words = state.words.filter((element) => {
        return (
          element.word !== action.payload.word ||
          element.translation !== action.payload.translation
        );
      });
      newDictionary.nextId = state.nextId;
      return newDictionary;
    case SET_DICTIONARY:
      return { ...action.payload };

    default:
      return state;
  }
}
