import { AsyncStorage } from "react-native";
const FLASHCARDS_STORAGE_KEY = "UdaciCards:flashcard ";

// return all of the decks along with their titles, questions, and answers.
export function getDecks() {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(result => JSON.parse(result));
}

// take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({ [title]: { title, questions: [] } }));
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(result => {
        let data = JSON.parse(result);
        data[title].questions = data[title].questions.concat(card);
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    });
}

// take in a single title argument and removes the deck
export function removeDeckFromStorage(title) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(result => {
        let data = JSON.parse(result);
        data[title] = undefined;
        delete data[title];
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    });
}