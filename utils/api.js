import { AsyncStorage } from 'react-native'
export const ORDER_HISTORY_STORAGE_KEY = 'SmartMartMobile:myOrders'

export function fetchDecks () {
  return AsyncStorage.getItem(ORDER_HISTORY_STORAGE_KEY)
    .then(formatDeckResults)
}

export function getDeck (deck) {
  return AsyncStorage.getItem(ORDER_HISTORY_STORAGE_KEY)
    .then(formatDeckResults)
    .then(results => results[deck])
}

// export function saveDeckTitle ( title, key ) {
//   console.log("title", title)
//   return AsyncStorage.mergeItem(ORDER_HISTORY_STORAGE_KEY, JSON.stringify({
//     [title]: {
//       "title": title,
//       "questions": []
//     }
//   }))
// }

// export function addCardToDeck (title, qna) {
//   return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
//     .then( data => {
//       decks = JSON.parse(data);
//       decks[title].questions.push(qna);
//       AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
//     })
// }


function formatDeckResults (results) {
  return results === null
    ? setDummyOrders()
    : JSON.parse(results)
}

function setDummyOrders () {
  const dummyOrders =
  [
    {
      createdAt: 'Today',
      id: 6,
      lineItems:
        {
          id: 10,
          orderId: 6,
          product:
              {barcode:
              "2093fhasd8fj8f9",
              categoryId: 1,
              id: 1,
              inventory: 7,
              name: "Coke",
              price: 1},
          productId: 1,
          purchasePrice: 1,
          qty:3
    },
      status: "cart",
      subtotal: 3,
      userId: 2
    },
    {
      createdAt: 'Last Monday',
      id: 5,
      lineItems:
      {
        id: 10,
        orderId: 6,
        product:
            {barcode:
            "2093fhasd8fj8f9",
            categoryId: 1,
            id: 1,
            inventory: 7,
            name: "Coke",
            price: 1},
        productId: 1,
        purchasePrice: 1,
        qty:3
  },
    status: "paid",
    subtotal: 3,
    userId: 2
    }
  ]
  AsyncStorage.setItem(ORDER_HISTORY_STORAGE_KEY, JSON.stringify(dummyOrders))

  return dummyOrders
}

