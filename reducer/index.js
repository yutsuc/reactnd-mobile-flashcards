import { ADD_CARD, ADD_CARD, RECEIVE_DECKS, ADD_DECK } from "../actions"
export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            };
        case ADD_DECK:
            return {
                ...state,
                [action.deckName]: {},
            };
        case ADD_CARD:
            return {
                ...state,
                [action.deckName]: [action.deckName].concat(card),
            };
        default:
            state;
    }
}