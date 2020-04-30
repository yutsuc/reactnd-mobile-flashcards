export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_DECK = "REMOVE_DECK";

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    };
}

export function addDeck(deckName) {
    return {
        type: ADD_DECK,
        deckName,
    };
}

export function addCard(deckName, card) {
    return {
        type: ADD_CARD,
        deckName,
        card,
    };
}

export function removeDeck(deckName) {
    return {
        type: REMOVE_DECK,
        deckName,
    }
}