"use strict";
import { error } from "console";
import fetch from "node-fetch";
import { type } from "os";

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
}
console.log(pokemon);

async function fetchData() {
  try {
    console.log();
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    if (pokemonData === " " || pokemonData === 0) {
      throw new Error("data is empty, please try again later");
    }

    console.log(pokemonData);
    // return certain data.
  } catch (error) {
    console.error("Please input a valid pokemon." || error.message);
  }
}
fetchData();

// console.log(cats);
