//TODO: past jord note -- don't pass in an empty array in the final code. this is a subtle bug that will show why it's good to test 🤓
export const filterByType = (arrayOfPokemon, type) =>
  arrayOfPokemon.reduce((filteredPokemonArray, pokemonAtArrayIndex) => {
    if (pokemonAtArrayIndex.types.includes(type)) {
      return [...filteredPokemonArray, pokemonAtArrayIndex];
    }
    return filteredPokemonArray;
  });
