/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
 */

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from "./games.js";

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
 */

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
  // loop over each item in the data
  // create a new div element, which will become the game card

  // add the class game-card to the list

  // set the inner HTML using a template literal to display some info
  // about each game
  // TIP: if your images are not displaying, make sure there is space
  // between the end of the src attribute and the end of the tag ("/>")

  // append the game to the games-container
  for (let i = 0, len = games.length; i < len; i++) {
    const displayInfo = document.createElement("p");
    displayInfo.classList.add("game-card");
    displayInfo.innerHTML = `
            <div class = "game-img" >
            <img src = ${games[i].img} >
            </div>
            <div class = "game-card" >
                <h2> ${games[i].name} </h2>
                <p> ${games[i].description} </p> 
                <p> Backers: ${games[i].backers} </p> 
            </div>`;
    document.getElementById("games-container").appendChild(displayInfo);
  }
}

// call the function we just defined using the correct variable
addGamesToPage(GAMES_JSON);
// later, we'll call this function using a different list of games

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
 */

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce((acc, GAMES_JSON) => {
  return acc + GAMES_JSON.backers;
}, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = `${totalContributions.toLocaleString("en-US")}`;

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalRaised = GAMES_JSON.reduce((acc, GAMES_JSON) => {
  return acc + GAMES_JSON.pledged;
}, 0);

// set inner HTML using template literal
raisedCard.innerHTML = `$${totalRaised.toLocaleString("en-US")}`;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
const totalGames = GAMES_JSON.reduce((acc, GAMES_JSON) => {
  return acc + 1;
}, 0);

gamesCard.innerHTML = `${totalGames.toLocaleString("en-US")}`;

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
 */

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
  deleteChildElements(gamesContainer);

  // use filter() to get a list of games that have not yet met their goal
  let listUnfunded = GAMES_JSON.filter((GAMES_JSON) => {
    return GAMES_JSON.pledged < GAMES_JSON.goal;
  });
  addGamesToPage(listUnfunded);
  // use the function we previously created to add the unfunded games to the DOM
}

// show only games that are fully funded
function filterFundedOnly() {
  deleteChildElements(gamesContainer);

  // use filter() to get a list of games that have met or exceeded their goal
  let listFunded = GAMES_JSON.filter((GAMES_JSON) => {
    return GAMES_JSON.pledged >= GAMES_JSON.goal;
  });
  addGamesToPage(listFunded);
  // use the function we previously created to add unfunded games to the DOM
}

// show all games
function showAllGames() {
  deleteChildElements(gamesContainer);
  addGamesToPage(GAMES_JSON);
  // add all games from the JSON data to the DOM
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
 */

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games

//using reduce and ternary operator to count the number of unfunded
const totalUnfunded2 = GAMES_JSON.reduce((acc, GAMES_JSON) => {
    return GAMES_JSON.pledged < GAMES_JSON.goal ? acc + 1 : acc;
}, 0);

// create a string that explains the number of unfunded games using the ternary operator
const displayStr = 
`A total of $${totalRaised.toLocaleString("en-US")} has been raised for ${totalGames} games. Currently, ${totalUnfunded2} games remain unfunded. 
We need your help to fund these amazing games!`

const displayStr1game = 
`A total of $${totalRaised.toLocaleString("en-US")} has been raised for ${totalGames} games. Currently, ${totalUnfunded2} game remains unfunded. 
We need your help to fund these amazing games!`

// create a new DOM element containing the template string and append it to the description container
const displayStringElement = document.createElement("p");

//ternary operator being used to check if their is 1 game unfunded or more which changes the grammar of the string
totalUnfunded2 == 1 ? displayStringElement.innerHTML = displayStr1game : displayStringElement.innerHTML = displayStr;
document.getElementById("description-container").appendChild(displayStringElement);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames = GAMES_JSON.sort((item1, item2) => {
  return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [mostFunded, runnerUp, ...rest] = sortedGames;
const { name: name1 } = mostFunded;
const { name: name2 } = runnerUp;


// create a new element to hold the name of the top pledge game, then append it to the correct element
const topGame = document.createElement("p");
topGame.innerHTML = `${name1}`;
firstGameContainer.appendChild(topGame);

// do the same for the runner up item
const runnerUpGame = document.createElement("p");
runnerUpGame.innerHTML = `${name2}`;
secondGameContainer.appendChild(runnerUpGame);

