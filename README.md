# Quiz - Questions app

# ![image](src/assets/MainScrin.jpg)

## General info

Implement a small SPA application using React.js, which consists of 3 pages: "Favorites", "Warehouse", "Deals".

## Link to layout in Figma

https://www.figma.com/file/esSprOWWWjJ1Gb7IoMHGmq/Untitled?node-id=0%3A1

## Main task

-Create an “Offer Card” component (Includes fake data from JSON, there must be at least 10 offers);
-Display offer cards in the "Warehouse" section;
-Sorting offers (all, auction, direct sales);
-Search in the warehouse by product name;
-"Add to deals" button (on click, the card is added to the "Deals" section);
-Button for adding an offer to favorites (on click, the offer is added to the "Favorites" section);
-"Pay" button in the "Transactions" section;
-"Paid" button in the "Transactions" section (disabled state, after clicking on the "Pay" button);

### Page descriptions

The application is launched from the Warehouse page. Where you can do the following:

-Sorting by types of offers (All, Auction, Direct sales);
-Search by name;
-Add to deals;
-Add to favorites;

On the Deals and Favorites page, the following actions are performed:

-Sorting by types of offers (All, Auction, Direct sales);
-Pay;
-Add to favorites;

Offer Card Description:

# ![image](src/assets/MainScrin.jpg)

## Technologies

Project is created with:

-   React
-   Redux
-   Redux-Toolkit
-   TypeScript
-   Sass modules

## Setup

To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

