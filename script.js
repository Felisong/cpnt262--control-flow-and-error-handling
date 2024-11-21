"use strict";
import fetch from "node-fetch";

const whichPokemon = process.argv;
let pokemon;

// instructions
// console.log(
//   "Please input your chosen Pokemon following this structure: node script.js pikachu"
// );

// no more than 3 inputs for the user to know.
if (whichPokemon.length > 3) {
  console.error("Please only input one pokemon at a time.");
} else {
  pokemon = process.argv[2];
  fetchData();
}

// FUNCTION TO FETCH API
async function fetchData() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const pokemonData = await response.json();
    if (pokemonData === " " || pokemonData === 0) {
      throw new Error("data is empty, please try again later");
    }
    console.log(` below are all of ${pokemon}'s moves! : `);
    // Loop through objects
    for (const [key, value] of Object.entries(pokemonData.moves)) {
      // console.log(`${key}: ${value}`);
      let move = pokemonData.moves[key].move.name;
      console.log(move);
    }
    // console.log(typeof pokemonData.moves[0].move.name);
  } catch (error) {
    console.error("Please input a valid pokemon." || error.message);
  }
}
