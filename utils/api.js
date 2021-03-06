import { AsyncStorage } from 'react-native'
export const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:decks'

export function fetchDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function getDeck (deck) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDeckResults)
    .then(results => results[deck])
}

export function saveDeckTitle ( title, key ) {
  console.log("title", title)
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      "title": title,
      "questions": []
    }
  }))
}

export function addCardToDeck (title, qna) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then( data => {
      decks = JSON.parse(data);
      decks[title].questions.push(qna);
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
    })
}


function formatDeckResults (results) {
  return results === null
    ? setDummyDecks()
    : JSON.parse(results)
}

function setDummyDecks () {
  const dummyDecks =
  {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyDecks))

  return dummyDecks
}

