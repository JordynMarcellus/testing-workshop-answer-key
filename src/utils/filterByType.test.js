import { filterByType } from "./filterByType";

describe("filterByType", () => {
  it("filters out some a water pokemon", () => {
    const pokemonArray = [
      {
        name: "Bulbasaur",
        types: ["Grass", "Poison"],
      },
      {
        name: "Squirtle",
        types: ["Water"],
      },
    ];
    const expectedPokemonArray = [
      {
        name: "Bulbasaur",
        types: ["Grass", "Poison"],
      },
    ];
    expect(filterByType(pokemonArray, "Poison")).toEqual(expectedPokemonArray);
  });
});
