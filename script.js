"use strict";
import fetch from "node-fetch";

const whichPokemon = process.argv;
let pokemon = process.argv[2];

pokemon = pokemon.toLowerCase();

// no more than 3 inputs for the user to know.
if (whichPokemon.length > 3) {
  console.error("Please only input one pokemon at a time.");
}
if (typeof pokemon !== "string") {
  console.error("please input a valid pokemon name");
} else {
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
    console.log(` below are all of ${pokemon}'s possible moves! : `);
    // Loop through objects
    const movesArr = [];
    for (const [key, value] of Object.entries(pokemonData.moves)) {
      let move = pokemonData.moves[key].move.name;
      movesArr.push(move);
    }
    console.log(movesArr);
  } catch (error) {
    console.error("Please input a valid pokemon." || error.message);
  }
}
