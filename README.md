# flash-cards

Haalby's Flash Card App

A Node/React app to create and study flashcards by @Alexander, @BDMartinez, @hans

## Description:

Our app allows users to improve their knowledge of any topic by creating decks of flashcards, organized by the subjects they want to study.

For example, you could create a deck about the React Component Lifecycle, then add cards for each step in the lifecycle. Opening the deck to review would show you your cards, shuffled and one by one, to review.

Once you've created a deck, you can make it public for other users of the app to view. You can also add other user's decks to your collection.

## User Stories:

## Features:

* Create, Read, Update, and Delete individual flashcards and decks
* Quiz yourself
* Share your decks publicly, so other users can study the same topic

## Dependancies:

* PostgreSQL
* Express
* React

## Wireframes:

## MVP:

* CRUD users
* each user can CRUD their decks
* each deck can contain any number of flashcards
* each deck can marked public or private
* all users can read all public decks

## Post MVP:

* Link documentation to flashcards
* Gameify flashcards to be multiple choice

## Database

The Database for the MVP consist of 3 tables

* a Users table for user information

  * User ID - Primary Key(Bigserial)
  * Username (varchar)
  * Hashed Password (varchar)
  * Deck ID - Foreign Key Referencing decks.id (Bigserial)

* a Decks table for deck information

  * Deck ID - Primary Key(Bigserial)
  * Title (varchar)
  * User ID - Foreign Key Referencing users.id (Bigserial)

* a Cards table for card information

  * Card ID - Primary Key(Bigserial)
  * Question (varchar)
  * Answer (varchar)
  * Deck ID - Foreign Key Referencing decks.id (Bigserial)

![Alt text](./assets/Project3DB.png)
