import { getGames } from "./fetch-utils.js";
import { renderGames } from "./render-function.js";

// import functions and grab DOM elements
const gamesDisplay = document.getElementById('games');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  
  async function loadData() {
    
    const gaming = await getGames();
    console.log(gaming)
    
    for (let game of gaming) {
      console.log(game)
      const gameRender = renderGames(game)
      gamesDisplay.append(gameRender);
    }
  }
  
  loadData();