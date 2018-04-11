# Flash Cards

A Node/React app to create and study flashcards by @Alexander, @BDMartinez, @hans

## Description:

Our app allows users to improve their knowledge of any topic by creating decks of flashcards, organized by the subjects they want to study.

For example, you could create a deck about the React Component Lifecycle, then add cards for each step in the lifecycle. Opening the deck to review would show you your cards, shuffled and one by one, to review.

Once you've created a deck, you can make it public for other users of the app to view. You can also add other user's decks to your collection.

## User Stories:

As someone who just stumbled upon this site, I want to see a little bit of information, so that I know if I want to sign up or not.

As someone who does not have an account, I want to sign up, so that I can use the flash card app.

As someone who has an account, I want to log in, so that I can use the flash card app.

As someone who is logged in, I want to see my profile at the top of the screen, so that I can choose to sign out whenever I please.

As someone on the home page, I want to see the decks I have and see public decks, so that I can use someone else's flash cards to study for my Global History exam that's coming up next Tuesday.

As someone on the home page, I want to see a list of my decks so that I can use my flash cards to study for my music theory exam that's coming up next Friday.

As someone on the home page, I want the option to add decks if I don't have any in my collection, so that I can make flashcards that will help me study.

As someone who is on the home page, I want the option to edit the decks I currently have, so that I can make adjustments to the contents of the said deck.

As someone on the home page, when I click on add a deck, I want to be taken to a view of the deck, so that I can change the name of the deck as well as update or add flashcards.

As someone who is not on the home page, I want to have a button that takes me to the home page(maybe in the header...), so that I can easily navigate through the app.

---

As someone on the edit/add deck page, I want to be able to change the name of my deck, because I want my deck to have a name that makes sense.

As someone editing/adding a specific deck, I want to see the list of my decks on the side, so that I can easily switch between the decks I want to edit.

As someone who is editing the deck name, I want to save the new name, so that it doesn't revert back to the name I didn't like.

As someone editing the deck page, I want the option to _delete_ my deck, because I no longer need to review this topic.

As someone who _deleted_ a deck, I want to be redirected back to the home page, because that has a view of all my decks.

As someone who just made a new deck, I want to add cards to my deck, so that I can make have functional flashcards to review.

As someone who has cards in my deck, I want to see a list of cards in the deck, so that I can pick which card I want to edit.

---

As someone adding a new card, I want to add a _question_ and _answer_, so that my flashcards are useful.

As someone editing a card, I want to change the _question_ and _answer_ , because I didn't like the wording.

As someone who just edited a card, I want to save the changes I've made, so that my flashcards are up to date.

As someone editing a card, I want the option to _delete_ the card, because it is no longer needed.

As someone who _deleted_ a card, I want to be taken to the view of the overall deck, because then I can see all of my cards.

---

As someone on the home page, When I click on a deck, I want to be taken to a view where I can use my flashcards, so that I can flip through the questions and answers of each card.

As someone on the review page I want to see the question on the card first, so that I can think of an answer.

As someone on the review page, I want the answer to be revealed to me **once a specific amount of time has passed** OR **once I have tapped on the card**, so that I know if my answer was correct or not.

As someone who saw the answer, I want to let the app know if I understand question or not, so that I can track my progress.

    Then I want to see the next card.

As someone who is finished reviewing cards, I want to be redirected to the home page.

## Features:

* **Create**, **Read**, **Update**, and **Delete** individual flashcards and decks
* **Quiz** yourself
* **Share** your decks publicly, so other users can study the same topic
* **Navigate** and **Edit** seamlessly from the **Dashboard** to your decks and/or individual flashcards
* **Track** which cards you need to **Review**

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

The Database for the MVP consist of 4 tables

* a **Users** table for user information

  * User ID - Primary Key(Bigserial)
  * Username (varchar)
  * Hashed Password (varchar)
  * Deck ID - Foreign Key Referencing decks.id (Bigserial)

* a **Decks** table for deck information

  * Deck ID - Primary Key(Bigserial)
  * Title (varchar)
  * User ID - Foreign Key Referencing users.id (Bigserial)

* a **Cards** table for card information

  * Card ID - Primary Key(Bigserial)
  * Question (varchar)
  * Answer (varchar)
  * Deck ID - Foreign Key Referencing decks.id (Bigserial)

- a **Progression** table that stores the cards that a user wants to review

  * Card ID - Foreign Key Referencing cards.id (Bigserial)
  * User ID - Foreign Key Referencing users.id (Bigserial)

![Alt text](./assets/Project3DB.png)
