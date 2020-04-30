# Mobile Flashcards Project

This app allows you to create decks of flashcards and quiz yourself on the questions you've added.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start` or `expo start`

## What You're Getting
```bash
├── app.json
├── App.js # Routes different tabs and stacks to different components
├── babel.config.js
├── package.json
├── README.md # This file.
├── actions # Actions and action creators
│   └── index.js
├── assets # App assets
│   ├── icon.png
│   └── splash.png
├── components
│   ├── AddCard.js # Component for adding new card (question)
│   ├── AddDeck.js # Component for adding new deck
│   ├── Deck.js # Deck summary and buttons for starting a quiz or adding new card (question)
│   ├── DeckCard.js # Displays deck title and number of cards
│   ├── DeckView.js # Displays a list of DeckCards
│   ├── Quiz.js # Displays question and answer, and buttons for recording correct/incorrect
│   ├── QuizView.js # Quiz container
│   └── Score.js # Displays the score of the quiz
├── reducers # Handling various states returned from actions
│   └── index.js
└── utils
    └── color.js # Colors being used in the app
```

## Important
This app has only bee tested on **iPhone 7**

## Expo CLI

This project was bootstrapped with [Expo CLI](https://docs.expo.io/get-started/create-a-new-app/).
## Licenses

This repository is licenced under [GNU GPLv3](https://spdx.org/licenses/GPL-3.0-or-later.html)