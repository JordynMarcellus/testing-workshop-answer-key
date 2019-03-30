import React from "react";
import renderer from "react-test-renderer";
import axios from "axios";
import { render, cleanup, waitForElement } from "react-testing-library";
import { SinglePokemonContainer, fetchPokemon } from "./";
import { mockPikaData } from "../../utils/mockData";
import "jest-dom/extend-expect";

jest.mock("axios");

describe("SinglePokemonContainer", () => {
  it("successfully calls the async data fetching function", async () => {
    axios.mockResolvedValue(mockPikaData);
    const loadingChange = jest.fn();
    const pokemonChange = jest.fn();
    const expectedUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
    expect.assertions(3);
    await fetchPokemon("pikachu", loadingChange, pokemonChange);
    await expect(axios).toBeCalledWith(expectedUrl);
    expect(loadingChange).toBeCalledWith(false);
    expect(pokemonChange).toBeCalledWith(mockPikaData.data);
  });
  it("passes an error condition", async () => {
    axios.mockResolvedValue(mockPikaData);
    const loadingChange = jest.fn();
    const pokemonChange = jest.fn();
    const expectedUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
    expect.assertions(3);
    await fetchPokemon("pikachu", loadingChange, pokemonChange);
    await expect(axios).toBeCalledWith(expectedUrl);
    expect(loadingChange).toBeCalledWith(false);
    expect(pokemonChange).toBeCalledWith(mockPikaData.data);
  });
  describe("useEffect integration tests", () => {
    afterEach(cleanup);
    it("renders the loading state", () => {
      const originalError = console.error;
      console.error = jest.fn();

      const { container } = render(
        <SinglePokemonContainer pokemonName={"Pikachu"} />
      );
      expect(container.firstChild).toMatchSnapshot();
      expect(container).toHaveTextContent("Loading");
      console.error = originalError;
    });
    it("renders the resolved state", async () => {
      const originalError = console.error;
      console.error = jest.fn();

      const { getByText, container } = render(
        <SinglePokemonContainer pokemonName={"Pikachu"} />
      );
      axios.mockResolvedValue(mockPikaData);
      await waitForElement(() => getByText("pikachu"));
      expect.assertions(2);
      expect(container.firstChild).toMatchSnapshot();
      expect(container).toHaveTextContent("pikachu");

      console.error = originalError;
    });
  });
});
