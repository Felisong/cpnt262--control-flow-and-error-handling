"use strict";

// INSTRUCTIONS TO GO FAST!

import fetch from "node-fetch";

const whichPokemon = process.argv;
let pokemon = process.argv[2];

pokemon = pokemon.toLowerCase();

// no more than 3 inputs, this is to let the user know.
// try putting node brokenScript.js meowth pikachu
if (whichPokemon.length > 3) {
  console.error("Please only input one pokemon at a time.");
}
// try putting node brokenScript.js 245
if (typeof pokemon !== "string") {
  console.error("please input a valid pokemon name");
} else {
  fetchData();
}

// if you put a pokemon name that isn't real, it will catch it.
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
    console.log(` below are all of ${pokemon}'s possible moves! : `);
    // Loop through objects
    const movesArr = [];
    for (const [key, value] of Object.entries(pokemonData.moves)) {
      let move = pokemonData.moves[key].move.name;
      movesArr.push(move);
    }
    console.log(movesArr);
    // console.log(pokemonData);
    // chose to do an array just to practice it.
  } catch (error) {
    console.error("Please put in a valid pokemon name" || error.message);
  }
}
